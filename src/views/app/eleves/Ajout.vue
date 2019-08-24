<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.ajout-eleve')"/>
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
                  :variant="currentStep >= 0 ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 0">
                  <div>1</div>
                </b-badge>
              </h2>
              <h6>Information personnelles</h6>
            </b-colxx>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="currentStep >= 1 ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 1">
                  <div>2</div>
                </b-badge>
              </h2>
              <h6>Information des parents</h6>
            </b-colxx>
            <b-colxx class="text-center">
              <h2>
                <b-badge
                  :variant="currentStep >= 2 ? 'primary' : 'light'"
                  class="curseur rounded count_stepper shadow"
                  @click="currentStep = 2">
                  <div>3</div>
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
                  <div>4</div>
                </b-badge>
              </h2>
              <h6>Documents Utiles</h6>
            </b-colxx>
          </b-row>
        </b-card>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4 rounded_sm" title-text-variant="danger" :title="title[currentStep]" >
        <info-perso @data="getInfoPerso($event)" :class="currentStep === 0 ? '' : 'd-none'"/>
        <info-parent @data="getInfoInfoParent($event)" :class="currentStep === 1 ? '' : 'd-none'"/>
        <info-localisation :class="currentStep === 2 ? '' : 'd-none'"/>
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
import InfoParent from './ajout/InfoParent'
import InfoLocalisation from './ajout/InfoLocalisation'
import DocUtil from './ajout/DocUtil'

export default {
  components: {
    InfoPerso,
    InfoParent,
    InfoLocalisation,
    DocUtil
  },
  data () {
    return {
      currentStep: 0,
      title: [
        'Information personnelles',
        'Information des parents',
        'Informations de localisation',
        'Documents Utiles'
      ],
      dataAdd: {}
    }
  },
  methods: {
    getInfoPerso (e) {
      this.dataAdd.infoPerso = e
    },
    getInfoInfoParent (e) {
      this.dataAdd.infoParent = e
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
        if (this.dataAdd.infoParent) {
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
        this.currentStep = 3
      }
      if (this.currentStep === 3) {
        this.$notify('success', this.title[this.currentStep],
          'Informations enregistree',
          { duration: 3000, permanent: false }
        )
      }
    }
  }
}
</script>
