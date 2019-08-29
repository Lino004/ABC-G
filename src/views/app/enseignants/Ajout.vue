<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.ajout-enseignant')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4 rounded_sm">
          <div class="d-block w-75 position-absolute bar_stepper">
            <div class="separator mb-5"></div>
          </div>
          <b-row>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="dataAdd.infoPerso ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 0">
                  <div v-if="dataAdd.infoPerso"><i class="simple-icon-check __icon"/></div>
                  <div v-else>1</div>
                </b-badge>
              </h2>
              <h6>Information personnelles</h6>
            </b-colxx>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="dataAdd.infoContact ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 1">
                  <div v-if="dataAdd.infoContact"><i class="simple-icon-check __icon"/></div>
                  <div v-else>2</div>
                </b-badge>
              </h2>
              <h6>Informations de contacts</h6>
            </b-colxx>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="dataAdd.infoLoc ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 2">
                  <div v-if="dataAdd.infoLoc"><i class="simple-icon-check __icon"/></div>
                  <div v-else>3</div>
                </b-badge>
              </h2>
              <h6>Informations de localisation</h6>
            </b-colxx>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="currentStep >= 3 ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 3">
                  <div v-if="currentStep === 3"><i class="simple-icon-check __icon"/></div>
                  <div v-else>4</div>
                </b-badge>
              </h2>
              <h6>Cv et Documents Utiles</h6>
            </b-colxx>
          </b-row>
        </b-card>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4 rounded_sm" title-text-variant="danger" :title="title[currentStep]" >
        <info-perso @data="getInfoPerso($event)" :class="currentStep === 0 ? '' : 'd-none'"/>
        <info-contact @data="getInfoInfoContact($event)" :class="currentStep === 1 ? '' : 'd-none'"/>
        <info-localisation @data="getInfoInfoLoc($event)" :class="currentStep === 2 ? '' : 'd-none'"/>
        <doc-util :class="currentStep === 3 ? '' : 'd-none'"/>
      </b-card>
    </b-colxx>
  </b-row>
  <b-row align-h="center">
      <b-button variant="light" class="mr-2">Enregistrer et quitter</b-button>
      <b-button variant="primary" @click="suivant()">Suivant</b-button>
  </b-row>
  </div>
</template>

<script>
import InfoPerso from './ajout/InfoPerso'
import InfoContact from './ajout/InfoContact'
import InfoLocalisation from './ajout/InfoLocalisation'
import DocUtil from './ajout/DocUtil'

export default {
  components: {
    InfoPerso,
    InfoContact,
    InfoLocalisation,
    DocUtil
  },
  data () {
    return {
      currentStep: 0,
      title: [
        'Information personnelles',
        'Informations de contacts',
        'Informations de localisation',
        'Cv et Documents Utiles'
      ],
      dataAdd: {}
    }
  },
  methods: {
    getInfoPerso (e) {
      this.dataAdd.infoPerso = e
    },
    getInfoInfoContact (e) {
      this.dataAdd.infoContact = e
    },
    getInfoInfoLoc (e) {
      this.dataAdd.infoLoc = e
    },
    suivant () {
      if (this.currentStep === 0) {
        if (this.dataAdd.infoPerso) {
          this.currentStep = 1
          return ''
        } else {
          this.$notify('error', this.title[this.currentStep],
            'Erruer: Verifier les informations saisie',
            { duration: 3000, permanent: false }
          )
        }
      }
      if (this.currentStep === 1) {
        if (this.dataAdd.infoContact) {
          this.currentStep = 2
          return ''
        } else {
          this.$notify('error', this.title[this.currentStep],
            'Erruer: Verifier les informations saisie',
            { duration: 3000, permanent: false }
          )
        }
      }
      if (this.currentStep === 2) {
        if (this.dataAdd.infoLoc) {
          this.currentStep = 3
          return ''
        } else {
          this.$notify('error', this.title[this.currentStep],
            'Erruer: Verifier les informations saisie',
            { duration: 3000, permanent: false }
          )
        }
      }
      if (this.currentStep === 3) {
        console.log(this.dataAdd)
        this.$notify('success', this.title[this.currentStep],
          'Informations enregistree',
          { duration: 3000, permanent: false }
        )
      }
    }
  }
}
</script>
