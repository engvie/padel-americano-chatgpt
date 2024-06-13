<template>
  <v-container>
    <v-row v-for="(match, matchIndex) in matchSchedule" :key="matchIndex">
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">Match {{ matchIndex + 1 }}</v-card-title>
          <v-row>
            <v-col v-for="(court, courtIndex) in match" :key="courtIndex" cols="6">
              <v-card-title class="headline">Bana {{ courtIndex + 1 }}</v-card-title>
              <v-card-text>
                <strong>Lag A:</strong> {{ court.teams[0][0] }} / {{ court.teams[0][1] }}
                <v-text-field
                  label="Poäng Lag A"
                  type="number"
                  v-model.number="court.scores[0]"
                  @input="updateScore(matchIndex, courtIndex, 0)"
                ></v-text-field>
                <br />
                <strong>Lag B:</strong> {{ court.teams[1][0] }} / {{ court.teams[1][1] }}
                <v-text-field
                  label="Poäng Lag B"
                  type="number"
                  v-model.number="court.scores[1]"
                  @input="updateScore(matchIndex, courtIndex, 1)"
                ></v-text-field>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      matchSchedule: [],
      totalPoints: 32,
    };
  },
  methods: {
    createMatchSchedule() {
      const gameSettings = JSON.parse(localStorage.getItem("gameSettings"));
      if (!gameSettings) {
        console.error("No game settings found in local storage");
        return;
      }

      const playerCount = Number(gameSettings.playerCount);
      const players = gameSettings.players;
      const courtCount = Number(gameSettings.courtCount);
      this.totalPoints = Number(gameSettings.totalPoints);

      if (players.length !== playerCount) {
        console.error("Invalid input for game settings");
        return;
      }

      if (playerCount % 2 !== 0) {
        console.error("Player count must be even for round-robin scheduling.");
        return;
      }

      this.matchSchedule = [];

      const halfSize = playerCount / 2;

      // Shuffle the players
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };

      for (let round = 0; round < playerCount - 1; round++) {
        let tempPlayers = [...players];
        shuffleArray(tempPlayers); // Shuffle players for each round
        let courtMatches = [];

        for (let courtIndex = 0; courtIndex < courtCount; courtIndex++) {
          if (courtIndex * 2 >= halfSize) break;

          const teamA = [tempPlayers[courtIndex], tempPlayers[halfSize - 1 - courtIndex]];
          const teamB = [tempPlayers[halfSize + courtIndex], tempPlayers[playerCount - 1 - courtIndex]];

          courtMatches.push({ teams: [teamA, teamB], scores: [null, null] });
        }

        this.matchSchedule.push(courtMatches);

        players.splice(1, 0, players.pop());
      }

      localStorage.setItem("matchSchedule", JSON.stringify(this.matchSchedule));
    },
    updateScore(matchIndex, courtIndex, teamIndex) {
      const match = this.matchSchedule[matchIndex];
      const court = match[courtIndex];
      const teamAScore = court.scores[0];
      const teamBScore = court.scores[1];

      if (teamIndex === 0 && teamAScore !== null) {
        court.scores[1] = this.totalPoints - teamAScore;
      } else if (teamIndex === 1 && teamBScore !== null) {
        court.scores[0] = this.totalPoints - teamBScore;
      }

      this.matchSchedule = [...this.matchSchedule];
      localStorage.setItem("matchSchedule", JSON.stringify(this.matchSchedule));
    },
  },
  created() {
    const savedSchedule = JSON.parse(localStorage.getItem("matchSchedule"));
    if (savedSchedule && savedSchedule.length > 0) {
      this.matchSchedule = savedSchedule;
    }
  },
  watch: {
    "$root.$data.shouldCreateSchedule": function (newVal) {
      if (newVal) {
        this.createMatchSchedule();
        this.$root.$data.shouldCreateSchedule = false;
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
