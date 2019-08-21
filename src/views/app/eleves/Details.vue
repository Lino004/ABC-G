<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="dataEleve.nom"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx>
        <b-card no-body>
          <div class="bg-muted rounded_lg_lb">
            <b-colxx xxs="3" class="text-white my-2">
              <div>
                <b-img :src="dataEleve.url" width="150" rounded="circle" class="bg-white" alt="placeholder"></b-img>
                <div class="ml-2">
                  <h5> {{dataEleve.nom}} </h5>
                  <h6> {{dataEleve.email}} </h6>
                </div>
              </div>
            </b-colxx>
          </div>
          <div class="p-3">
            <div class="d-inline-block p-2">
              <h6 class="font-weight-bold mb-1">Eleve en :</h6>
              <p> {{dataEleve.classe}} {{dataEleve.serie}} </p>
            </div>
            <div class="d-inline-block p-2 border-left border-right">
              <h6 class="font-weight-bold mb-1">Inscrit le :</h6>
              <p> {{dataEleve.dateInscription}} </p>
            </div>
            <div class="d-inline-block p-2">
              <h6 class="font-weight-bold mb-1">Identifiant :</h6>
              <p> {{dataEleve.id}} </p>
            </div>
          </div>
          <div class="mx-3">

            <b-nav tabs fill>
              <b-nav-item class="h6 m-3" :active="currentNav === 1" @click.prevent="currentNav = 1">Informations personnelles</b-nav-item>
              <b-nav-item class="h6 m-3" :active="currentNav === 2" @click.prevent="currentNav = 2">Historique de paiement</b-nav-item>
              <b-nav-item class="h6 m-3" :active="currentNav === 3" @click.prevent="currentNav = 3">Notes</b-nav-item>
              <b-nav-item class="h6 m-3" :active="currentNav === 4" @click.prevent="currentNav = 4" disabled>Performance</b-nav-item>
            </b-nav>

            <infos
              v-if="currentNav === 1"
              :details="dataEleve.details"/>

            <paiement
              v-if="currentNav === 2"
              :paiement="dataEleve.paiement"/>

            <notes
              v-if="currentNav === 3"
              :paiement="dataEleve.paiement"/>

          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { getEleve } from '@/data/listeEleves'
import Infos from './details/Infos'
import Paiement from './details/Paiement'
import Notes from './details/Notes'

export default {
  components: { Infos, Paiement, Notes },
  data () {
    return {
      dataEleve: {},
      currentNav: 1
    }
  },
  beforeRouteEnter (to, from, next) {
    getEleve(to.params.id).then(result => {
      next(vm => vm.setData(result))
    }).catch(e => {
      next('/error')
    })
  },
  beforeRouteUpdate (to, from, next) {
    getEleve(to.params.id).then(result => {
      this.setData(result)
    }).catch(e => {
      next('/error')
    })
  },
  methods: {
    setData (data) {
      this.dataEleve = data
    }
  },
  mounted () {
    if (this.dataEleve) {
      getEleve(this.$route.params.id).then(result => {
        this.setData(result)
      }).catch(e => {
        this.$router.push('/error')
      })
    }
  }
}
</script>

<style>

</style>
