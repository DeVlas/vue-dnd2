<style lang="scss" src="./style.scss" scoped></style>

<template>
    <div class="container">
      <div class="clock" v-draggable.clock="{date: theDate, month: theMonth, year: theYear, hour: theHour, minute: theMinute, fullDate: new Date(dateTime)}">
        <div class="date">
          <input type="text" class="days" v-model="theDate" placeholder="06" v-shortkey.ctrl.d="datePlus" v-shortkey.ctrl.shift.d="dateMinus">
          <input type="text" class="months" v-model="theMonthLiteral" placeholder="09" v-shortkey.ctrl.m="monthPlus" v-shortkey.ctrl.shift.m="monthMinus">
          <input type="text" class="years" v-model="theYear" placeholder="2016" v-shortkey.ctrl.a="yearPlus" v-shortkey.ctrl.shift.a="yearMinus">
        </div>

        <div class="sep"></div>

        <div class="hours">
          <input type="text" class="hour" v-model="theHour" placeholder="06" v-shortkey.ctrl.h="hourPlus" v-shortkey.ctrl.shift.h="hourMinus">
          <span class="hour-sep">:</span>
          <input type="text" class="minute" v-model="theMinute" placeholder="09" v-shortkey.ctrl.b="minutePlus" v-shortkey.ctrl.shift.b="minuteMinus">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      theDate: 11,
      theMonth: 9,
      theYear: '2016',
      theHour: '13',
      theMinute: '30'
    }
  },
  computed: {
    theMonthLiteral: function () {
      const arrMonth = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
      return arrMonth[this.theMonth]
    },
    dateTime: function () {
      return this.theYear + '/' + ('0' + (this.theMonth + 1)).slice(-2) + '/' + this.theDate + ' ' + this.theHour + ':' + this.theMinute + ':00'
    }
  },
  mounted () {
    let vNow = new Date()
    this.theDate = vNow.getDate().zerofill()
    this.theMonth = vNow.getMonth()
    this.theYear = vNow.getFullYear()
    this.theHour = vNow.getHours().zerofill()
    this.theMinute = vNow.getMinutes().zerofill()
  },
  methods: {
    datePlus: function () {
      let v = this.theDate < 31 ? ++this.theDate : this.theDate
      this.theDate = ('0' + v).slice(-2)
    },
    dateMinus: function () {
      let v = this.theDate > 1 ? --this.theDate : this.theDate
      this.theDate = ('0' + v).slice(-2)
    },
    monthPlus: function () {
      this.theMonth = this.theMonth < 11 ? ++this.theMonth : this.theMonth
    },
    monthMinus: function () {
      this.theMonth = this.theMonth > 0 ? --this.theMonth : this.theMonth
    },
    yearPlus: function () {
      this.theYear++
    },
    yearMinus: function () {
      this.theYear--
    },
    hourPlus: function () {
      let v = this.theHour < 23 ? ++this.theHour : this.theHour
      this.theHour = ('0' + v).slice(-2)
    },
    hourMinus: function () {
      let v = this.theHour > 0 ? --this.theHour : this.theHour
      this.theHour = ('0' + v).slice(-2)
    },
    minutePlus: function () {
      let v = this.theMinute < 59 ? ++this.theMinute : this.theMinute
      this.theMinute = ('0' + v).slice(-2)
    },
    minuteMinus: function () {
      let v = this.theMinute > 0 ? --this.theMinute : this.theMinute
      this.theMinute = ('0' + v).slice(-2)
    },
    faz: function ($ev) {
      console.log('fez-->', $ev)
    }
  }
}

/* eslint no-extend-native: ["error", { "exceptions": ["Number"] }] */
Number.prototype.zerofill = function (vlr) {
  console.log('...', ('0' + this.toString()).slice(-2))
  return ('0' + this.toString()).slice(-2)
}
</script>
