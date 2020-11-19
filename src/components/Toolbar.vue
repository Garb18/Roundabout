<template>
  <v-app>
    <Navbar />
    <Boxcards />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Boxcards from "@/components/BoxCards";
export default {
  name: "Toolbar",
  components: { Navbar, Boxcards },
  data() {
    return {
      //
    };
  },
};
</script>