<template>
  <div>
    <div>
      <!-- <h2>{{Question[index]}}</h2> -->
      <h2>{{isActive}}</h2>
      <h2>{{QuestionActive}}</h2>
      <h2>{{AnswerActive}}</h2>
      <!-- <input type="text" v-model="index"> -->
      <input type="text" v-model="answer">
      <!-- <button @click="changeIndex">Send</button> -->
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
      }
      this.answer = ''
    }
  },

  computed: {
    ...mapGetters({
      QuestionActive: 'getQuestion',
      AnswerActive: 'getAnswer',
      IndexActive: 'getIsActive',
      arrMsg: 'getArrMessage'
    }),
    isActive () {
      return this.$store.state.isActive
    },
    // QuestionActive () {
    //   return this.$store.state.question
    // }
    // Question () {
    //   return this.$store.state.arrQuestion
    // },
    // isActive () {
    //   return this.$store.state.isActive
    // },
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
    this.user = this.$store.state.username
  }
}

</script>

<style>

</style>
