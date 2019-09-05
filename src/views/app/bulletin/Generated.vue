<template>
<div>
  <p class="font-weight-medium" style="font-size: 2rem; ">Liste des bulletins générés</p>

  <b-row class="my-5">
    <b-colxx>
      <b-row align-h="between" align-v="center">
        <b-colxx md="1" lg="3">
          <b-row class="h-100" align-v="center">
            <b-colxx>
              <p class="mb-0"> {{rowsSelect}} / {{rows}} Sélectionnés</p>
            </b-colxx>
          </b-row>
        </b-colxx>
        <b-colxx md="11" lg="9" class="text-right text-center">
          <b-row class="h-100" align-v="center">
            <b-colxx md="2">
              <b-input
                class="mb-2 mr-sm-2 mb-sm-0 rounded shadow-sm"
                placeholder="Filtre par nom"
                v-model="search"
              ></b-input>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectClasse" :options="classes"></b-form-select>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectSerie" :options="series"></b-form-select>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectSection" :options="sections"></b-form-select>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectGenre" :options="genres"></b-form-select>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectAge" :options="ages"></b-form-select>
            </b-colxx>
          </b-row>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>

  <generated-list
    v-if="currentShow === 1"
    :items="tab"
    :fields="fields"
    :currentPage="currentPage"
    :perPage="perPage"
    v-on:selected="setSelected($event)"
  />

  <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    align="right"
    class=""
    prev-text="Precedent"
    next-text="Suivant"
  >
    <span slot="page" slot-scope="{ page, active }">
      <div class="rounded-0" v-if="active">{{ page }}</div>
      <i v-else>{{ page }}</i>
    </span>
  </b-pagination>

</div>
</template>

<script>
import listeEleve from '@/data/listeEleves'
import GeneratedList from './list/GeneratedList'

export default {
  components: { GeneratedList },
  data () {
    return {
      search: '',
      selectClasse: null,
      selectSerie: null,
      selectSection: null,
      selectGenre: null,
      selectAge: null,
      fields: [
        { key: 'select', label: 'SELECTION', tdClass: 'align-middle' },
        { key: 'url', label: '', tdClass: 'align-middle' },
        { key: 'nom', label: 'NOM COMPLET', tdClass: 'align-middle' },
        { key: 'classe', label: 'CLASSE', tdClass: 'align-middle' },
        { key: 'serie', label: 'SERIE', tdClass: 'align-middle' },
        { key: 'section', label: 'SECTION', tdClass: 'align-middle' },
        { key: 'genre', label: 'GENRE', tdClass: 'align-middle' },
        { key: 'age', label: 'AGE', tdClass: 'align-middle' },
        { key: 'action', label: 'ACTION', tdClass: 'align-middle' }
      ],
      items: listeEleve, // changer à liste des bulletins générés
      selected: [],
      perPage: 6,
      currentPage: 1,
      currentShow: 1
    }
  },
  computed: {
    classes () {
      const data = [{ value: null, text: 'Classe' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.classe)
        if (!find) data.push({ value: el.classe, text: el.classe })
      })
      return data
    },
    series () {
      const data = [{ value: null, text: 'Serie' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.serie)
        if (!find) data.push({ value: el.serie, text: el.serie })
      })
      return data
    },
    sections () {
      const data = [{ value: null, text: 'Section' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.section)
        if (!find) data.push({ value: el.section, text: el.section })
      })
      return data
    },
    genres () {
      const data = [{ value: null, text: 'Genre' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.genre)
        if (!find) data.push({ value: el.genre, text: el.genre })
      })
      return data
    },
    ages () {
      const data = [{ value: null, text: 'Age' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.age)
        if (!find) data.push({ value: el.age, text: el.age })
      })
      return data
    },
    tab () {
      let data = this.items
      if (this.search) data = data.filter(el => String(el.nom).toLowerCase().includes(this.search.toLowerCase()))
      if (this.selectClasse) data = data.filter(el => el.classe === this.selectClasse)
      if (this.selectSerie) data = data.filter(el => el.serie === this.selectSerie)
      if (this.selectSection) data = data.filter(el => el.section === this.selectSection)
      if (this.selectGenre) data = data.filter(el => el.genre === this.selectGenre)
      if (this.selectAge) data = data.filter(el => el.age === this.selectAge)
      return data
    },
    rows () {
      return this.tab.length
    },
    rowsSelect () {
      return this.selected.length
    }
  },
  methods: {
    setSelected (items) {
      this.selected = items
    },
    generate () {

    }
  }
}
</script>
