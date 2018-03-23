<template>
  <div class="bg-img" style="text-align: center;">
    <div class="intro">
      <img src="@/assets/Hacktrivia.png" alt="">
      <br>
      <h1>Enter your name</h1>
      <br>
      <input class="form-input" type="text" v-model="componentUsername" @keyup.enter="registerUser">
      <br>
      <br>
      <br>
      <button class="eightbit-btn eightbit-btn--proceed"  @click="registerUser">Play Game</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      componentUsername: ''
    }
  },

  computed: {
    username () {
      return this.$store.state.username
    }
  },

  methods: {
    registerUser () {
      this.$fbdb.ref('users/').push({ username: this.componentUsername })
      this.$store.dispatch('saveUser', this.componentUsername)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

.bg-img {
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.intro {
  color: #FFF;
  font-family: 'Press Start 2P', cursive;
  margin-top: 50px;
}

.eightbit-btn {
  background: #92CD41;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
  text-decoration: none;
  color: white;
  box-shadow: inset -4px -4px 0px 0px #4AA52E;
}
.eightbit-btn:hover, .eightbit-btn:focus {
  background: #76c442;
  box-shadow: inset -6px -6px 0px 0px #4AA52E;
}
.eightbit-btn:active {
  box-shadow: inset 4px 4px 0px 0px #4AA52E;
}
.eightbit-btn:before, .eightbit-btn:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
}
.eightbit-btn:before {
  top: -6px;
  left: 0;
  border-top: 6px black solid;
  border-bottom: 6px black solid;
}
.eightbit-btn:after {
  left: -6px;
  top: 0;
  border-left: 6px black solid;
  border-right: 6px black solid;
}
.form-input {
  font-family: 'Press Start 2P', cursive;
  box-shadow: 16px 0 white, -16px 0 white, 0 -16px white, 0 16px white, 4px 0 0 8px white, -4px 0 0 8px white, 0 -4px 0 8px white, 0 4px 0 8px white, 20px 0 orange, -20px 0 orange, 0 -20px orange, 0 20px orange, 0 0 0 12px orange, 0 8px 0 8px orange, 0 -8px 0 8px orange, 8px 0 0 8px orange, -8px 0 0 8px orange;
  margin: 20px auto;
  width: 39%;
  background-color: #FFF;
  color: #000;
  border: none;
  margin: 10px auto;
  font-size: 30px;
}

textarea:focus, input:focus{
  outline: none;
}
</style>
