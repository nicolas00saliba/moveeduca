<template>
    <v-container fluid ma-0 pa-0>
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
    </v-container>
  </template>
  
  