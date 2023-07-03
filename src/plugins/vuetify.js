import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#333333',
        secondary: '#1E1E1E',
        accent: 'DF8881'
      },
    },
  },
});
