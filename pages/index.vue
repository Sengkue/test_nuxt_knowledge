<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="getUser.data"
      :options.sync="options"
      :server-items-length="getUser.total"
      :items-per-page="5"

    >
      <template #[`item.actions`]>
        <div>
          <v-icon color="primary">mdi-book-edit</v-icon>
          <v-icon color="error">mdi-delete</v-icon>
          <v-icon color="green">mdi-eye</v-icon>
        </div>
      </template>

      <template #[`item.image`]="{ item }">
        <div>
          <v-img :src="item.avatar" width="60"></v-img>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'TestIndex',

  data() {
    return {
      options: {},
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Image', value: 'image' },
        { text: 'First_Name', value: 'first_name' },
        { text: 'Last_Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
        { text: 'Actios', value: 'actions' },
      ],
    }
  },
  computed: {
    getUser() {
      return this.$store.state.user.user
    },
  },

  watch:{
    options(value){
      const { itemsPerPage, page} = value
      this.$store.dispatch('user/selectUser',{
        per_page: itemsPerPage, page
      })
    }

  },


  mounted() {
    this.$store.dispatch('user/selectUser')
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
