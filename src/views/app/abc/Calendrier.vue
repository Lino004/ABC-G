<template>
  <b-card class="present rounded_sm h-100">
    <calendar-view
      style="min-height:250px"
      :events="calendar.events"
      :time-format-options="{hour: 'numeric', minute:'2-digit'}"
      display-period-uom="month"
      :starting-day-of-week="1"
      current-period-label="Aujourd'hui"
      @drop-on-date="onDropDate"
      @click-date="onClickDay"
      @click-event="onClickEvent"
      locale="fr"
    >
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate"
      />
    </calendar-view>
  </b-card>
</template>

<script>
import {
  CalendarView,
  CalendarViewHeader
} from 'vue-simple-calendar'

export default {
  components: {
    CalendarView,
    CalendarViewHeader
  },
  data () {
    return {
      calendar: {
        showDate: this.thisMonth(1),
        events: [
          {
            id: 'e2',
            startDate: this.thisMonth(15),
            title: 'Meeting',
            classes: 'secondary'
          },
          {
            id: 'e3',
            startDate: this.thisMonth(8, 9, 25),
            endDate: this.thisMonth(9, 16, 30),
            title: 'Sales',
            classes: 'primary'
          },
          {
            id: 'e5',
            startDate: this.thisMonth(5),
            endDate: this.thisMonth(12),
            title: 'Tax Days',
            classes: 'secondary'
          },
          {
            id: 'e10',
            startDate: this.thisMonth(27),
            title: 'My Birthday!'
          }
        ]
      }
    }
  },
  methods: {
    thisMonth (d, h, m) {
      const t = new Date()
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
    },
    onClickDay (d) {
      console.log(`You clicked: ${d.toLocaleDateString()}`)
    },
    onClickEvent (e) {
      console.log(`You clicked: ${e.title}`)
    },
    setShowDate (d) {
      this.calendar.showDate = d
    },
    onDropDate (event, date) {
      console.log(`You dropped ${event.id} on ${date.toLocaleDateString()}`)
      const eLength = this.dayDiff(event.startDate, date)
      event.originalEvent.startDate = this.addDays(event.startDate, eLength)
      event.originalEvent.endDate = this.addDays(event.endDate, eLength)
    }
  }
}
</script>

<style>
</style>
