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

    <!-- Aqui entra o formulário dinâmico -->
    <v-container>
      <v-card class="pa-4">

        <h2 v-if="tipo === 'mover'">Formulário - Projeto Mover</h2>
        <h2 v-else-if="tipo === 'particular'">Formulário - Aula Particular</h2>
        <h2 v-else>Escolha uma modalidade válida</h2>

        <!-- Formulário do Projeto Mover -->
        <v-form v-if="tipo === 'mover'">
          <v-text-field label="Nome completo do voluntário" required />
          <v-text-field label="Área de interesse" />
          <v-textarea label="Por que quer participar?" />
          <v-btn color="primary">Enviar</v-btn>
        </v-form>

        <!-- Formulário da Aula Particular -->
        <v-form v-else-if="tipo === 'particular'">
          <v-text-field label="Nome completo do aluno" required />
          <v-text-field label="Idade" type="number" />
          <v-select
            label="Matéria desejada"
            :items="['Matemática', 'Português', 'Física']"
          />
          <v-btn color="primary">Solicitar Aula</v-btn>
        </v-form>

        <!-- Caso não tenha tipo ou seja inválido -->
        <div v-else>
          <p>Você precisa acessar com uma URL válida, como:</p>
          <code>/formulario?tipo=mover</code><br />
          <code>/formulario?tipo=particular</code>
        </div>

      </v-card>
    </v-container>

    <Apareca/>
  </v-container>
</template>

<script>
export default {
  computed: {
    tipo() {
      return this.$route.query.tipo;
    }
  }
}
</script>
