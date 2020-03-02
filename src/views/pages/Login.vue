<template>
  <v-container fluid fill-height>
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-5 blue darken-4">
                <v-toolbar-title class="white--text"><h4>Login</h4></v-toolbar-title>
                <!-- </v-toolbar-items> -->
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Email"
                          v-model="email"
                          :rules="emailRules"
                          prepend-icon="mdi-account-circle"
                          hint="Parece certo"
                          required
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            prepend-icon="mdi-lock"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Senha"
                            hint="Ao menos 8 caracteres"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="submit" class="blue darken-4 white--text" :disabled="!valid">Login</v-btn>
                            <a href="#">Forgot Password</a>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
</template>

<style>

</style>

<script>
export default {
    data: () => ({
        show1: false,
        valid: true,
        e1: false,
        password: '',
        passwordRules: {
            required: value => !!value || 'É necessário informar a senha',
            min: v => v.length >= 8 || 'Mínimo de 8 caracteres',
            // emailMatch: () => ('The email and password you entered don\'t match'),
        },
        email: '',
        emailRules: [
            (v) => !!v || 'Nos diga o email cadastrado',
            // eslint-disable-next-line
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail não válido!'
        ],
    }),
    methods: {
        submit: function() {
            // if (this.$refs.form.validate()) {
                //     this.$refs.form.$el.submit()
        // }
            if(this.$refs.form.validate()) {
                this.clear();
                alert("Email e/ou senha errado(s)!");
            }
        },
        clear: function() {
            this.$refs.form.reset()
        }
    },
    props: {
        source: String
    }
};
</script>