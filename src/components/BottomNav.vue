<template>
  <v-bottom-navigation :value="value" color="primary" grow hide-on-scroll>
    <v-btn to="/orderhistory">
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn to="/favourites">
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
};
</script>