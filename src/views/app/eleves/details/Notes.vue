<template>
  <div class="m-5">
    <b-row class="mb-5">
      <b-colxx class="text-center">
        <b-button-group class="shadow-sm">
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
        { key: 'matiere', label: 'Matière', tdClass: ['bg-primary', 'text-center', 'border-0'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'i1', label: '1', tdClass: ['text-center'], thClass: ['text-center'] },
        { key: 'i2', label: '2', tdClass: ['text-center'], thClass: ['text-center'] },
        { key: 'i3', label: '3', tdClass: ['text-center'], thClass: ['text-center'] },
        { key: 'moy', label: 'Moy', tdClass: ['text-center'], thClass: ['text-center'] },
        { key: 'devoir', label: 'Devoir', tdClass: ['text-center'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'compo', label: 'Compo', tdClass: ['text-center'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'moyenne', label: 'Moyenne', tdClass: ['text-center'], thClass: ['border-bottom-0  border-top-0'] },
        { key: 'comment', label: 'Appréciation générale', tdClass: ['text-center'], thClass: ['border-bottom-0  border-top-0'] }
      ],
      items: [
        { matiere: 'Français', i1: 1, i2: 1, i3: 1, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' },
        { matiere: 'Mathématiques', i1: 2, i2: 2, i3: 2, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' },
        { matiere: 'Physique / Chimie', i1: 3, i2: 3, i3: 3, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' },
        { matiere: 'SVT', i1: 4, i2: 4, i3: 4, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' },
        { matiere: 'Anglais', i1: 5, i2: 5, i3: 5, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' },
        { matiere: 'Histoire / Géographie', i1: 5, i2: 5, i3: 5, moy: 12, devoir: 12, compo: 14, moyenne: 13, comment: 'qlq' }
      ]
    }
  }
}
</script>

<style>

</style>
