<template>
  <div class="m-5">
    <b-row>
      <b-colxx md="6" v-for="(detail, i) in details" :key="i">
        <h6 class="font-weight-bold mb-1"> {{detail.title}} </h6>
        <p> {{detail.value}} </p>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['details']
}
</script>

<style>

</style>
