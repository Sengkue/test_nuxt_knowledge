<template>
  <div class="bg">
    <v-row>
      <v-col v-for="(item, i) in robotdata" :key="i" cols="12" sm="3">
        <v-card color="#9EEBCF" >
          <v-img :src="`https://robohash.org/${i}?size=200x200`"></v-img>
          <v-card-text>
            <div>{{ item.id }}</div>
             <div>{{ item.name }}</div>
            <div>{{ item.username }}</div>
            <div>{{ item.email }}</div>
           <div>{{item.address.street}}</div>
            <div>{{item.address.suite}}</div>
            <div>{{item.address.city}}</div>
            <div>{{item.address.zipcode}}</div>
            <div>{{item.address.geo.lat}}</div>
            <div>{{item.address.geo.lng}}</div>
          </v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn color="primary" text>view</v-btn>
            <v-btn color="primary" text>share</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TestRobotfriend',

  data() {
    return {}
  },

  computed: {
    robotdata() {
      return this.$store.state.user.robot
    },
  },

  mounted() {
    this.$store.dispatch('user/selectRobot')
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.bg {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#071b52),
    to(teal)
  );
  background: linear-gradient(270deg, #071b52 0, teal);
}



</style>
