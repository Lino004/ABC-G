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
          <b-form-select @change="validate" v-model="selectGenre" :options="genres" class="rounded_sm"></b-form-select>
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
        <b-form-group label-cols-sm="2" label="Description courte">
          <b-form-textarea
            v-model="descrip"
            @blur="valideDescrip"
            placeholder="Ex : Quelque chose a propos de l'enseignant, ..."
            rows="6"
            :state="stateDescrip"
            class="rounded_sm"
          ></b-form-textarea>
          <b-form-invalid-feedback>{{msgInvalidDescrip}}</b-form-invalid-feedback>
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
      dateNaissance: new Date(),
      lieuNaissance: '',
      stateLieuNaissance: null,
      msgInvalidLieuNaissance: '',
      descrip: '',
      stateDescrip: null,
      msgInvalidDescrip: ''
    }
  },
  computed: {},
  methods: {
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
    valideDescrip () {
      if (this.descrip.length >= 1) {
        this.stateDescrip = true
        this.msgInvalidDescrip = ''
        this.validate()
      } else if (this.descrip.length > 0) {
        this.stateDescrip = false
        this.msgInvalidDescrip = 'Entrez au moins 3 caracteres'
      } else {
        this.stateDescrip = false
        this.msgInvalidDescrip = 'Auccune donnee rentree'
      }
    },
    validate () {
      if (this.stateNom &&
          this.statePrenom &&
          this.stateDescrip &&
          this.stateLieuNaissance &&
          this.selectGenre &&
          this.dateNaissance) {
        this.$emit('data', {
          nom: this.nom,
          prenom: this.prenom,
          genres: this.selectGenre,
          data: moment(this.dateNaissance).format('DD/MM/YYYY'),
          lieuDeNaissance: this.lieuNaissance,
          descrip: this.descrip
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
