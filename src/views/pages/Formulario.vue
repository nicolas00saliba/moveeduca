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
          {{ getTextFromI18n("$vuetify.projects.formulario.mover.title") }}
        </h2>
        <h2 v-else-if="tipo === 'particular'">
          {{ getTextFromI18n("$vuetify.projects.formulario.particular.title") }}
        </h2>
        <h2 v-else>
          {{ getTextFromI18n("$vuetify.projects.formulario.erro.titulo") }}
        </h2>

        <v-form
          v-if="tipo === 'particular'"
          ref="form2"
          v-model="valid"
          @submit.prevent="submit"
        >
          <v-text-field
            v-model="nome"
            :label="
              getTextFromI18n(
                '$vuetify.projects.formulario.particular.fields.nome'
              )
            "
            :rules="[
              (v) =>
                !!v ||
                getTextFromI18n(
                  '$vuetify.projects.formulario.particular.fields.campoObrigatorio'
                ),
            ]"
            required
          />

          <v-text-field
            v-model="cpf"
            :label="
              getTextFromI18n(
                '$vuetify.projects.formulario.particular.fields.cpf'
              )
            "
            @input="cpf = formatarCPF(cpf)"
            :rules="[
              (v) =>
                validarCPF(v) ||
                getTextFromI18n(
                  '$vuetify.projects.formulario.particular.fields.cpfInvalido'
                ),
            ]"
            placeholder="000.000.000-00"
            maxlength="14"
            required
          />

          <!-- create some clicable vuetify cards with math, physics, chemistry, philosofy and portuguese classes -->
          <!-- Add this inside the <v-form> where the comment is -->
          <div class="d-flex flex-wrap justify-space-between">
            <v-card
              v-for="subject in subjects"
              :key="subject.name"
              class="ma-2"
              outlined
              elevation="2"
              max-width="200"
              @click="selectSubject(subject.name)"
            >
              <v-card-title class="text-h6 text-center">{{
                subject.name
              }}</v-card-title>
              <v-card-text class="text-center">
                <v-icon large>{{ subject.icon }}</v-icon>
              </v-card-text>
            </v-card>
          </div>
          <v-btn color="primary" @click="submit">
            {{
              getTextFromI18n(
                "$vuetify.projects.formulario.particular.fields.botao"
              )
            }}
          </v-btn>
        </v-form>

        <v-form v-if="tipo === 'mover'" ref="form" v-model="valid">
          <v-text-field
            v-model="nome"
            :label="
              getTextFromI18n('$vuetify.projects.formulario.mover.fields.nome')
            "
            :rules="[(v) => !!v || 'Campo obrigatório']"
            required
          />

          <v-text-field
            v-model="cpf"
            :label="
              getTextFromI18n('$vuetify.projects.formulario.mover.fields.cpf')
            "
            @input="cpf = formatarCPF(cpf)"
            :rules="[
              (v) =>
                validarCPF(v) ||
                getTextFromI18n(
                  '$vuetify.projects.formulario.mover.fields.cpfInvalido'
                ),
            ]"
            placeholder="000.000.000-00"
            maxlength="14"
            required
          />

          <v-text-field
            v-model="telefone"
            :label="
              getTextFromI18n(
                '$vuetify.projects.formulario.mover.fields.telefone'
              )
            "
            @input="telefone = formatarTelefone(telefone)"
            :rules="[
              (v) =>
                validarTelefone(v) ||
                getTextFromI18n(
                  '$vuetify.projects.formulario.mover.fields.telefoneInvalido'
                ),
            ]"
            placeholder="(00) 00000-0000"
            maxlength="15"
            required
          />

          <v-radio-group
            v-model="renda"
            :label="
              getTextFromI18n(
                '$vuetify.projects.formulario.mover.fields.rendaPergunta'
              )
            "
            :rules="[
              (v) =>
                !!v ||
                getTextFromI18n(
                  '$vuetify.projects.formulario.mover.fields.campoObrigatorio'
                ),
            ]"
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
            :label="
              getTextFromI18n(
                '$vuetify.projects.formulario.mover.fields.moradoresPergunta'
              )
            "
            type="number"
            :rules="[(v) => v > 0 || 'Digite um número válido']"
            required
          />

          <v-btn color="primary" @click="submit">
            {{
              getTextFromI18n("$vuetify.projects.formulario.mover.fields.botao")
            }}
          </v-btn>
        </v-form>

        <div v-else>
          <p>
            {{
              getTextFromI18n("$vuetify.projects.formulario.erro.instrucoes")
            }}
          </p>
          <div
            v-for="exemplo in getTextFromI18n(
              '$vuetify.projects.formulario.erro.exemplos'
            )"
            :key="exemplo"
          >
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
      nome: "",
      cpf: "",
      telefone: "",
      renda: "",
      moradores: null,
      subjects: [
        { name: "Math", icon: "mdi-calculator" },
        { name: "Physics", icon: "mdi-atom" },
        { name: "Chemistry", icon: "mdi-flask" },
        { name: "Philosophy", icon: "mdi-lightbulb" },
        { name: "Portuguese", icon: "mdi-book-open-page-variant" },
      ],
    };
  },
  computed: {
    tipo() {
      // eslint-disable-next-line no-console
      console.log({ tipo: this.$route.query.tipo });
      return this.$route.query.tipo;
    },
    rendaOpcoes() {
      return [
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.rendaOpcoes.0-0"
          ),
          value: "0-0",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.rendaOpcoes.0-5"
          ),
          value: "0-5",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.rendaOpcoes.1-2"
          ),
          value: "1-2",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.rendaOpcoes.2-3"
          ),
          value: "2-3",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.rendaOpcoes.3+"
          ),
          value: "3+",
        },
      ];
    },
    moradoresOpcoes() {
      return [
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.moradoresOpcoes.1"
          ),
          value: "1",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.moradoresOpcoes.2"
          ),
          value: "2",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.moradoresOpcoes.3"
          ),
          value: "3",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.moradoresOpcoes.4"
          ),
          value: "4",
        },
        {
          label: this.getTextFromI18n(
            "$vuetify.projects.formulario.mover.moradoresOpcoes.5+"
          ),
          value: "5+",
        },
      ];
    },
  },
  methods: {
    getTextFromI18n(key) {
      return this.$vuetify.lang.t(key);
    },
    submit() {
      if (this.$refs.form.validate()) {
        alert("Formulário enviado com sucesso!");
      }
    },
    selectSubject(subject) {
      alert(`You selected ${subject}`);
    },
    formatarCPF(cpf) {
      cpf = cpf.replace(/\D/g, "").slice(0, 11);
      return cpf
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3")
        .replace(/(\d{3})(\d{1,3})/, "$1.$2");
    },
    formatarTelefone(tel) {
      tel = tel.replace(/\D/g, "").slice(0, 11);
      if (tel.length > 10) {
        return tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      } else if (tel.length > 6) {
        return tel.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else if (tel.length > 2) {
        return tel.replace(/(\d{2})(\d{0,5})/, "($1) $2");
      } else if (tel.length > 0) {
        return `(${tel}`;
      }
      return tel;
    },
    validarCPF(cpf) {
      const digits = cpf.replace(/\D/g, "");
      return digits.length === 11;
    },
    validarTelefone(telefone) {
      const digits = telefone.replace(/\D/g, "");
      return digits.length === 11;
    },
  },
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
