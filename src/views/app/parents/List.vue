<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.parents')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx>
      <b-row align-h="between">
        <b-colxx>
          <b-button :variant="currentShow === 1 ? 'primary' : 'light'" class="rounded-0 mr-1 border-0"
            @click.stop="currentShow = 1">
            <i class="simple-icon-menu"></i>
          </b-button>
          <b-button :variant="currentShow === 2 ? 'primary' : 'light'" class="rounded-0 mr-1 border-0"
            @click.stop="currentShow = 2">
            <i class="simple-icon-grid"></i>
          </b-button>
        </b-colxx>
        <b-colxx md="8" lg="6" class="text-right text-center">
          <b-row class="h-100" align-v="center">
            <b-colxx md="3"></b-colxx>
            <b-colxx md="3">
              <b-button
                class="px-1"
                block
                variant="primary"
                :disabled="selected.length === 0">
                Supprimer <i class="simple-icon-trash"/>
              </b-button>
            </b-colxx>
            <b-colxx md="3"><b-button disabled class="px-1" block variant="primary">Importer <i class="iconsminds-left-1"/></b-button></b-colxx>
            <b-colxx md="3"><b-button disabled class="px-1" block variant="primary">Exporter <i class="iconsminds-right-1"/></b-button></b-colxx>
          </b-row>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
  <b-row class="my-3">
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
          <b-row class="h-100" align-v="center" align-h="end">
            <b-colxx md="2">
              <b-input
                class="mb-2 mr-sm-2 mb-sm-0 rounded shadow-sm"
                placeholder="Filtre par nom"
                v-model="search"
              ></b-input>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectClasse" :options="nbrEnfants"></b-form-select>
            </b-colxx>
            <b-colxx md="2">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectNationalite" :options="nationalites"></b-form-select>
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

  <table-list
    v-if="currentShow === 1"
    :items="tab"
    :fields="fields"
    :currentPage="currentPage"
    :perPage="perPage"
    v-on:selected="setSelected($event)"
  />

  <grid
    v-if="currentShow === 2"
    :items="tab"
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
import listeParents from '@/data/listeParents'
import TableList from './list/TableList'
import Grid from './list/Grid'

export default {
  components: { TableList, Grid },
  data () {
    return {
      search: '',
      selectClasse: null,
      selectNationalite: null,
      selectGenre: null,
      selectAge: null,
      fields: [
        { key: 'select', label: 'SELECTION', tdClass: 'align-middle' },
        { key: 'url', label: '', tdClass: 'align-middle' },
        { key: 'nom', label: 'NOM COMPLET', tdClass: 'align-middle' },
        { key: 'nbrEnfants', label: "NOMBRES D'ENFANT", tdClass: 'align-middle' },
        { key: 'email', label: 'EMAIL', tdClass: 'align-middle' },
        { key: 'nationalite', label: 'NATIONALITÉ', tdClass: 'align-middle' },
        { key: 'genre', label: 'GENRE', tdClass: 'align-middle' },
        { key: 'age', label: 'AGE', tdClass: 'align-middle' },
        { key: 'action', label: 'ACTION', tdClass: 'align-middle' }
      ],
      items: listeParents,
      selected: [],
      perPage: 6,
      currentPage: 1,
      currentShow: 1
    }
  },
  computed: {
    nbrEnfants () {
      const data = [{ value: null, text: "Nbr. d'enfants" }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.nbrEnfants)
        if (!find) data.push({ value: el.nbrEnfants, text: el.nbrEnfants })
      })
      return data
    },
    nationalites () {
      const data = [{ value: null, text: 'Nationalité' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.nationalite)
        if (!find) data.push({ value: el.nationalite, text: el.nationalite })
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
      if (this.selectClasse) data = data.filter(el => el.nbrEnfants.includes(this.selectClasse))
      if (this.selectNationalite) data = data.filter(el => el.nationalite === this.selectNationalite)
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
    }
  }
}
</script>
