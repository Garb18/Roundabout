<template>
  <v-app id="inspire">
    <Toolbar />
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    Toolbar,
  },
};
</script>