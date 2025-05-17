<template>
  <v-container fluid ma-0 pa-0>
    <HelloWorld />

    <v-container fluid class="d-flex flex-column flex-md-row">
      <v-flex xs12 md7>
        <AboutFacig />
      </v-flex>
      <v-flex xs12 md5>
        <MidiaArticles />
        <SocialMidia />
      </v-flex>
    </v-container>

    <v-container>
      <v-card class="pa-4">
        <h2 v-if="tipo === 'mover'">
          {{ getTextFromI18n('$vuetify.projects.formulario.mover.title') }}
        </h2>
        <h2 v-else-if="tipo === 'particular'">
          {{ getTextFromI18n('$vuetify.projects.formulario.particular.title') }}
        </h2>
        <h2 v-else>
          {{ getTextFromI18n('$vuetify.projects.formulario.erro.titulo') }}
        </h2>

        <v-form v-if="tipo === 'mover'" ref="form" v-model="valid">
          <v-text-field
            v-model="nome"
            :label="getTextFromI18n('$vuetify.projects.formulario.mover.fields.nome')"
            :rules="[v => !!v || 'Campo obrigatório']"
            required
          />

          <v-text-field
            v-model="cpf"
            :label="getTextFromI18n('$vuetify.projects.formulario.mover.fields.cpf')"
            @input="cpf = formatarCPF(cpf)"
            :rules="[v => validarCPF(v) || getTextFromI18n('$vuetify.projects.formulario.mover.fields.cpfInvalido')]"
            placeholder="000.000.000-00"
            maxlength="14"
            required
          />

          <v-text-field
            v-model="telefone"
            :label="getTextFromI18n('$vuetify.projects.formulario.mover.fields.telefone')"
            @input="telefone = formatarTelefone(telefone)"
            :rules="[v => validarTelefone(v) || getTextFromI18n('$vuetify.projects.formulario.mover.fields.telefoneInvalido')]"
            placeholder="(00) 00000-0000"
            maxlength="15"
            required
          />

          <v-radio-group
            v-model="renda"
            :label="getTextFromI18n('$vuetify.projects.formulario.mover.fields.rendaPergunta')"
            :rules="[v => !!v || 'Campo obrigatório']"
            required
          >
            <v-radio
              v-for="option in rendaOpcoes"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </v-radio-group>

          <v-text-field
            v-model.number="moradores"
            :label="getTextFromI18n('$vuetify.projects.formulario.mover.fields.moradoresPergunta')"
            type="number"
            :rules="[v => v > 0 || 'Digite um número válido']"
            required
          />

          <v-btn color="primary" @click="submit">
            {{ getTextFromI18n('$vuetify.projects.formulario.mover.fields.botao') }}
          </v-btn>
        </v-form>

        <div v-else>
          <p>{{ getTextFromI18n('$vuetify.projects.formulario.erro.instrucoes') }}</p>
          <div v-for="exemplo in getTextFromI18n('$vuetify.projects.formulario.erro.exemplos')" :key="exemplo">
            <code>{{ exemplo }}</code>
          </div>
        </div>
      </v-card>
    </v-container>

    <Apareca />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      nome: '',
      cpf: '',
      telefone: '',
      renda: '',
      moradores: null,
      rendaOpcoes: [
        { label: "Até 0,5 salário mínimo (até R$ 706,00)", value: "0-0.5" },
        { label: "De 0,5 a 1 salário mínimo (R$ 707 a R$ 1.412)", value: "0.5-1" },
        { label: "De 1 a 2 salários mínimos (R$ 1.413 a R$ 2.824)", value: "1-2" },
        { label: "De 2 a 3 salários mínimos (R$ 2.825 a R$ 4.236)", value: "2-3" },
        { label: "Acima de 3 salários mínimos (acima de R$ 4.236)", value: "3+" }
      ]
    };
  },
  computed: {
    tipo() {
      return this.$route.query.tipo;
    },
  },
  methods: {
    getTextFromI18n(key) {
      return this.$vuetify.lang.t(key);
    },
    submit() {
      if (this.$refs.form.validate()) {
        alert('Formulário enviado com sucesso!');
      }
    },
    formatarCPF(cpf) {
      cpf = cpf.replace(/\D/g, '').slice(0,11);
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
                .replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3')
                .replace(/(\d{3})(\d{1,3})/, '$1.$2');
    },
    formatarTelefone(tel) {
      tel = tel.replace(/\D/g, '').slice(0,11);
      if (tel.length > 10) {
        return tel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (tel.length > 6) {
        return tel.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (tel.length > 2) {
        return tel.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      } else if (tel.length > 0) {
        return `(${tel}`;
      }
      return tel;
    },
    validarCPF(cpf) {
      const digits = cpf.replace(/\D/g, '');
      return digits.length === 11;
    },
    validarTelefone(telefone) {
      const digits = telefone.replace(/\D/g, '');
      return digits.length === 11;
    }
  }
};
</script>

<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
  background-color: #f5f5f5;
  border-radius: 16px;
}
</style>
