<style lang="scss" src="./style.scss" scoped></style>

<template>
  <div class="container">
    <ul>
      <li v-for="item in list">
        <span class="weekday">{{ item.weekday }}</span>
        <div class="bar-day">
          <div class="bar-workout" v-bind:style="{'left': item.workout.barLeft, 'width': item.workout.barWidth}"></div>
          <div class="bar-launch" v-bind:style="{'left': item.launch.barLeft, 'width': item.launch.barWidth}"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['list'],
  data () {
    return {
      barWidth: '900px',
      barLeft: '40px'
    }
  },
  methods: {
    doFunction: ($ev) => {
      console.log($ev)
    }
  }
}
</script>
