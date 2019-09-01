<template>
  <div class="m-5">
    <b-row>
      <b-colxx md="6" v-for="(detail, i) in details" :key="i">
        <div v-if="detail.title === 'Classe' || detail.title === 'Matières'">
          <h6 class="font-weight-bold mb-1"> {{detail.title}} </h6>
          <p> {{detail.value.join(', ')}} </p>
        </div>
        <div v-else>
          <h6 class="font-weight-bold mb-1"> {{detail.title}} </h6>
          <p> {{detail.value}} </p>
        </div>
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
