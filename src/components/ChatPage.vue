<template>
  <div>
    <!-- <input id="username" type="text" placeholder="Name"><br/> -->
    <input id="text" type="text" placeholder="Message" v-model="message"><br/>
    <button id="post" @click="retrieveMsg">Post</button><br/>
    <div id="results" v-if="arrMsg.length > 0" v-for="(message,i) in arrMsg" :key="i">
      <div class="msg">
        <b>{{ message.username }}</b>
        <p>{{ message.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: function () {
    return {
      player: '',
      message: ''
    }
  },
  methods: {
    retrieveMsg () {
      this.$fbdb.ref('messages/').push({ username: this.player, message: this.message })
      this.message = ''
    }
  },
  computed: {
    ...mapGetters({
      arrMsg: 'getArrMessage'
    }),
    username () {
      return this.$store.state.username
    }
  },
  created () {
    this.player = this.$store.state.username
    this.$store.dispatch('getChat')
  }
}
</script>

<style>

</style>
