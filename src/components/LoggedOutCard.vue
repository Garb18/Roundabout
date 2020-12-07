<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2"> </v-col>

      <v-col cols="12" sm="8">
        <v-card
          class="d-flexpa-4 mx-auto success"
          max-width="550"
          min-height="76"
          shaped
          dark
        >
          <v-card-title class="`text-${model}`">
            You have successfully logged out
          </v-card-title>
          <v-card-subtitle class="`text-${model}`">
            Redirecting you in 5 seconds...
          </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12" sm="2"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoggedOutCard",
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