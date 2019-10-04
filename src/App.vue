<template>
  <v-app>
    <v-app-bar app hide-on-scroll  prominent color="primary">
      <template #extension>
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-for="item in menu"
              :key="item.icon"
              :to="item.link"
              text
              color="darkblue"
            >{{ item.title }}</v-btn>
          </v-toolbar-items>
        <v-spacer></v-spacer>
      </template>
      <v-container fluid ma-0 pa-0>
        <v-layout row wrap align-center>
          <v-img
            :src="require('./assets/facig-word.png')"
            height="120"
            max-height="180"
            max-width="200"
            contain
            class=""
          ></v-img>
          <v-spacer ></v-spacer>
          <v-flex row xs3 md3 sm3 right>
            <v-spacer></v-spacer>
            <v-btn
              href="https://api.whatsapp.com/send?phone=5561994234712&text=Estou%20entrando%20em%20contato%20depois%20de%20ver%20o%20site%20da%20FACIG."
              target="_blank"
              color="accent"
            >
              <span class="ma-2 font-weight-black">Associe-se</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              href="#"
              target=""
              color="white"
              icon outlined fab small
              class="d-none d-sm-block"
            >
              <v-icon class="ma-2">mdi-login-variant</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <v-container
        fluid ma-0 pa-0 xs12 md12 
        class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row"
      >
        <v-flex xs12 md7 lg7 class="">
          <AboutFacig/>
        </v-flex>
        <v-flex xs12 md5 lg5 flex-column secondary class="">
          <MidiaArticles/>
          <SocialMidia/>
        </v-flex>
      </v-container>
      <Apareca/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<style>

</style>

<script>
import HelloWorld from './components/HelloWorld';
import AboutFacig from './components/AboutFacig';
import MidiaArticles from './components/MidiaArticles';
import SocialMidia from './components/SocialMidia';
import Footer from './components/Footer';
import Apareca from './components/Apareca';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutFacig,
    MidiaArticles,
    SocialMidia,
    Footer,
    Apareca,
  },
  data: () => ({
    menu: [
      { icon: 'home', title: 'Link A' },
      { icon: 'info', title: 'Link B' },
      { icon: 'warning', title: 'Link C' }
    ]
  }),
};
</script>
