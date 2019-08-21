<template>
  <div class="m-5">
    <b-table :fields="fields" :items="paiement" tbody-tr-class="">

      <div slot="status" slot-scope="scope">
        <div v-if="scope.value === '2'">
          <i class="iconsminds-record-2 text-success bg-success rounded"/> Soldé
        </div>
        <div v-if="scope.value === '1'">
          <i class="iconsminds-record-2 text-warning bg-warning rounded"/> Incomplet
        </div>
        <div v-if="scope.value === '0'">
          <i class="iconsminds-record-2 text-danger bg-danger rounded"/> Non Soldé
        </div>
      </div>

      <div slot="montant" slot-scope="data">
        <h4><b-badge :variant="variantBadge(data.item.status)">{{ data.value }} FCFA </b-badge></h4>
      </div>

    </b-table>
  </div>
</template>

<script>
export default {
  props: ['paiement'],
  data () {
    return {
      fields: [
        { key: 'status', label: 'STATUS', tdClass: 'align-middle' },
        { key: 'type', label: 'Type', tdClass: 'align-middle' },
        { key: 'montant', label: 'Montant', tdClass: 'align-middle' },
        { key: 'echeance', label: 'Échéance', tdClass: 'align-middle' }
      ]
    }
  },
  methods: {
    variantBadge (status) {
      if (status === '0') return 'danger'
      if (status === '1') return 'warning'
      return 'success'
    }
  }
}
</script>

<style>

</style>
