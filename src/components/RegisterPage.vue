<template>
  <div>
      <h1>{{username}}</h1>
      <input type="text" v-model="componentUsername">
      <button @click="changeName">Register </button>
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
    }
  }
}
</script>

<style>

</style>
