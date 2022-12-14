<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userdata.data"
      :server-items-length="userdata.total"
      :items-per-page="5"
      :options.sync="options"
    >
      <template #[`item.image`]="{ item }">
        <div>
          <v-img :src="item.avatar" width="50"></v-img>
        </div>
      </template>

      <template #[`item.actions`]>
        <div>
          <v-icon color="primary">mdi-book-edit</v-icon>
          <v-icon color="error">mdi-delete</v-icon>
          <v-icon color="green">mdi-eye</v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'TestFasttest',

  data() {
    return {
      options: {},
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Image', value: 'image' },
        { text: 'First_Name', value: 'first_name' },
        { text: 'Last_Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },

  computed: {
    userdata() {
      return this.$store.state.fasttest.fastUser
    },
  },

  watch: {
    async options(value){
      const {itemsPerPage, page} = value
    await  this.$store.dispatch('fasttest/selectFastTest',{
        per_page: itemsPerPage, page
      } )
    }
  },

  mounted() {
    this.$store.dispatch('fasttest/selectFastTest')
  },

  methods: {},
}
</script>

<style lang="scss" scoped></style>
