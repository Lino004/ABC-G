<template>
  <div class="m-5">
    <b-table :fields="fields" :items="enfants" tbody-tr-class="">

      <template slot="url" slot-scope="data">
        <div class="text-center">
          <b-img height="40" :src="data.value"></b-img>
        </div>
      </template>

      <div slot="classe" slot-scope="data">
        <h4><b-badge variant="primary">{{ data.value }} </b-badge></h4>
      </div>

      <div slot="id" slot-scope="data">
        <b-button variant="success" @click="$router.push(`/app/eleves/details-eleve/${data.value}`)">Voir le profil</b-button>
      </div>

    </b-table>
  </div>
</template>

<script>
export default {
  props: ['enfants'],
  data () {
    return {
      fields: [
        { key: 'url', label: '', tdClass: 'align-middle' },
        { key: 'nom', label: 'Nom', tdClass: 'align-middle' },
        { key: 'classe', label: 'Classe', tdClass: 'align-middle' },
        { key: 'id', label: '', tdClass: 'align-middle' }
      ]
    }
  },
  methods: {}
}
</script>

<style>

</style>
