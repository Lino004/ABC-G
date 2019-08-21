<template>
  <b-card class="present rounded_sm">
    <b-row align-h="between" align-v="center">
      <b-colxx>
        <p class="mb-0">Élèves en difficulté</p>
      </b-colxx>
      <b-colxx class="text-right"><i class="simple-icon-options text-muted"/></b-colxx>
    </b-row>
    <b-row  align-v="center" align-h="start" class="my-3">
      <b-colxx>
        <div class="square bg-primary d-inline-block"></div>
        <p class="d-inline ml-1">Visits</p>
      </b-colxx>
      <b-colxx>
        <div class="square bg-warning d-inline-block"></div>
        <p class="d-inline ml-1">Sales</p>
      </b-colxx>
      <b-colxx>
        <div class="square bg-danger d-inline-block"></div>
        <p class="d-inline ml-1">Earming</p>
      </b-colxx>
    </b-row>
    <b-row>
      <b-progress height="10px" class="my-4 w-75" :value="100 * (valueP / 100)" variant="primary"></b-progress> <p class="my-auto ml-3"> {{valueP}} % </p>
    </b-row>
    <b-row>
      <b-progress height="10px" class="my-4 w-75" :value="100 * (valueD / 100)" variant="danger"></b-progress> <p class="my-auto ml-3"> {{valueD}} % </p>
    </b-row>
    <b-row>
      <b-progress height="10px" class="my-4 w-75" :value="100 * (valueW / 100)" variant="warning"></b-progress> <p class="my-auto ml-3"> {{valueW}} % </p>
    </b-row>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      valueP: 82,
      valueD: 48,
      valueW: 75
    }
  }
}
</script>

<style>
.square{
  width: 10px;
  height: 10px;
  border-radius: 3px
}
</style>
