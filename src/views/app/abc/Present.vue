<template>
  <b-card class="present rounded_sm mb-3">
    <b-row align-h="end" align-v="center">
      <b-colxx xxs="2">
        <v-date-picker
          mode="single"
          v-model="selectedValueSingle"
          :input-props="{ class:'inputDate' }"
        ></v-date-picker>
      </b-colxx>
      <b-colxx xxs="1"><div class=""><i class="simple-icon-arrow-down"></i></div></b-colxx>
    </b-row>
    <b-row  align-v="center">
      <b-colxx>
        <radial-progress-bar
          id="cercle1"
          class="mt-4"
          :diameter="220"
          :completed-steps="7"
          :total-steps="totalSteps"
          :stroke-width="14">
          <radial-progress-bar
            id="cercle2"
            :diameter="160"
            :completed-steps="5"
            :total-steps="totalSteps"
            :stroke-width="14">
            <radial-progress-bar
              id="cercle3"
              :diameter="100"
              :completed-steps="3"
              :total-steps="totalSteps"
              :stroke-width="14">
              <i class="iconsminds-calendar-1 h2 text-muted"></i>
            </radial-progress-bar>
          </radial-progress-bar>
        </radial-progress-bar>
      </b-colxx>
      <b-colxx>
        <b-row align-v="center" class="mb-3">
          <b-colxx xxs="1">
            <radial-progress-bar
              id="cercle1"
              :diameter="25"
              :completed-steps="7"
              :total-steps="totalSteps"
              :stroke-width="3">
            </radial-progress-bar>
          </b-colxx>
          <b-colxx class="h5 mb-0">Absents</b-colxx>
          <b-colxx class="h5 mb-0">1256</b-colxx>
        </b-row>
        <b-row align-v="center" class="mb-3">
          <b-colxx xxs="1">
            <radial-progress-bar
              id="cercle2"
              :diameter="25"
              :completed-steps="5"
              :total-steps="totalSteps"
              :stroke-width="3">
            </radial-progress-bar>
          </b-colxx>
          <b-colxx class="h5 mb-0">Présents</b-colxx>
          <b-colxx class="h5 mb-0">3502</b-colxx>
        </b-row>
        <b-row align-v="center" class="mb-3">
          <b-colxx xxs="1">
            <radial-progress-bar
              id="cercle3"
              :diameter="25"
              :completed-steps="3"
              :total-steps="totalSteps"
              :stroke-width="3">
            </radial-progress-bar>
          </b-colxx>
          <b-colxx class="h5 mb-0">Invités</b-colxx>
          <b-colxx class="h5 mb-0">4558</b-colxx>
        </b-row>
      </b-colxx>
    </b-row>
  </b-card>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  components: {
    RadialProgressBar
  },
  data () {
    return {
      selectedValueSingle: new Date(),
      completedSteps: 1,
      totalSteps: 10
    }
  }
}
</script>

<style>

</style>
