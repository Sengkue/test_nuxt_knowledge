<template>
  <div>
    <v-dialog v-model="show" width="500">
      <v-row>
      <v-col v-for="(item, i) in userdata.data" :key="i" cols="12" sm="6">
        <v-card>
          <v-img :src="item.avatar"></v-img>
          <v-card-text>
            <div>{{item.id}}</div>
            <div>{{item.email}}</div>
            <div>{{item.first_name}}/{{item.last_name}}</div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="show=!show">view</v-btn>
            <v-btn text>share</v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    </v-dialog>
    <v-row>
      <v-col v-for="(item, i) in userdata.data" :key="i" cols="12" sm="3">
        <v-card>
          <v-img :src="item.avatar"></v-img>
          <v-card-text>
            <div>{{item.id}}</div>
            <div>{{item.email}}</div>
            <div>{{item.first_name}}/{{item.last_name}}</div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="show=!show">view</v-btn>
            <v-btn text>share</v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TestInspire',

  data() {
    return {
      show: false,
    }
  },

  computed: {
    userdata() {
      return this.$store.state.user.user
    },
  },

  async mounted() {
    await this.$store.dispatch('user/selectUser')
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
