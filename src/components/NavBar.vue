<template>
  <nav>
    <v-app-bar app hide-on-scroll  prominent color="primary">
      <template #extension>
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-for="item in menu"
              :key="item.icon"
              :to="item.route"
              text
              color="darkblue"
            >{{ item.title }}</v-btn>
          </v-toolbar-items>
        <v-spacer></v-spacer>
      </template>
      <v-container fluid ma-0 pa-0>
        <v-layout row wrap align-center>
          <v-img
            :src="require('../assets/facig-word.png')"
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
              <v-icon class="ma-2">mdi-account</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { icon: 'home', title: 'Início', route: '/' },
      { icon: 'warning', title: 'Institucional', route: '/institutional' },
      { icon: 'warning', title: 'Projetos', route: '/projects' },
      { icon: 'warning', title: 'Parceiros', route: '/partners' },
      { icon: 'info', title: 'Contato', route: '/contact' }
    ]
  }),
}
</script>

<style>
</style>