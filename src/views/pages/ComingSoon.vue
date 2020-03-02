<template>
  <div class="dashboard">
    <v-container
      fluid ma-0 pa-0 xs12 md12 
      class="d-flex flex-column flex-md-row flex-lg-row flex-xl-row"
    >
      <v-flex xs12 md9 lg9 ma-10 px-10 class="d-flex flex-column align-center">
          <h1>Página em construção...</h1>
          <v-img :src="require('../../assets/under-construction.png')" contain max-width="700"></v-img>
          <p>
              Veja outros páginas que já construímos!
          </p>
      </v-flex>
      <v-flex xs12 md3 lg3 class="">
        <Aside/>
      </v-flex>
    </v-container>
  </div>
</template>

<style>

</style>

<script>
import Aside from '../../components/Aside.vue';

export default {
  components: {
    Aside,
  },
  data: () => ({
  })
}
</script>