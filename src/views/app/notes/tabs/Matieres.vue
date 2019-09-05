<template>
  <div class="d-flex">
      <div class="w-15">
        <div class="mb-5">
          <p
            class="font-weight-bold my-3 heading-4 text-center"
            style="font-size: 18px;"
          >Plus forte moyenne</p>
          <p class="my-3 text-success text-center display-4 font-weight-bold">15/20</p>
        </div>
        <div class="mb-5">
          <p
            class="font-weight-bold my-3 heading-4 text-center"
            style="font-size: 18px;"
          >Moyenne de la classe</p>
          <p class="my-3 text-warning text-center display-4 font-weight-bold">15/20</p>
        </div>
        <div class="mb-5">
          <p
            class="font-weight-bold my-3 heading-4 text-center"
            style="font-size: 18px;"
          >Plus faible moyenne</p>
          <p class="my-3 text-danger text-center display-4 font-weight-bold">15/20</p>
        </div>
      </div>
      <div class="w-100">
        <div class="d-flex justify-content-end my-4">
          <div class="w-15 mx-3">
            <b-form-select
              class="rounded_sm shadow-sm"
              v-model="selectClasse"
              :options="classes"
              :disabled="false"
            ></b-form-select>
          </div>
          <div class="w-15 mx-3">
            <b-form-select
              class="rounded_sm shadow-sm"
              v-model="selectClasse"
              :options="classes"
              :disabled="false"
            ></b-form-select>
          </div>
          <div class="w-15 mx-3">
            <b-form-select
              class="rounded_sm shadow-sm"
              v-model="selectClasse"
              :options="classes"
              :disabled="false"
            ></b-form-select>
          </div>
          <div class="w-15 mx-3">
            <b-button disabled class="px-1 shadow-sm" block variant="success">
              Exporter
              <i class="iconsminds-right-1" />
            </b-button>
          </div>
        </div>
        <div class="my-5 d-flex justify-content-between w-100">
          <div class="w-10"></div>
          <b-button-group>
            <b-button @click="currentTerm = 1" :variant="currentTerm === 1 ? 'primary' : 'light'">1er trimestre</b-button>
            <b-button @click="currentTerm = 2" :variant="currentTerm === 2 ? 'primary' : 'light'">2e trimestre</b-button>
            <b-button @click="currentTerm = 3" :variant="currentTerm === 3 ? 'primary' : 'light'">3e trimestre</b-button>
          </b-button-group>
          <div class="w-25">
            <b-button disabled class="px-1 shadow-sm" block variant="success">
              Mettre à jour les données
            </b-button>
          </div>
        </div>
        <div class="m-3">
          <b-table bordered :items="items">
            <template slot="[]" slot-scope="data">
              <b-input size="3" :value="data.value"></b-input>
            </template>
          </b-table>
        </div>
      </div>

    </div>
</template>

<script>
import listeEmploi from '@/data/emploiDeTemps.js'
export default {
  data () {
    return {
      selectClasse: null,
      currentTerm: 1,
      items: Array(10).fill(
        {
          eleves: 'Delian Koffi',
          interro1: 10,
          interro2: 10,
          interro3: 15,
          moyennneInterro: 15,
          devoir: 15,
          compo: 15,
          moyenneTrimestrielle: 15,
          appreciationGenerale: 'Peut mieux faire',
          rang: '1er',
          _rowVariant: 'light'
        }
      )
    }
  },
  computed: {
    classes () {
      const data = [{ value: null, text: 'Classe' }]
      listeEmploi.forEach(el => {
        const find = data.find(x => x.value === el.classe)
        if (!find && el.classe) { data.push({ value: el.classe, text: el.classe }) }
      })
      return data
    }
  }
}
</script>
