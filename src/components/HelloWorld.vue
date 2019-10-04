<template>
  <v-container fluid ma-0 pa-0>
    <v-layout>
      <v-img
        :src="require('../assets/facig-capa.png')"
        contain
      ></v-img>
    </v-layout>
    <v-layout>
      <v-sheet
        class="mx-auto"
        color="accent"
        width="100vw"
      >
        <v-slide-group multiple>
          <v-slide-item
            v-for="(item, i) in items"
            :key="i"
            v-slot:default="{ active, toggle }"
          >
            <v-img
              class="mx-2 slide-img"
              :src="item.src"
              contain
              max-width="20vh"
            >
            <!-- o max-width está relacionado com a altura da tela-->
            </v-img>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<style>
  .slide-img {
  }
  @media screen and (min-width: 960) {

  }
</style>

<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    items: [
      {
        src: require('../assets/parceiros/acig-logo.png'),
      },
      {
        src: require('../assets/parceiros/adm-guara.jpg'),
      },
      {
        src: require('../assets/parceiros/gdf.png'),
      },
      {
        src: require('../assets/parceiros/IADES-BRASIL.png'),
      },
      {
        src: require('../assets/parceiros/guara50-anos.jpg'),
      },
      {
        src: require('../assets/parceiros/sicoob.png'),
      },
      {
        src: require('../assets/parceiros/dyamond.png'),
      },
      {
        src: require('../assets/parceiros/logo-gama-cidadao.png'),
      },
      {
        src: require('../assets/parceiros/logo-morgganas.png'),
      },
      {
        src: require('../assets/parceiros/royal.png'),
      },
      
    ],
    model: null,
  }),
};
</script>
