<template>
  <div class="leaderboard-content">
    <h1>Leaderboard Page &#9813;</h1>
    <p>{{scoreData}}</p>
    <div class="leaderboard-form">
      <table border="0">
      <thead>
        <th><span class="rank-span">No.</span></th>
        <th><span class="name-span">Name</span></th>
        <th><span class="points-span">Score</span></th>
      </thead>
      <tbody v-for="(element, i) in leaderboardData" :key="i">
        <tr>
          <td>{{ i+1 }}</td>
          <td>{{ element.username }}</td>
          <td>{{ element.score }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      leaderboardData: [],
      scoreData: []
    }
  },
  methods: {
    readData: function () {
      let self = this
      self.$fbdb.ref('/users').on('value', function (snapshot) {
        let leadDataObj = Object.values(snapshot.val())
        // let scoreDataObj = Object.values(snapshot.val())
        self.leaderboardData = leadDataObj
        leadDataObj.map(data => {
          let result = data.score
          self.scoreData.push(result)
          self.scoreData.sort(function (a, b) { return b - a })
          console.log(self.scoreData)
        })
        // self.leaderboardData.push(snapshot.val())
      })
    }
  },
  mounted: function () {
    this.readData()
  }
}
</script>

<style scoped>

table {
  text-align: center;
  margin: auto;
}

span {
  margin: auto 60px auto 60px;
}

.leaderboard-form {
    max-width: 500px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

</style>
