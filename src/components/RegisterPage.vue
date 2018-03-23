<template>
  <div>
      <h1>{{username}}</h1>
      <input type="text" v-model="componentUsername">
      <router-link :to="{ name: 'Home'}">
        <button @click="changeName">Register</button>
      </router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      componentUsername: ``
    }
  },

  computed: {
    username () {
      return this.$store.state.username
    }
  },

  methods: {
    changeName () {
      this.$fbdb.ref('users/').push({
        username: this.componentUsername
      })
      this.$store.commit('setName', this.componentUsername)
      window.location.href = 'http://localhost:8080/#/home'
    }
  }
}
</script>

<style>

</style>
