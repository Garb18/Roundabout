<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>About us</v-toolbar-title>
          </v-toolbar>
          <v-divider class="my-2"></v-divider>
          <v-card-text>
            <h2>Our Goal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum
              reprehenderit id repellendus asperiores dicta ullam fuga culpa,
              sapiente doloribus vel in dolores laborum. Nesciunt distinctio
              nihil corrupti esse commodi.
            </p>

            <v-divider class="my-2"></v-divider>

            <h2>Our Promise</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam harum
              reprehenderit id repellendus asperiores dicta ullam fuga culpa,
              sapiente doloribus vel in dolores laborum. Nesciunt distinctio
              nihil corrupti esse commodi.
            </p>

            <v-divider class="my-2"></v-divider>

            <h2>Get in touch</h2>
            <v-item-group multiple>
              <v-item v-for="link in links" :key="link.title" :to="link.to">
                <v-chip class="ma-1">
                  <v-icon> {{ link.icon }}</v-icon>
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
  components: {},
  name: "AboutCard",
  data: () => ({
    links: [
      {
        title: "Facebook",
        to: "",
        icon: "mdi-facebook",
      },
      {
        title: "Twitter",
        to: "",
        icon: "mdi-twitter",
      },
      {
        title: "Instagram",
        to: "",
        icon: "mdi-instagram",
      },
      {
        title: "Email us",
        to: "",
        icon: "mdi-email",
      },
    ],
  }),
};
</script>