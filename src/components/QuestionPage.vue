<template>
  <div>
    <div>
      <h2>{{Question[index].q}}</h2>
      <input type="text" v-model="input" id="answer">
      <input type="submit" @click="answer" value="Answer">
      <div class="chat">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: '',
      index: 0,
      user: ''
    }
  },

  computed: {
    username () {
      return this.$store.state.username
    },
    Question () {
      return this.$store.state.arrQuestion
    }
  },
  methods: {
    answer () {
      this.$fbdb.ref('chat/').push({
        user: this.user,
        answer: this.input
      })
      // let test = document.querySelector('#answer')
      // console.log(test.value)
    }
  },
  created: function () {
    this.user = this.$store.state.username
    this.$fbdb.ref('chat').on('child_added', (snapshot) => {
      let val = snapshot.val()
      this.$jq('.chat').append(`<li>${val.user}: ${val.answer}</li>`)
      // val.answer = val.answer.trim()
      console.log(val.answer.toLowerCase().trim())
      if (val.answer === this.Question[this.index].a) {
        console.log('Jawaban benar')
        this.index++
        // console.log(this.Question[this.index].a)
      }
    })
  }
}

</script>

<style>

</style>
