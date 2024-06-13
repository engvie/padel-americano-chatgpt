<template>
  <v-app>
    <v-container>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="white--text">Padel Americano</v-toolbar-title>
      </v-toolbar>
      <GameSettings @create-schedule="triggerCreateSchedule" />
      <MatchSchedule />
      <ScoreBoard />
    </v-container>
  </v-app>
</template>

<script>
import GameSettings from "./components/GameSettings.vue";
import MatchSchedule from "./components/MatchSchedule.vue";
import ScoreBoard from "./components/ScoreBoard.vue";

export default {
  components: {
    GameSettings,
    MatchSchedule,
    ScoreBoard,
  },
  data() {
    return {
      shouldCreateSchedule: false,
    };
  },
  methods: {
    triggerCreateSchedule() {
      this.shouldCreateSchedule = true;
    },
  },
};
</script>

<style>
</style>
