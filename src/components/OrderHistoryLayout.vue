<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-sheet rounded="lg" color="card">
          <v-list color="transparent">
            <v-list-item v-for="item in items" :key="item.title" :to="item.to">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey lighten-4">
              <v-list-item-content>
                <v-list-item-title> Refresh </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>Booking History</v-toolbar-title>
          </v-toolbar>
          <v-divider class="my-2"></v-divider>
          <v-card-text>
            <h2>Chesters</h2>
            <p>You booked a table on 25/12/2020</p>

            <v-divider class="my-2"></v-divider>

            <v-item-group multiple>
              <v-subheader>Links</v-subheader>
              <v-item v-for="link in links" :key="link.title" :to="link.to">
                <v-chip class="ma-1">
                  {{ link.title }}
                </v-chip>
              </v-item>
            </v-item-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OrderHistoryLayout",
  data: () => ({
    items: [
      {
        title: "Chesters",
        to: "",
      },
      {
        title: "Thai Gallery",
        to: "",
      },
      {
        title: "Pizza Express",
        to: "",
      },
    ],
    links: [
      {
        title: "Book again",
        to: "",
      },
      {
        title: "Problem with booking?",
        to: "",
      },
      {
        title: "Leave a review",
        to: "",
      },
      {
        title: "Add to favourites",
        to: "/favourites",
      },
    ],
  }),
  sizes: [
    ["mdi-devices", "all", "caption"],
    ["mdi-cellphone-iphone", "sm", "body-2"],
    ["mdi-laptop", "md", "body-1"],
    ["mdi-monitor", "lg", "h6"],
    ["mdi-television", "xl", "h4"],
  ],
  computed: {
    typeClass() {
      const type = ["text", this.model];
      const [, breakpoint] = this.current;

      if (breakpoint !== "all") {
        type.splice(1, 0, breakpoint);
      }

      return `.${type.join("-")}`;
    },
    current() {
      return this.sizes.find((size) => size[2] === this.model);
    },
  },
};
</script>