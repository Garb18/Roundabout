<template>
  <v-app-bar
    app
    color="secondary white--text"
    shrink-on-scroll
    src="banner.jpg"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(220, 28, 19,.4), rgba(220, 28, 19,.1)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon @click="openDrawer()" dark></v-app-bar-nav-icon>
    <v-toolbar-title>Roundabout Reservation</v-toolbar-title>

    <v-spacer></v-spacer>

    <!--Search Field-->
    <v-text-field
      @focus="searchClosed = false"
      @blur="searchClosed = true"
      v-model="search"
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      class="expanding-search mt-1"
      dark
      color="white"
      :class="{ closed: searchClosed && !search }"
      filled
      dense
      clearable
    ></v-text-field>
    <!--End of search field-->

    <!--Navigation Links-->
    <!-- <template v-slot:extension>
      <v-tabs align-with-title dark color="white">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template> -->
    <!--End Of Navigation Links-->
  </v-app-bar>
</template>

<script>
import { bus } from "@/main";

export default {
  name: "TopNav",
  components: {},
  data: () => ({
    search: null,
    searchClosed: true,
  }),
  methods: {
    openDrawer: function () {
      //Event bus emits when drawer icon clicked
      bus.$emit("drawerChanged", "drawer = !drawer");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-input.expanding-search {
  transition: max-width 0.5s;
  .v-input__slot {
    cursor: pointer !important;
    &:before {
      border-color: transparent;
    }
  }
  &:after {
    border-color: transparent !important;
  }
  &.closed {
    max-width: 45px;
    .v-input__slot {
      background: transparent !important;
    }
  }
}
</style>