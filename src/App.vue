<template>
  <v-app id="inspire">
    <NavDrawer />
    <TopNav />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- Rendered views based on route taken-->
        <router-view></router-view>
      </v-container>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script>
import TopNav from "@/components/TopNav";
import NavDrawer from "@/components/NavDrawer";
import BottomNav from "@/components/BottomNav";

export default {
  components: { NavDrawer, TopNav, BottomNav },
  data: () => ({}),
};
</script>
