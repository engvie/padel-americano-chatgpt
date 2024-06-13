<template>
    <v-card>
      <v-card-title>Poängställning</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(player, index) in players" :key="index">
            {{ player.name }}: {{ player.points }} poäng
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'PlayerScores',
    props: ['players']
  }
  </script>
  