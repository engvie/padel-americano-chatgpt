<template>
  <v-container>
    <v-card>
      <v-card-title>Leaderboard</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(player, index) in sortedPlayers"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ player.name }}: {{ player.totalPoints }} points</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      players: [],
    };
  },
  computed: {
    sortedPlayers() {
      return this.players.sort((a, b) => b.totalPoints - a.totalPoints);
    },
  },
  methods: {
    calculatePlayerPoints() {
      const matchSchedule = JSON.parse(localStorage.getItem("matchSchedule"));
      const gameSettings = JSON.parse(localStorage.getItem("gameSettings"));

      if (matchSchedule && gameSettings) {
        const playerPoints = {};

        // Initialize player points
        gameSettings.players.forEach(player => {
          playerPoints[player] = 0;
        });

        // Calculate total points for each player
        matchSchedule.forEach(round => {
          round.forEach(game => {
            const [team1, team2] = game.teams;
            const [score1, score2] = game.scores;

            if (score1 !== null && score2 !== null) {
              team1.forEach(player => {
                playerPoints[player] += score1;
              });
              team2.forEach(player => {
                playerPoints[player] += score2;
              });
            }
          });
        });

        // Populate players array with names and total points
        this.players = gameSettings.players.map(name => ({
          name,
          totalPoints: playerPoints[name],
        }));
      }
    },
  },
  created() {
    this.calculatePlayerPoints();
  },
};
</script>

<style scoped>
.v-list-item-title {
  font-weight: bold;
}
</style>
