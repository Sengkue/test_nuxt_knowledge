<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="userdata.data"
        :server-items-length="userdata.total"
        :items-per-page="5"
        :options.sync="options"
      >
        <template #[`item.actions`]="item">
          <div>
            <v-icon color="primary">mdi-book-edit</v-icon>
            <v-icon color="error">mdi-delete</v-icon>
            <v-icon color="green" @click="view(item.id)">mdi-eye</v-icon>
          </div>
        </template>

        <template #[`item.imageUrl`]="{ item }">
          <div>
            <v-img :src="item.avatar"></v-img>
          </div>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TestTextuser',

  data() {
    return {
      options:{},
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Image', value: 'imageUrl' },
        { text: 'First_Name', value: 'first_name' },
        { text: 'Last_Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },

  computed: {
    userdata() {
      return this.$store.state.testuser.testUser
    },
  },

  watch:{
    async options(value){
      const {itemsPerPage, page} = value
      await this.$store.dispatch('testuser/selectUser', {
        per_page: itemsPerPage, page
      })
    }

  },

  mounted() {
    this.$store.dispatch('testuser/selectUser')
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
