<style lang="scss" src="./style.scss" scoped></style>

<template>
  <div class="container">
    <div class="ctn">
      <div v-bind:class="{'box-item': true, 'box-empty': !workoutStart, 'box-have': workoutStart}" v-droppable.clock="getWorkoutStart">
        <!-- ENTRADA START -->
        <div class="empty" v-if="!workoutStart">
          <span>ENTRADA</span>
        </div>
        <div class="have" v-if="workoutStart !== null">
          <span class="title">ENTRADA</span>
          <span class="hour">{{ workoutStart.hour }}:{{ workoutStart.minute }}<span>
          <span class="date">{{ workoutStart.date }} - {{ workoutStart.month.fullMonth() }} - {{ workoutStart.year }}</span>
          <span class="day">{{ workoutStart.fullDate.weekDay() }}</span>
        </div>
      </div>

      <div v-bind:class="{'box-item': true, 'box-empty': !launchStart, 'box-have': launchStart}" v-droppable.clock="getLaunchStart">
        <!-- ALMOÇO START -->
        <div class="empty" v-if="!launchStart">
          <span>INÍCIO ALMOÇO</span>
        </div>
        <div class="have" v-if="launchStart !== null">
          <span class="title">INÍCIO ALMOÇO</span>
          <span class="hour">{{ launchStart.hour }}:{{ launchStart.minute }}<span>
          <span class="date">{{ launchStart.date }} - {{ launchStart.month.fullMonth() }} - {{ launchStart.year }}</span>
          <span class="day">{{ launchStart.fullDate.weekDay() }}</span>
        </div>
      </div>

      <div v-bind:class="{'box-item': true, 'box-empty': !launchEnd, 'box-have': launchEnd}" v-droppable.clock="getLaunchEnd">
        <!-- ALMOÇO END -->
        <div class="empty" v-if="!launchEnd">
          <span>FIM ALMOÇO</span>
        </div>
        <div class="have" v-if="launchEnd !== null">
          <span class="title">FIM ALMOÇO</span>
          <span class="hour">{{ launchEnd.hour }}:{{ launchEnd.minute }}<span>
          <span class="date">{{ launchEnd.date }} - {{ launchEnd.month.fullMonth() }} - {{ launchEnd.year }}</span>
          <span class="day">{{ launchEnd.fullDate.weekDay() }}</span>
        </div>
      </div>

      <div v-bind:class="{'box-item': true, 'box-empty': !workoutEnd, 'box-have': workoutEnd}" v-droppable.clock="getWorkoutEnd">
        <!-- SAÍDA -->
        <div class="empty" v-if="!workoutEnd">
          <span>SAÍDA</span>
        </div>
        <div class="have" v-if="workoutEnd !== null">
          <span class="title">SAÍDA</span>
          <span class="hour">{{ workoutEnd.hour }}:{{ workoutEnd.minute }}<span>
          <span class="date">{{ workoutEnd.date }} - {{ workoutEnd.month.fullMonth() }} - {{ workoutEnd.year }}</span>
          <span class="day">{{ workoutEnd.fullDate.weekDay() }}</span>
        </div>
      </div>
    </div>

    <div class="box-command">
      <button type="button" @click.prevent="save" name="button" v-bind:disabled="showSave">SALVAR</button>
    </div>
  </div>
</template>

<script>
import ClockBox from './clock-box/clock-box'

export default {
  name: 'receive',
  components: {
    ClockBox
  },
  data () {
    return {
      workoutStart: null,
      workoutEnd: null,
      launchStart: null,
      launchEnd: null
    }
  },
  computed: {
    showSave: function () {
      let ret = !this.workoutStart || !this.workoutEnd || !this.launchStart || !this.launchEnd
      return ret
    }
  },
  methods: {
    getWorkoutStart: function ($ev) {
      this.workoutStart = JSON.parse($ev)
    },
    getLaunchStart: function ($ev) {
      this.launchStart = JSON.parse($ev)
    },
    getLaunchEnd: function ($ev) {
      this.launchEnd = JSON.parse($ev)
    },
    getWorkoutEnd: function ($ev) {
      this.workoutEnd = JSON.parse($ev)
    },
    save: function () {
      console.log('kakaka')
    }
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["Number", "String"] }] */
Number.prototype.fullMonth = function () {
  const monthLiteral = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
  // console.log(this)
  return monthLiteral[this]
}
String.prototype.weekDay = function () {
  const dayLiteral = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SABADO']
  return dayLiteral[new Date(this).getDay()]
}

</script>
