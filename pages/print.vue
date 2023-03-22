<template>
  <div>
    <div id="print-section">
  <p>Id: {{ id }}</p>
  <p>Name: {{ name }}</p>
  <p>Card Number: {{ cardnumber }}</p>
  <p>Price: {{ price }}</p>
  <p>Datetime: {{ datetime }}</p>
</div>

<div class="no-print">
  <!-- Any content you don't want to print, such as the URL or a "back" button, can be wrapped in a container with the "no-print" class. -->
  <p>URL: {{ $route.fullPath }}</p>
</div>


    <p>Id: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Card Number: {{ cardnumber }}</p>
    <p>Price: {{ price }}</p>
    <p>Datetime: {{ datetime }}</p>
    <v-btn @click="printData">Print</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.query.id;
    },
    name() {
      return this.$route.query.name;
    },
    cardnumber() {
      return this.$route.query.cardnumber;
    },
    price() {
      return this.$route.query.price;
    },
    datetime() {
      return this.$route.query.datetime;
    },
  },
  methods: {
    printData() {
      const printContents = document.getElementById('print-section').innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
  },
};
</script>

<style scoped>
@media print {
  #print-section {
    margin: 0;
    padding: 0;
  }

}
</style>

