<template>
  <b-card class="present rounded_sm h-100">
    <b-row align-h="end" align-v="center">
      <b-colxx xxs="2">
        <v-date-picker
          mode="single"
          v-model="selectedValueSingle"
          :input-props="{ class:'inputDate' }"
        ></v-date-picker>
      </b-colxx>
      <b-colxx  xxs="1"><div class=""><i class="simple-icon-arrow-down"></i></div></b-colxx>
    </b-row>
    <b-row class="mt-3"  align-v="center">
      <b-colxx>
        <div class="h5 mb-0">Performances</div>
      </b-colxx>
      <b-colxx>
        <bars
          :data="[1, 2, 5, 9, 5, 10, 3]"
          :gradient="['#145388']"
          :barWidth="15"
          :growDuration="1"
          :height="200">
        </bars>
      </b-colxx>
    </b-row>
  </b-card>
</template>

<script>
export default {
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
