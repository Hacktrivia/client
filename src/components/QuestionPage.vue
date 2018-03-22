<template>
  <div>
    <div>
      <h2>{{Question[index]}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      index: 0
    }
  },

  computed: {
    Question () {
      return this.$store.state.arrQuestion
    }
  }
}
</script>

<style>

</style>
