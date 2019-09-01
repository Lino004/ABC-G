<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="dataParent.nom"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx>
        <b-card no-body>
          <div class="bg-muted rounded_lg_lb">
            <b-colxx xxs="3" class="text-white my-2">
              <div>
                <b-img :src="dataParent.url" width="150" rounded="circle" class="bg-white" alt="placeholder"></b-img>
                <div class="ml-2">
                  <h5> {{dataParent.nom}} </h5>
                  <h6> {{dataParent.email}} </h6>
                </div>
              </div>
            </b-colxx>
          </div>
          <div class="p-3">
            <div class="d-inline-block p-2">
              <h6 class="font-weight-bold mb-1">Nbr. d'endants :</h6>
              <p>{{dataParent.nbrEnfants}}</p>
            </div>
            <div class="d-inline-block p-2 border-left border-right">
              <h6 class="font-weight-bold mb-1">Inscrit le :</h6>
              <p> {{dataParent.dateInscription}} </p>
            </div>
            <div class="d-inline-block p-2">
              <h6 class="font-weight-bold mb-1">Identifiant :</h6>
              <p> {{dataParent.id}} </p>
            </div>
          </div>
          <div class="mx-3">

            <b-nav tabs fill>
              <b-nav-item class="h6 m-3" :active="currentNav === 1" @click.prevent="currentNav = 1">Informations personnelles</b-nav-item>
              <b-nav-item class="h6 m-3" :active="currentNav === 2" @click.prevent="currentNav = 2">Enfants du parent</b-nav-item>
              <b-nav-item class="h6 m-3" :active="currentNav === 3" @click.prevent="currentNav = 3">Historique de paiement</b-nav-item>
            </b-nav>

            <infos
              v-if="currentNav === 1"
              :details="dataParent.details"/>

            <enfants
              v-if="currentNav === 2"
              :enfants="dataParent.enfants"/>

            <paiement
              v-if="currentNav === 3"
              :paiement="dataParent.paiement"/>

          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { getParent } from '@/data/listeParents'
import Infos from './details/Infos'
import Enfants from './details/Enfants'
import Paiement from './details/Paiement'

export default {
  components: { Infos, Enfants, Paiement },
  data () {
    return {
      dataParent: {},
      currentNav: 1
    }
  },
  beforeRouteEnter (to, from, next) {
    getParent(to.params.id).then(result => {
      next(vm => vm.setData(result))
    }).catch(e => {
      next('/error')
    })
  },
  beforeRouteUpdate (to, from, next) {
    getParent(to.params.id).then(result => {
      this.setData(result)
    }).catch(e => {
      next('/error')
    })
  },
  methods: {
    setData (data) {
      this.dataParent = data
    }
  },
  mounted () {
    if (this.dataParent) {
      getParent(this.$route.params.id).then(result => {
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
