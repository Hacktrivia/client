<template>
  <div>
    <div class="bg-img" style="padding-top: 5%;">
      <div class="container base-style">
        <div class="row">
          <div class="col-md-3">
            <div class="question">
              <h3>Question</h3>
              <br>
              {{Question[index]}}
            </div>
          </div>
          <div class="col-md-7">
            <h3>Type your answer</h3>
            <br>
              <div class="chat-input">
                <div class="component-input">
                  <div class="row">
                    <div class="col-md-8">
                      <input class="form-input" type="text">
                    </div>
                    <div class="col-md-4">
                      <button class="eightbit-btn eightbit-btn--proceed">Guess</button>
                    </div>
                  </div>
                </div>
              </div>
              <br>
            <div class="chat">
              <div class="chat-history">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <h3>Players</h3>
            <br>
            <li>{{ getUserName }}</li>
            <li>Doe</li>
            <li>Lorem</li>
          </div>
        </div>
      </div>
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
    },
    getUserName () {
      return this.$store.state.username
    }
  },
  methods: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

.bg-img {
  font-family: 'Press Start 2P', cursive;
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}

.base-style {
  color: #FFF;
}

.chat {
  width: 100%;
  background-color: #FFF;
  max-height: 500px;
  min-height: 500px;
  top: -6px;
  border: 6px solid black;
  position: relative;
  overflow: scroll;
}

.chat-input {
  z-index: 1;
}

.component-input {
  margin-left: 30px;
  bottom: 10px;
}

.chat-history {
  color: #000;
  padding: 20px;
  font-size: 13px;
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
  width: 100%;
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
