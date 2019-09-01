<template>
  <b-card class="h-100 rounded_sm my-3">
    <b-row align-h="between" align-v="center">
      <b-colxx></b-colxx>
      <b-colxx class="text-right"><i class="simple-icon-options text-muted"/></b-colxx>
    </b-row>
    <b-row class="h-100" align-h="center" align-v="center">
      <b-colxx xxs="12">
        <div class="text-right text-success">
          <i class="iconsminds-turn-right h4"/> + 3,24
        </div>
      </b-colxx>
      <b-colxx xxs="12">
        <radial-progress-bar
          id="cercle4"
          class="mx-auto"
          :diameter="100"
          :completed-steps="3"
          :total-steps="10"
          :stroke-width="3">
          <i class="iconsminds-statistic h4 text-success"/>
        </radial-progress-bar>
      </b-colxx>
      <b-colxx>
        <div class="text-center"><p class="h5">Progression</p></div>
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
    return {}
  }
}
</script>
