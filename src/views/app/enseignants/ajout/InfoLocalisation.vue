<template>
  <b-row>
    <b-colxx>
      <b-form>
        <b-form-group label-cols-sm="2" label="Département">
          <b-form-input
            v-model="dep"
            @blur="valideDep"
            placeholder="Ex : Atlantique"
            :state="stateDep"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidDep}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Ville">
          <b-form-input
            v-model="ville"
            @blur="valideVille"
            placeholder="Ex : Cotonou"
            :state="stateVille"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidVille}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Adresse physique">
          <b-form-input
            v-model="adresse"
            @blur="valideAdresse"
            placeholder="Ex : 03BP980 Cotonou"
            :state="stateAdresse"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidAdresse}}</b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-colxx>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      dep: '',
      stateDep: null,
      msgInvalidDep: '',
      ville: '',
      stateVille: null,
      msgInvalidVille: '',
      adresse: '',
      stateAdresse: null,
      msgInvalidAdresse: ''
    }
  },
  computed: {},
  methods: {
    valideDep () {
      if (this.dep.length >= 1) {
        this.stateDep = true
        this.msgInvalidDep = ''
        this.validate()
      } else if (this.dep.length > 0) {
        this.stateDep = false
        this.msgInvalidDep = 'Entrez au moins 3 caracteres'
      } else {
        this.stateDep = false
        this.msgInvalidDep = 'Auccune donnee rentree'
      }
    },
    valideVille () {
      if (this.ville.length >= 1) {
        this.stateVille = true
        this.msgInvalidVille = ''
        this.validate()
      } else if (this.ville.length > 0) {
        this.stateVille = false
        this.msgInvalidVille = 'Entrez au moins 3 caracteres'
      } else {
        this.stateVille = false
        this.msgInvalidVille = 'Auccune donnee rentree'
      }
    },
    valideAdresse () {
      if (this.adresse.length >= 1) {
        this.stateAdresse = true
        this.msgInvalidAdresse = ''
        this.validate()
      } else if (this.adresse.length > 0) {
        this.stateAdresse = false
        this.msgInvalidAdresse = 'Entrez au moins 3 caracteres'
      } else {
        this.stateAdresse = false
        this.msgInvalidAdresse = 'Auccune donnee rentree'
      }
    },
    validate () {
      if (this.stateDep &&
          this.stateVille &&
          this.stateAdresse) {
        this.$emit('data', {
          dep: this.dep,
          ville: this.ville,
          adresse: this.adresse
        })
      } else {
        this.$emit('data', null)
      }
    }
  }
}
</script>

<style>

</style>
