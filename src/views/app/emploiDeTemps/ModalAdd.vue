<template>
  <div>
    <b-button
      v-b-modal.ajout-seance
      class="px-1"
      block variant="primary">
      Ajouter <i class="simple-icon-plus"/>
    </b-button>
    <b-modal
      id="ajout-seance"
      centered hide-footer
      hide-header
      size="lg"
      content-class="rounded_sm"
      body-class="rounded_sm shadow-none p-0"
    >
      <b-card class="rounded_sm_top shadow-none" bg-variant="primary">
        <b-row>
          <b-colxx xxs="6" class="text-center">
            <h2>
              <b-badge
                variant="light"
                class="curseur rounded shadow">
                <div>1</div>
              </b-badge>
            </h2>
            <p class="mb-0">Type de séance</p>
          </b-colxx>
          <b-colxx xxs="6" class="text-center">
            <h2>
              <b-badge
                variant="light"
                class="curseur rounded shadow">
                <div>2</div>
              </b-badge>
            </h2>
            <p class="mb-0">Informations de la séance</p>
          </b-colxx>
        </b-row>
      </b-card>
      <b-row align-v="center" align-h="center" v-if="currentVue === 0">
        <b-colxx xxs="4">
          <div
            :class="{shadow: choix === 0}"
            class="m-4 text-center"
            @click="choix = 0">
            <b-img class="curseur" src="/icon-abc/icon-school-09.png"></b-img>
          </div>
        </b-colxx>
        <b-colxx xxs="2" class="text-center"> <h3>OU</h3> </b-colxx>
        <b-colxx xxs="4">
          <div
            :class="{shadow: choix === 1}"
            class="m-4 text-center p-4 curseur"
            @click="choix = 1">
            <i class="simple-icon-clock text-primary display-2 m-1"/>
          </div>
        </b-colxx>
      </b-row>
      <div v-if="currentVue === 1" class="m-3">
        <b-row>
          <b-col cols="12" md="6">
            <b-form>
              <b-form-group label-cols-sm="3" label="Matiere" v-if="choix === 0">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-cols-sm="3" label="Simple séance" v-if="choix === 1">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-cols-sm="3" label="Classe">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-cols-sm="3" label="Section">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-col>
          <b-col cols="12" md="6">
            <b-form>
              <b-form-group label-cols-sm="3" label="Jour de la semaine">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-cols-sm="3" label="Série">
                <b-form-input
                  class="rounded_sm"></b-form-input>
                <b-form-invalid-feedback>msg</b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
        <div class="border-top my-3">
          <span class="position-relative top-12 pr-4 font-weight-bold bg-white">Début</span>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-cols-sm="3" label="Heure">
                <b-form-select class="rounded_sm"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label-cols-sm="3" label="Minutes">
                <b-form-select class="rounded_sm"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
        <div class="border-top my-3">
          <span class="position-relative top-12 pr-5 font-weight-bold bg-white">Fin</span>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-cols-sm="3" label="Heure">
                <b-form-select class="rounded_sm"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label-cols-sm="3" label="Minutes">
                <b-form-select class="rounded_sm"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </div>
      </div>
      <b-card class="rounded_sm shadow-none text-center">
        <b-button
          variant="primary"
          v-if="currentVue === 0"
          @click="suivant">
          Suivant
        </b-button><b-button
          variant="primary"
          v-if="currentVue === 1"
          @click="currentVue = 0">
          Ajouter
        </b-button>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    choix: null,
    currentVue: 0
  }),
  methods: {
    suivant () {
      if (this.choix != null) this.currentVue = 1
      else {
        this.$notify('error', 'Erreur',
          'Veillez choisir',
          { duration: 3000, permanent: false }
        )
      }
    }
  }
}
</script>

<style>

</style>
