<template>
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list-item>
      <v-list-item-avatar>
        <v-img
          src="https://www.worcester.ac.uk/images/profiles/Pete-Clews.xf522afeb.jpg"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Pete Clews</v-list-item-title>
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

      <v-list-item>
        <v-list-item-action
          ><v-switch v-model="$vuetify.theme.dark" />
        </v-list-item-action>
        <v-list-item-content
          ><v-list-item-title> Dark Mode</v-list-item-title>
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
      {
        title: "Home",
        icon: "mdi-home",
        to: "/",
      },
      {
        title: "About us",
        icon: "mdi-account-group",
        to: "/about",
      },
      {
        title: "Booking History",
        icon: "mdi-food-variant",
        to: "/orderhistory",
      },
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
