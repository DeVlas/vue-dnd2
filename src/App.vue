<style lang="scss" src="./style/app.scss"></style>

<template>
  <div id="app">
    <clock></clock>
    <receive></receive>
    <list :list="clockList"></list>
  </div>
</template>

<script>
import Clock from './components/clock/clock'
import Receive from './components/receive/receive'
import List from './components/list/list'

export default {
  name: 'app',
  components: {
    Clock,
    Receive,
    List
  },
  data () {
    return {
      clockList: [
        {weekday: 'SEGUNDA',
          workout: {
            barLeft: '20px',
            barWidth: '600px'
          },
          launch: {
            barLeft: '200px',
            barWidth: '300px'
          }
        }
      ]
    }
  },
  methods: {
    doFunction: ($ev) => {
      console.log('--->', $ev)
    },
    addCommand: function () {
      this.itens.push({nome: 'Aeeee'})
    },
    dragEnter: function ($ev) {
      this.estilo = true
      console.log('aa', $ev)
    },
    dragLeave: function () {
      this.estilo = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.foco {
  background-color: #F00;
}
</style>
