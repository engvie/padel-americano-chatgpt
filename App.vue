<template>
    <v-app>
      <v-main>
        <v-container>
          <PlayerList :players="players" @save-players="updatePlayers" @clear-scores="clearScores" @randomize-players="randomizePlayers" />
          <MatchSchedule :players="players" ref="matchSchedule" />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import PlayerList from './components/PlayerList.vue';
  import MatchSchedule from './components/MatchSchedule.vue';
  
  export default {
    name: 'App',
    components: {
      PlayerList,
      MatchSchedule
    },
    data() {
      return {
        players: JSON.parse(localStorage.getItem('players')) || [
          { name: '' }, { name: '' }, { name: '' }, { name: '' },
          { name: '' }, { name: '' }, { name: '' }, { name: '' }
        ]
      };
    },
    methods: {
      updatePlayers(newPlayers) {
        this.players = newPlayers;
        this.$refs.matchSchedule.generateMatches();
      },
      clearScores() {
        this.$refs.matchSchedule.clearScores();
      },
      randomizePlayers() {
        this.players = this.players.sort(() => Math.random() - 0.5);
        this.$refs.matchSchedule.generateMatches();
      }
    }
  }
  </script>
  