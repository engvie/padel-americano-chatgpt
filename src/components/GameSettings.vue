<template>
    <v-container>
      <v-card>
        <v-card-title>
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span>Game Settings</span>
            <v-btn icon @click="toggleSettings">
              <v-icon>{{ settingsOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <v-expand-transition>
          <v-card-text v-if="settingsOpen">
            <v-form @submit.prevent="confirmAndSaveSettings">
              <v-text-field
                label="Totalt Poäng"
                type="number"
                v-model.number="totalPoints"
                required
              ></v-text-field>
              <v-text-field
                label="Antal Banor"
                type="number"
                v-model.number="courtCount"
                required
              ></v-text-field>
              <v-text-field
                label="Antal Spelare"
                type="number"
                v-model.number="playerCount"
                @input="updatePlayerFields"
                required
              ></v-text-field>
              <v-text-field
                v-for="(player, index) in players"
                :key="index"
                :label="'Spelare ' + (index + 1)"
                v-model="players[index]"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Spara & skapa spelschema</v-btn>
            </v-form>
          </v-card-text>
        </v-expand-transition>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalPoints: 32,
        courtCount: 2,
        playerCount: 8,
        players: [
          "Abbe", "André", "Stoffe", "Martin",
          "Sebbe", "Mathias", "Jimmie", "Lelle"
        ],
        settingsOpen: true,
      };
    },
    methods: {
      updatePlayerFields() {
        const playerCount = Number(this.playerCount);
        if (this.players.length > playerCount) {
          this.players.splice(playerCount);
        } else {
          for (let i = this.players.length; i < playerCount; i++) {
            this.players.push("");
          }
        }
      },
      confirmAndSaveSettings() {
        const savedSettings = localStorage.getItem("gameSettings");
        if (savedSettings) {
          if (confirm("Det finns redan sparade inställningar. Vill du skriva över dem?")) {
            this.saveSettings();
          }
        } else {
          this.saveSettings();
        }
      },
      saveSettings() {
        const gameSettings = {
          totalPoints: this.totalPoints,
          courtCount: this.courtCount,
          playerCount: this.playerCount,
          players: this.players,
        };
  
        if (this.players.some(player => player.trim() === "")) {
          alert("Vänligen fyll i alla spelarnamn.");
          return;
        }
  
        localStorage.setItem("gameSettings", JSON.stringify(gameSettings));
        this.$root.$data.shouldCreateSchedule = true;

        this.settingsOpen = false;
      },
      toggleSettings() {
        this.settingsOpen = !this.settingsOpen;
      },
    },
    created() {
      const savedSettings = JSON.parse(localStorage.getItem("gameSettings"));
      if (savedSettings) {
        this.totalPoints = savedSettings.totalPoints;
        this.courtCount = savedSettings.courtCount;
        this.playerCount = savedSettings.playerCount;
        this.players = savedSettings.players;
        this.settingsOpen = false; // Collapse settings if there are saved settings
      }
    },
  };
  </script>
  