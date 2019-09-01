<template>
  <div class="m-5">
    <b-row class="mb-5">
      <b-colxx class="text-center">
        <b-button-group class="shadow-sm rounded_sm">
          <b-button
            class="rounded_sm"
            :variant="currentTrim === 1 ? 'primary' : 'light'"
            @click="currentTrim = 1"
          >
            1er Trimestre
          </b-button>
          <b-button
            :variant="currentTrim === 2 ? 'primary' : 'light'"
            @click="currentTrim = 2"
          >
            2e Trimestre
          </b-button>
          <b-button
            class="rounded_sm"
            :variant="currentTrim === 3 ? 'primary' : 'light'"
            @click="currentTrim = 3"
          >
            3e Trimestre
          </b-button>
        </b-button-group>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx>
        <b-table
          :items="items"
          :fields="fields"
          responsive="sm"
          bordered
          id="table_note"
        >
          <template slot="thead-top">
            <b-tr>
              <b-th class="text-center border-bottom-0">Matière</b-th>
              <b-th class="text-center border-bottom-0" colspan="4">Interrogation</b-th>
              <b-th class="text-center border-bottom-0">Devoir</b-th>
              <b-th class="text-center border-bottom-0">Compo</b-th>
              <b-th class="text-center border-bottom-0">Moyenne</b-th>
              <b-th class="text-center border-bottom-0">Appréciation générale</b-th>
            </b-tr>
          </template>

          <div slot="HEAD[matiere]"></div>

          <div slot="HEAD[devoir]"></div>

          <div slot="HEAD[compo]"></div>

          <div slot="HEAD[moyenne]"></div>

          <div slot="HEAD[comment]"></div>

          <div slot="intero1" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="intero2" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="intero3" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="moy" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="devoir" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="compo" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

          <div slot="moyenne" slot-scope="data">
            <h5><b-badge variant="light">{{data.value}}</b-badge></h5>
          </div>

        </b-table>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['notes'],
  data () {
    return {
      currentTrim: 1,
      fields: [
        { key: 'matiere', label: 'Matière', tdClass: ['bg-primary', 'text-center', 'border-0', 'align-middle'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'intero1', label: '1', tdClass: ['text-center', 'align-middle'], thClass: ['text-center'] },
        { key: 'intero2', label: '2', tdClass: ['text-center', 'align-middle'], thClass: ['text-center'] },
        { key: 'intero3', label: '3', tdClass: ['text-center', 'align-middle'], thClass: ['text-center'] },
        { key: 'moy', label: 'Moy', tdClass: ['text-center', 'align-middle'], thClass: ['text-center'] },
        { key: 'devoir', label: 'Devoir', tdClass: ['text-center', 'align-middle'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'compo', label: 'Compo', tdClass: ['text-center', 'align-middle'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'moyenne', label: 'Moyenne', tdClass: ['text-center', 'align-middle'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'comment', label: 'Appréciation générale', tdClass: ['text-center', 'align-middle'], thClass: ['border-bottom-0  border-top-0'] }
      ]
    }
  },
  computed: {
    items () {
      if (this.notes) {
        if (this.currentTrim === 1) return this.notes.periode1
        if (this.currentTrim === 2) return this.notes.periode2
        return this.notes.periode3
      }
      return []
    }
  }
}
</script>

<style>

</style>
