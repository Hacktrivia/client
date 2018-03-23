<template>
  <div>
      <h1>{{username}}</h1>
      <input type="text" v-model="componentUsername">
      <button @click="registerUser">Register </button>
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
    registerUser () {
      this.$fbdb.ref('users/').push({
        username: this.componentUsername
      })
      this.$store.dispatch('saveUser', this.componentUsername)
      this.$router.push({name: 'Home'})
    }

  }
}
</script>

<style>

</style>
