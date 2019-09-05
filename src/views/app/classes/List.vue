<template>
  <div>
    <banner title="Liste des classes" />
    <grid
      :items="classes"
      v-on:selected="setSelected($event)"
    />

  </div>
</template>

<script>
import Grid from './list/Grid'
import Banner from '@/components/Common/Banner'

export default {
  components: { Grid, Banner },
  data () {
    return {
      classes: Array(20).fill({ nom: 'Terminal S-1', eleves: 34 })
    }
  }
}

</script>
