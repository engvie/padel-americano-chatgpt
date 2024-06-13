<template>
  <v-card>
    <v-card-title>
      Spelare
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleCollapse">
        <v-icon>{{ collapsed ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text v-show="!collapsed">
      <v-list>
        <v-list-item v-for="(player, index) in players" :key="index">
          <v-text-field
            v-model="player.name"
            label="Spelare {{ index + 1 }}"
            @input="savePlayers"
          />
        </v-list-item>
      </v-list>
      <v-btn color="primary" @click="savePlayers">Spara spelare</v-btn>
      <v-btn color="primary" class="ml-2" @click="confirmRandomizePlayers">Setup teams</v-btn>
      <v-dialog v-model="randomizePlayersDialog">
        <v-card>
          <v-card-title>Är du säker på att du vill slumpa spelarna?</v-card-title>
          <v-card-actions>
            <v-btn @click="randomizePlayers" color="primary">Ja, slumpa spelare</v-btn>
            <v-btn @click="randomizePlayersDialog = false">Avbryt</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="error" class="ml-2" @click="confirmClearScores">Rensa poäng</v-btn>
      <v-dialog v-model="clearScoresDialog">
        <v-card>
          <v-card-title>Är du säker på att du vill rensa alla poäng?</v-card-title>
          <v-card-actions>
            <v-btn @click="clearScores" color="error">Ja, rensa poäng</v-btn>
            <v-btn @click="clearScoresDialog = false">Avbryt</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
    <v-card-text>
      <v-divider></v-divider>
      <v-subheader>Poängställning</v-subheader>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(player, index) in sortedPlayers" :key="player.name">
            <v-list-item-content>
              <v-list-item-title>{{ index + 1 }}. {{ player.name }} - {{ player.totalPoints }} poäng</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PlayerList',
  props: ['players'],
  data() {
    return {
      collapsed: true,
      randomizePlayersDialog: false,
      clearScoresDialog: false
    };
  },
  computed: {
    sortedPlayers() {
      return [...this.players].sort((a, b) => b.totalPoints - a.totalPoints);
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    savePlayers() {
      localStorage.setItem('players', JSON.stringify(this.players));
      this.$emit('save-players', this.players);
    },
    confirmClearScores() {
      this.clearScoresDialog = true;
    },
    clearScores() {
      this.$emit('clear-scores');
      this.clearScoresDialog = false;
    },
    confirmRandomizePlayers() {
      this.randomizePlayersDialog = true;
    },
    randomizePlayers() {
      this.$emit('randomize-players');
      this.randomizePlayersDialog = false;
    }
  }
}
</script>

<style scoped>
.ml-2 {
  margin-left: 8px;
}
</style>
