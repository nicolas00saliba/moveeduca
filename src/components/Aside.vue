<template>
    <v-container fluid ma-0 px-0 py-5 class="secondary">
        <v-flex xs12 md12 lg12 class="d-flex flex-column align-center">
            <v-btn
                color="accent"
                class="title font-weight-black my-5"
                to="/comingsoon"
            >
                Apoie essa Causa
            </v-btn>
            <v-card
                class="mx-auto my-5"
                max-width="90%"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">Assistência</div>
                    <v-list-item-title class="headline mb-1">Famílias Carentes</v-list-item-title>
                    <v-list-item-subtitle>Seja uma das famílias que nós apoiamos.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="90"
                    color="white"
                >
                    <v-img :src="require('../assets/family.svg')" contain max-width="60"></v-img>
                    
                </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn text>Regulamento</v-btn>
                <v-btn text>Contato</v-btn>
                </v-card-actions>
            </v-card>
            <v-card
                class="mx-auto my-5"
                max-width="90%"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-4">Serviços</div>
                    <v-list-item-title class="headline mb-1">Aula particular</v-list-item-title>
                    <v-list-item-subtitle>Contrate um dos nossos serviços e nos ajude a ajudar.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="90"
                    color="white"
                >
                    <v-img :src="require('../assets/teacher3.svg')" contain max-width="60"></v-img>
                    
                </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                <v-btn text to="/products/private-classes">Saiba Mais</v-btn>
                <v-btn text color="purple">Contratar</v-btn>
                </v-card-actions>
            </v-card>
            <SocialMidia/>
        </v-flex>
    </v-container>
</template>

<style>

</style>

<script>
import SocialMidia from './SocialMidia';

export default {
  components: {
    SocialMidia,
  },
  data: () => ({
  })
}
</script>