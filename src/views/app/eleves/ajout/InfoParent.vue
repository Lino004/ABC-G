<template>
  <b-row>
    <b-colxx xxs="12" md="6">
      <div class="text-center text-primary h6 mb-4">Information du Père</div>
      <b-form>
        <b-form-group label-cols-sm="2" label="Nom">
          <b-form-input
            v-model="pere.nom"
            @blur="pereValideNom"
            placeholder="Ex : BONI"
            :state="pere.stateNom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{pere.msgInvalidNom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Prenom">
          <b-form-input
            v-model="pere.prenom"
            @blur="pereValidePrenom"
            placeholder="Ex : Hugues"
            :state="pere.statePrenom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{pere.msgInvalidPrenom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Profession">
          <b-form-input
            v-model="pere.profession"
            @blur="pereValideProfession"
            placeholder="Ex : Pilote"
            :state="pere.stateProfession"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{pere.msgInvalidProfession}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Contacts">
          <input-tag @input="validate" class="rounded_sm" v-model="pere.contacts" placeholder="Ex : +229..."></input-tag>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Langue parlé">
          <b-form-select @change="validate" v-model="pere.langue" :options="langues" class="rounded_sm"></b-form-select>
        </b-form-group>
      </b-form>
    </b-colxx>
    <b-colxx xxs="12" md="6">
      <div class="text-center text-primary h6 mb-4">Information du Mère</div>
      <b-form>
        <b-form-group label-cols-sm="2" label="Nom">
          <b-form-input
            v-model="mere.nom"
            @blur="mereValideNom"
            placeholder="Ex : BONI"
            :state="mere.stateNom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{mere.msgInvalidNom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Prenom">
          <b-form-input
            v-model="mere.prenom"
            @blur="mereValidePrenom"
            placeholder="Ex : Hugues"
            :state="mere.statePrenom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{mere.msgInvalidPrenom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Profession">
          <b-form-input
            v-model="mere.profession"
            @blur="mereValideProfession"
            placeholder="Ex : Pilote"
            :state="mere.stateProfession"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{mere.msgInvalidProfession}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Contacts">
          <input-tag @input="validate" class="rounded_sm" v-model="mere.contacts" placeholder="Ex : +229..."></input-tag>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Langue parlé">
          <b-form-select @change="validate" v-model="mere.langue" :options="langues" class="rounded_sm"></b-form-select>
        </b-form-group>
      </b-form>
    </b-colxx>
    <b-colxx xxs="12" md="6">
      <div class="text-center text-primary h6 mb-4">Information du Tuteur</div>
      <b-form>
        <b-form-group label-cols-sm="2" label="Nom">
          <b-form-input
            v-model="tuteur.nom"
            @blur="tuteurValideNom"
            placeholder="Ex : BONI"
            :state="tuteur.stateNom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{tuteur.msgInvalidNom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Prenom">
          <b-form-input
            v-model="tuteur.prenom"
            @blur="tuteurValidePrenom"
            placeholder="Ex : Hugues"
            :state="tuteur.statePrenom"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{tuteur.msgInvalidPrenom}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Profession">
          <b-form-input
            v-model="tuteur.profession"
            @blur="tuteurValideProfession"
            placeholder="Ex : Pilote"
            :state="tuteur.stateProfession"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{tuteur.msgInvalidProfession}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Contacts">
          <input-tag @input="validate" class="rounded_sm" v-model="tuteur.contacts" placeholder="Ex : +229..."></input-tag>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Langue parlé">
          <b-form-select @change="validate" v-model="tuteur.langue" :options="langues" class="rounded_sm"></b-form-select>
        </b-form-group>
      </b-form>
    </b-colxx>
  </b-row>
</template>

<script>
import InputTag from '@/components/Form/InputTag'

