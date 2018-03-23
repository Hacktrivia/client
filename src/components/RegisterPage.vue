<template>
  <div>
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
  methods: {
    registerUser () {
      this.$store.dispatch('saveUser', this.componentUsername)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>

</style>
