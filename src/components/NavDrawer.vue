<template>
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { bus } from "@/main";

export default {
  name: "NavDrawer",
  data: () => ({
    items: [
      { title: "Booking History", icon: "mdi-food-variant", to: "/" },
      { title: "Verify Account", icon: "mdi-shield-account-variant" },
      { title: "Log Out", icon: "mdi-power-settings", to: "/loggedout" },
    ],
    drawer: null,
  }),
  //Setup event listener on creation
  created() {
    bus.$on("drawerChanged", (data) => {
      this.drawer = data;
    });
  },
};
</script>
