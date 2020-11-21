<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4">
        <RestaurantCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";

export default {
  components: { RestaurantCard },
  name: "BoxCards",
};
</script>