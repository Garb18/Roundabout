<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-3"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-col>
      <!-- Navbar icons & Search bar -->
      <v-row
        ><v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-text-field
          @focus="searchClosed = false"
          @blur="searchClosed = true"
          v-model="search"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          class="expanding-search mt-1"
          :class="{ closed: searchClosed && !search }"
          filled
          dense
          clearable
        ></v-text-field>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="yellow" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <!-- Navbar title -->
      <v-row>
        <v-app-bar-title>Roundabout Reservation</v-app-bar-title>
      </v-row>
    </v-col>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    search: null,
    searchClosed: true,
  }),
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