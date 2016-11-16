<style lang="scss" src="./style.scss" scoped></style>

<template>
  <div class="container">
    <div class="empty">

    </div>
    <div class="have-content">
      <span>{{ tipo }}</span>
      <div class="line"></div>
      {{ passdate }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'clock-box',
  props: ['tipo', 'passdate'],
  data () {
    return {
      data: ''
    }
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["Number"] }] */
Number.prototype.zerofill = function (vlr) {
  return ('0' + this.toString()).slice(-2)
}
</script>
