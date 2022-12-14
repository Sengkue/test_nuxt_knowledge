<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-card class="ma-2 pa-3">
        <v-text-field
          v-model="Email"
          class="pa-2"
          placeholder="email"
          outlined
          dense
          hide-details="auto"
          :rules="[
            (v) => !!v || 'Name is required',
            (v) =>
              (v && v.length <= 25) || 'Name must be less than 10 characters',
          ]"
        >
        </v-text-field>

        <v-text-field
          v-model="Password"
          class="pa-2"
          placeholder="passowrd"
          outlined
          dense
          hide-details="auto"
          :rules="[
            (v) => !!v || 'Name is required',
            (v) =>
              (v && v.length <= 25) || 'Name must be less than 10 characters',
          ]"
        >
        </v-text-field>
        <v-card-actions>
          <v-btn color="primary" @click="login">Login</v-btn>
          <v-btn color="error" @click="reset">Cancel</v-btn>
          <v-btn color="error" @click="addLog"
            ><v-icon>mdi-google</v-icon></v-btn
          >
        </v-card-actions>
        {{Email}}////{{Password}}
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'NuxtVuetifyDataTableAxiosLogin',

  data() {
    return {
      Email: '',
      Password: '',
    }
  },

  mounted() {},

  methods: {
    addLog() {
      this.Email = 'eve.holt@reqres.in'
      this.Password = 'cityslicka'
    },
    reset() {
      this.Email = ''
      this.Password = ''
    },
    login(){
      if (this.$refs.form.validate()) {
        this.$store.dispatch('user/login', {
          email: this.Email,
          password: this.Password,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
