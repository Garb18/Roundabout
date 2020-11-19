
<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="4">
        <v-card height="300"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BoxCards",
};
</script>