<template>
  <div>
      <h1>{{username}}</h1>
      <input type="text" v-model="componentUsername">
      <router-link to="/chat">
        <button @click="changeName">Register </button>
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
      this.$store.commit('setName', this.componentUsername)
      this.$fbdb.ref('users/').push({ username: this.componentUsername })
    }
  }
}
</script>

<style>

</style>
