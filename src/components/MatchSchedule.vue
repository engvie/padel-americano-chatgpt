<template>
  <v-card>
    <v-card-title>Spelschema</v-card-title>
    <v-card-text>
      <v-text-field
        v-model.number="totalPoints"
        label="Totalt antal poäng per match"
        type="number"
        @input="updateTotalPoints"
      />
      <v-list>
        <v-list-item v-for="(match, index) in matches" :key="index">
          <div><strong>Match {{ index + 1 }}:</strong></div>
          <v-row>
            <v-col cols="6">
              <div>Team 1: {{ match[0].name }} & {{ match[1].name }}</div>
              <v-text-field
                v-model.number="team1Scores[index]"
                label="Poäng Lag 1"
                type="number"
                @input="updateScore(index, 1)"
              />
            </v-col>
            <v-col cols="6">
              <div>Team 2: {{ match[2].name }} & {{ match[3].name }}</div>
              <v-text-field
                v-model.number="team2Scores[index]"
                label="Poäng Lag 2"
                type="number"
                @input="updateScore(index, 2)"
              />
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MatchSchedule',
  props: ['players'],
  data() {
    return {
      localPlayers: this.copyPlayers(this.players), // Create a local copy of players
      matches: [],
      team1Scores: Array(7).fill(0), // Array to store scores for team 1
      team2Scores: Array(7).fill(0), // Array to store scores for team 2
      totalPoints: 32, // Default total points per match
    };
  },
  created() {
    const savedTeam1Scores = JSON.parse(localStorage.getItem('team1Scores'));
    const savedTeam2Scores = JSON.parse(localStorage.getItem('team2Scores'));
    const savedTotalPoints = JSON.parse(localStorage.getItem('totalPoints'));
    const savedMatches = JSON.parse(localStorage.getItem('matches'));

    if (savedTeam1Scores && savedTeam2Scores) {
      this.team1Scores = savedTeam1Scores;
      this.team2Scores = savedTeam2Scores;
    }

    if (savedTotalPoints) {
      this.totalPoints = savedTotalPoints;
    }

    if (savedMatches) {
      this.matches = savedMatches;
    } else {
      this.generateMatches();
    }

    // Hämta ordningen på spelarna från localStorage
    let savedPlayerOrder = JSON.parse(localStorage.getItem('playerOrder'));
    if (savedPlayerOrder) {
      this.localPlayers = savedPlayerOrder.map(player => this.players.find(p => p.name === player.name));
    }
  },
  watch: {
    team1Scores: {
      handler() {
        this.saveScoresToLocalStorage();
      },
      deep: true
    },
    team2Scores: {
      handler() {
        this.saveScoresToLocalStorage();
      },
      deep: true
    },
    players(newPlayers) {
      this.localPlayers = this.copyPlayers(newPlayers);
      this.savePlayerOrderToLocalStorage();
    }
  },
  methods: {
    copyPlayers(players) {
      return players.map(player => ({ ...player }));
    },
    generateMatches() {
      let playersCopy = this.copyPlayers(this.localPlayers);
      let matches = [];
      
      for (let i = 0; i < 7; i++) {
        let match = [];
        for (let j = 0; j < 4; j++) {
          let randomIndex = Math.floor(Math.random() * playersCopy.length);
          match.push(playersCopy.splice(randomIndex, 1)[0]);
        }
        matches.push(match);
        playersCopy = this.copyPlayers(this.localPlayers); // Reset players array
      }
      
      this.matches = matches;
      localStorage.setItem('matches', JSON.stringify(this.matches));
    },
    updateScore(matchIndex, team) {
      if (team === 1) {
        this.team2Scores[matchIndex] = this.totalPoints - this.team1Scores[matchIndex];
      } else {
        this.team1Scores[matchIndex] = this.totalPoints - this.team2Scores[matchIndex];
      }
    },
    updateTotalPoints() {
      if (this.totalPoints < 0) {
        this.totalPoints = 0;
      }
      this.team2Scores = this.team1Scores.map(score => this.totalPoints - score);
      this.saveTotalPointsToLocalStorage();
    },
    saveScoresToLocalStorage() {
      localStorage.setItem('team1Scores', JSON.stringify(this.team1Scores));
      localStorage.setItem('team2Scores', JSON.stringify(this.team2Scores));
    },
    saveTotalPointsToLocalStorage() {
      localStorage.setItem('totalPoints', JSON.stringify(this.totalPoints));
    },
    savePlayerOrderToLocalStorage() {
      const playerOrder = this.localPlayers.map(player => ({ name: player.name }));
      localStorage.setItem('playerOrder', JSON.stringify(playerOrder));
    },
    clearScores() {
      this.team1Scores = Array(7).fill(0);
      this.team2Scores = Array(7).fill(0);
      localStorage.removeItem('team1Scores');
      localStorage.removeItem('team2Scores');
    },
    randomizePlayers() {
      this.localPlayers = this.shufflePlayers(this.localPlayers);
      this.savePlayerOrderToLocalStorage();
      this.generateMatches(); // Generera nya matcher efter att ha slumpat om spelarna
    },
    shufflePlayers(array) {
      let currentIndex = array.length, randomIndex;
      
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      
      return array;
    }
  }
}
</script>
