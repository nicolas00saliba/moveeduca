import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1A41AD',
        secondary: '#224bb7',
        accent: '#2459ED',
        error: '#FF0000',
        info: '#E3CD05',
        success: '#00C800',
        warning: '#E03423',
        darkblue: '#688DE8',
      },
    },
  },
});
