import Vue from 'vue';
import Vuetify from 'vuetify/lib';

//import colours from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#f05545",
            secondary: '#8b6b61',
          },
          dark: {
              primary:"#7f0000",
              secondary:"#5b3f36",
          },
          options: { variations: false, customProperties: true },
        },
      },
    })
