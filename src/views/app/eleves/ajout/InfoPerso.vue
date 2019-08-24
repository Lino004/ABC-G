<template>
  <b-row>
    <b-colxx xxs="4" class="text-center">
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    </b-colxx>
    <b-colxx>
      <b-form>
        <b-form-group label-cols-sm="2" label="Nom">
          <b-form-input
            v-model="nom"
            @blur="valideNom"
            placeholder="Ex : BONI"
            :state="stateNom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidNom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Prenom">
          <b-form-input
            v-model="prenom"
            @blur="validePrenom"
            placeholder="Ex : Hugues"
            :state="statePrenom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidPrenom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Genre">
          <b-form-select @blur="test" @change="validate" v-model="selectGenre" :options="genres" class="rounded_sm"></b-form-select>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Niveau d'instruction">
          <b-form-select @change="validate" v-model="selectNiveau" :options="niveaux" class="rounded_sm"></b-form-select>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Classe">
          <b-form-select @change="validate" v-model="selectClasse" :options="classes()" class="rounded_sm"></b-form-select>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Section">
          <b-form-select @change="validate" v-model="selectSection" :options="section" class="rounded_sm"></b-form-select>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Date de naissance">
          <v-date-picker
            mode="single"
            v-model="dateNaissance"
            :input-props="{ class:'form-control rounded_sm', placeholder: 'Date de naissance' }"
          ></v-date-picker>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Lieu de naissance">
          <b-form-input
            v-model="lieuNaissance"
            @blur="valideLieuNaissance"
            placeholder="Ex : Cotonou, APKAPKA"
            :state="stateLieuNaissance"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{msgInvalidLieuNaissance}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Note de santé">
          <b-form-textarea
            v-model="noteSante"
            @blur="valideNoteSante"
            placeholder="Ex : Allergie, ..."
            rows="6"
            :state="stateNoteSante"
            class="rounded_sm"
          ></b-form-textarea>
          <b-form-invalid-feedback>{{msgInvalidNoteSante}}</b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-colxx>
  </b-row>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      mainProps: { blank: true, blankColor: '#145388', width: 150, height: 150, class: 'm1' },
      nom: '',
      stateNom: null,
      msgInvalidNom: '',
      prenom: '',
      statePrenom: null,
      msgInvalidPrenom: '',
      selectGenre: 'H',
      genres: [
        { value: 'H', text: 'Homme' },
        { value: 'F', text: 'Femme' }
      ],
      selectNiveau: 'P',
      niveaux: [
        { value: 'M', text: 'Marternelle' },
        { value: 'P', text: 'Primaire' },
        { value: 'S', text: 'Secondaire' }
      ],
      selectClasse: '',
      selectSection: 'A',
      section: [
        { value: 'A', text: 'A' }
      ],
      dateNaissance: new Date(),
      lieuNaissance: '',
      stateLieuNaissance: null,
      msgInvalidLieuNaissance: '',
      noteSante: '',
      stateNoteSante: null,
      msgInvalidNoteSante: ''
    }
  },
  computed: {},
  methods: {
    classes () {
      if (this.selectNiveau === 'P') {
        this.selectClasse = 'CP1'
        return [
          { value: 'CP1', text: 'CP1' },
          { value: 'CP2', text: 'CP2' },
          { value: 'CE1', text: 'CE1' },
          { value: 'CE2', text: 'CE2' },
          { value: 'CM1', text: 'CM1' },
          { value: 'CM2', text: 'CM2' }
        ]
      }
      if (this.selectNiveau === 'S') {
        this.selectClasse = '6e'
        return [
          { value: '6e', text: '6e' },
          { value: '5e', text: '5e' },
          { value: '4e', text: '4e' },
          { value: '3e', text: '3e' },
          { value: '2nd', text: '2nd' },
          { value: '1er', text: '1er' },
          { value: 'Tle', text: 'Tle' }
        ]
      }
      this.selectClasse = 'M1'
      return [
        { value: 'M1', text: 'Marternelle 1' },
        { value: 'M2', text: 'Marternelle 2' }
      ]
    },
    valideNom () {
      if (this.nom.length >= 1) {
        this.stateNom = true
        this.msgInvalidNom = ''
        this.validate()
      } else if (this.nom.length > 0) {
        this.stateNom = false
        this.msgInvalidNom = 'Entrez au moins 3 caracteres'
      } else {
        this.stateNom = false
        this.msgInvalidNom = 'Auccune donnee rentree'
      }
    },
    validePrenom () {
      if (this.prenom.length >= 1) {
        this.statePrenom = true
        this.msgInvalidPrenom = ''
        this.validate()
      } else if (this.prenom.length > 0) {
        this.statePrenom = false
        this.msgInvalidPrenom = 'Entrez au moins 3 caracteres'
      } else {
        this.statePrenom = false
        this.msgInvalidPrenom = 'Auccune donnee rentree'
      }
    },
    valideLieuNaissance () {
      if (this.lieuNaissance.length >= 1) {
        this.stateLieuNaissance = true
        this.msgInvalidLieuNaissance = ''
        this.validate()
      } else if (this.lieuNaissance.length > 0) {
        this.stateLieuNaissance = false
        this.msgInvalidLieuNaissance = 'Entrez au moins 3 caracteres'
      } else {
        this.stateLieuNaissance = false
        this.msgInvalidLieuNaissance = 'Auccune donnee rentree'
      }
    },
    valideNoteSante () {
      if (this.noteSante.length >= 1) {
        this.stateNoteSante = true
        this.msgInvalidNoteSante = ''
        this.validate()
      } else if (this.noteSante.length > 0) {
        this.stateNoteSante = false
        this.msgInvalidNoteSante = 'Entrez au moins 3 caracteres'
      } else {
        this.stateNoteSante = false
        this.msgInvalidNoteSante = 'Auccune donnee rentree'
      }
    },
    validate () {
      if (this.stateNom &&
          this.statePrenom &&
          this.stateNoteSante &&
          this.stateLieuNaissance &&
          this.selectClasse &&
          this.selectSection &&
          this.selectGenre &&
          this.selectNiveau &&
          this.dateNaissance) {
        this.$emit('data', {
          nom: this.nom,
          prenom: this.prenom,
          genres: this.selectGenre,
          niveau: this.selectNiveau,
          classe: this.selectClasse,
          section: this.selectSection,
          data: moment(this.dateNaissance).format('DD/MM/YYYY'),
          lieuDeNaissance: this.lieuNaissance,
          note: this.noteSante
        })
      } else {
        this.$emit('data', null)
      }
    },
    test () {
      console.log('ok')
    }
  }
}
</script>

<style>

</style>
