<template>
  <div>
    <div>
      <h2>{{isActive}}</h2>
      <h2>{{QuestionActive}}</h2>
      <h2>{{AnswerActive}}</h2>
      <div id="results" v-if="arrUser.length > 0" v-for="(user,j) in arrUser" :key="j">
        <div class="msg">
          <b>{{ user.score }}</b>
          <p>{{ user.username }}</p>
        </div>
      </div>

      <input type="text" v-model="answer">
      <button @click="checkAnswer">Send</button>

      <div id="results" v-if="arrMsg.length > 0" v-for="(message,i) in arrMsg" :key="i">
        <div class="msg">
          <b>{{ message.username }}</b>
          <p>{{ message.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      index: ``,
      answer: ``,
      user: ''
    }
  },

  methods: {
    changeIndex: function () {
      this.$store.dispatch('setIsActive', this.index)
    },
    checkAnswer: function () {
      this.$fbdb.ref('messages/').push({ username: this.user, message: this.answer })
      if (this.answer === this.AnswerActive) {
        let newIndex = String(parseInt(this.IndexActive) + 1)
        this.$store.dispatch('setIsActive', newIndex)
        this.$store.dispatch('addScore')
      }
      this.answer = ''
    }
  },

  computed: {
    ...mapGetters({
      QuestionActive: 'getQuestion',
      AnswerActive: 'getAnswer',
      IndexActive: 'getIsActive',
      arrMsg: 'getArrMessage',
      arrUser: 'getArrUser'
    }),
    isActive () {
      return this.$store.state.isActive
    },
    username () {
      return this.$store.state.username
    },
    Question () {
      return this.$store.state.arrQuestion
    }
  },

  created: function () {
    this.$store.dispatch('setIsActive', '1')
    this.$store.dispatch('loadQuestion')
    this.$store.dispatch('getChat')
    this.$store.dispatch('getScore')
    this.user = this.$store.state.username
  }
}

</script>

<style>

</style>