export default {
  components: { InputTag },
  data () {
    return {
      pere: {
        nom: '',
        stateNom: null,
        msgInvalidNom: '',
        prenom: '',
        statePrenom: null,
        msgInvalidPrenom: '',
        profession: '',
        stateProfession: null,
        msgInvalidProfession: '',
        contacts: [],
        langue: 'fr'
      },
      mere: {
        nom: '',
        stateNom: null,
        msgInvalidNom: '',
        prenom: '',
        statePrenom: null,
        msgInvalidPrenom: '',
        profession: '',
        stateProfession: null,
        msgInvalidProfession: '',
        contacts: [],
        langue: 'fr'
      },
      tuteur: {
        nom: '',
        stateNom: null,
        msgInvalidNom: '',
        prenom: '',
        statePrenom: null,
        msgInvalidPrenom: '',
        profession: '',
        stateProfession: null,
        msgInvalidProfession: '',
        contacts: [],
        langue: 'fr'
      },
      langues: [
        { value: 'fr', text: 'Français' },
        { value: 'fn', text: 'Fon' },
        { value: 'ba', text: 'Bariba' },
        { value: 'di', text: 'Dindie' }
      ]
    }
  },
  computed: {},
  methods: {
    pereValideNom () {
      if (this.pere.nom.length >= 1) {
        this.pere.stateNom = true
        this.pere.msgInvalidNom = ''
        this.validate()
      } else if (this.pere.nom.length > 0) {
        this.pere.stateNom = false
        this.pere.msgInvalidNom = 'Entrez au moins 3 caracteres'
      } else {
        this.pere.stateNom = false
        this.pere.msgInvalidNom = 'Auccune donnee rentree'
      }
    },
    pereValidePrenom () {
      if (this.pere.prenom.length >= 1) {
        this.pere.statePrenom = true
        this.pere.msgInvalidPrenom = ''
        this.validate()
      } else if (this.pere.prenom.length > 0) {
        this.pere.statePrenom = false
        this.pere.msgInvalidPrenom = 'Entrez au moins 3 caracteres'
      } else {
        this.pere.statePrenom = false
        this.pere.msgInvalidPrenom = 'Auccune donnee rentree'
      }
    },
    pereValideProfession () {
      if (this.pere.profession.length >= 1) {
        this.pere.stateProfession = true
        this.pere.msgInvalidProfession = ''
        this.validate()
      } else if (this.pere.profession.length > 0) {
        this.pere.stateProfession = false
        this.pere.msgInvalidProfession = 'Entrez au moins 3 caracteres'
      } else {
        this.pere.stateProfession = false
        this.pere.msgInvalidProfession = 'Auccune donnee rentree'
      }
    },
    mereValideNom () {
      if (this.mere.nom.length >= 1) {
        this.mere.stateNom = true
        this.mere.msgInvalidNom = ''
        this.validate()
      } else if (this.mere.nom.length > 0) {
        this.mere.stateNom = false
        this.mere.msgInvalidNom = 'Entrez au moins 3 caracteres'
      } else {
        this.mere.stateNom = false
        this.mere.msgInvalidNom = 'Auccune donnee rentree'
      }
    },
    mereValidePrenom () {
      if (this.mere.prenom.length >= 1) {
        this.mere.statePrenom = true
        this.mere.msgInvalidPrenom = ''
        this.validate()
      } else if (this.mere.prenom.length > 0) {
        this.mere.statePrenom = false
        this.mere.msgInvalidPrenom = 'Entrez au moins 3 caracteres'
      } else {
        this.mere.statePrenom = false
        this.mere.msgInvalidPrenom = 'Auccune donnee rentree'
      }
    },
    mereValideProfession () {
      if (this.mere.profession.length >= 1) {
        this.mere.stateProfession = true
        this.mere.msgInvalidProfession = ''
        this.validate()
      } else if (this.mere.profession.length > 0) {
        this.mere.stateProfession = false
        this.mere.msgInvalidProfession = 'Entrez au moins 3 caracteres'
      } else {
        this.mere.stateProfession = false
        this.mere.msgInvalidProfession = 'Auccune donnee rentree'
      }
    },
    tuteurValideNom () {
      if (this.tuteur.nom.length >= 1) {
        this.tuteur.stateNom = true
        this.tuteur.msgInvalidNom = ''
        this.validate()
      } else if (this.tuteur.nom.length > 0) {
        this.tuteur.stateNom = false
        this.tuteur.msgInvalidNom = 'Entrez au moins 3 caracteres'
      } else {
        this.tuteur.stateNom = false
        this.tuteur.msgInvalidNom = 'Auccune donnee rentree'
      }
    },
    tuteurValidePrenom () {
      if (this.tuteur.prenom.length >= 1) {
        this.tuteur.statePrenom = true
        this.tuteur.msgInvalidPrenom = ''
        this.validate()
      } else if (this.tuteur.prenom.length > 0) {
        this.tuteur.statePrenom = false
        this.tuteur.msgInvalidPrenom = 'Entrez au moins 3 caracteres'
      } else {
        this.tuteur.statePrenom = false
        this.tuteur.msgInvalidPrenom = 'Auccune donnee rentree'
      }
    },
    tuteurValideProfession () {
      if (this.tuteur.profession.length >= 1) {
        this.tuteur.stateProfession = true
        this.tuteur.msgInvalidProfession = ''
        this.validate()
      } else if (this.tuteur.profession.length > 0) {
        this.tuteur.stateProfession = false
        this.tuteur.msgInvalidProfession = 'Entrez au moins 3 caracteres'
      } else {
        this.tuteur.stateProfession = false
        this.tuteur.msgInvalidProfession = 'Auccune donnee rentree'
      }
    },
    validatePere () {
      if (this.pere.stateNom &&
          this.pere.statePrenom &&
          this.pere.stateProfession &&
          this.pere.contacts.length &&
          this.pere.langue) {
        return true
      }
      return false
    },
    validateMere () {
      if (this.mere.stateNom &&
          this.mere.statePrenom &&
          this.mere.stateProfession &&
          this.mere.contacts.length &&
          this.mere.langue) {
        return true
      }
      return false
    },
    validateTuteur () {
      if (this.tuteur.stateNom &&
          this.tuteur.statePrenom &&
          this.tuteur.stateProfession &&
          this.tuteur.contacts.length &&
          this.tuteur.langue) {
        return true
      }
      return false
    },
    validate () {
      if (this.validatePere() ||
          this.validateMere() ||
          this.validateTuteur()) {
        this.$emit('data', {
          pere: {
            nom: this.pere.nom,
            prenom: this.pere.prenom,
            profession: this.pere.profession,
            contacts: this.pere.contacts,
            langue: this.pere.langue
          },
          mere: {
            nom: this.mere.nom,
            prenom: this.mere.prenom,
            profession: this.mere.profession,
            contacts: this.mere.contacts,
            langue: this.mere.langue
          },
          tuteur: {
            nom: this.tuteur.nom,
            prenom: this.tuteur.prenom,
            profession: this.tuteur.profession,
            contacts: this.tuteur.contacts,
            langue: this.tuteur.langue
          }
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
