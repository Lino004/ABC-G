<template>
<div>
  <b-row class="mb-3">
    <b-colxx xxs="6" lg="3"
      v-for="(stat, i) in statNbr"
      :key="i">
      <b-card class="rounded_sm">
        <b-row>
          <b-colxx xxs="2" class="my-auto" :class="stat.color"><i :class="stat.icon"></i></b-colxx>
          <b-colxx class="text-right">
            <p class="h4"> {{stat.title}} </p>
            <p class="h3"> {{stat.nbr}} </p>
          </b-colxx>
        </b-row>
      </b-card>
    </b-colxx>
  </b-row>
  <b-row class="mb-3">
    <b-colxx xxs="12" lg="6">
      <present/>
    </b-colxx>
    <b-colxx xxs="12" lg="6">
      <performance/>
    </b-colxx>
  </b-row>
  <b-row class="mb-3">
    <b-colxx xxs="12" lg="6">
      <calendrier/>
    </b-colxx>
    <b-colxx xxs="12" lg="6">
      <b-row class="mb-3">
        <b-colxx xxs="8">
          <stat-diff/>
        </b-colxx>
        <b-colxx xxs="4">
          <progression/>
        </b-colxx>
      </b-row>
      <b-row class="mb-3">
        <b-colxx>
          <b-card class="mb-4 rounded_sm" no-body>
            <div class="d-flex flex-row">
              <router-link to="?" class="d-flex">
                <div alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mt-3 mx-2 small" >SK</div>
              </router-link>
              <div class="d-flex flex-grow-1 min-width-zero">
                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div class="min-width-zero">
                    <router-link to="?" >
                      <h6 class="mb-1 card-subtitle truncate">Sarah Kortney</h6>
                    </router-link>
                    <p class="text-muted text-small mb-2">Tle</p>
                  </div>
                  <div class="ml-4 my-auto">
                    <h6 class="mb-0">Moyenne</h6>
                    <p class="h4">14,50</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right mr-4"><p class="h5">Meilleur Élève</p></div>
          </b-card>
        </b-colxx>
        <b-colxx>
          <b-card class="mb-4 rounded_sm" no-body>
            <div class="d-flex flex-row">
              <router-link to="?" class="d-flex">
                <div alt="Card image cap" class="align-self-center list-thumbnail-letters rounded-circle mt-3 mx-2 small" >SK</div>
              </router-link>
              <div class="d-flex flex-grow-1 min-width-zero">
                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div class="min-width-zero">
                    <router-link to="?" >
                      <h6 class="mb-1 card-subtitle truncate">Mille Knudsen</h6>
                    </router-link>
                    <p class="text-muted text-small mb-2">Prof de Math</p>
                  </div>
                  <div class="ml-4 my-auto">
                    <h6 class="mb-0">Points</h6>
                    <p class="h4">750</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right mr-4"><p class="h5">Meilleur Professeur</p></div>
          </b-card>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
  <b-row class="mb-3">
    <b-colxx xxs="12" lg="6">
      <messagerie/>
    </b-colxx>
    <b-colxx xxs="12" lg="6">
      <notifications/>
    </b-colxx>
  </b-row>
</div>
</template>

<script>
import Present from './Present'
import Performance from './Performance'
import Calendrier from './Calendrier'
import StatDiff from './StatDiff'
import Progression from './Progression'
import Messagerie from './Messagerie'
import Notifications from './Notifications'

export default {
  components: {
    Present,
    Performance,
    Calendrier,
    StatDiff,
    Progression,
    Messagerie,
    Notifications
  },
  data () {
    return {
      statNbr: [
        {
          color: 'text-primary',
          icon: 'iconsminds-student-male-female h1',
          title: 'Eleves',
          nbr: 5000
        },
        {
          color: 'text-warning',
          icon: 'iconsminds-male-female h1',
          title: 'Parents',
          nbr: 350
        },
        {
          color: 'text-danger',
          icon: 'iconsminds-business-man-woman h1',
          title: 'Enseignants',
          nbr: 300
        },
        {
          color: 'text-success',
          icon: 'iconsminds-conference h1',
          title: 'Total',
          nbr: 5650
        }
      ]
    }
  }
}
</script>
