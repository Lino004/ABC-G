<template>
  <b-row class="align-items-stretch">
    <b-colxx md="3" class="mb-3" >
      <b-card class="rounded_sm h-100">
        <div class="card-content">
          <img src="@/assets/images/plus.svg" width="64" alt="placeholder" />
          <h5 class="text-center mt-4">Ajouter une matière</h5>
        </div>
      </b-card>
    </b-colxx>
    <b-colxx md="3" class="mb-3" v-for="(data, i) in items" :key="i">
      <b-card class="rounded_sm">
        <b-media>
          <b-row align-h="end">
            <b-colxx xxs="2" class="text-right">
              <b-dropdown variant="" dropleft toggle-class="bg-transparent border-0 p-0" :no-caret="true">
                <template slot="button-content">
                  <i class="simple-icon-options text-primary"></i>
                </template>
                <b-dropdown-item @click.prevent="goToDetails(data.id)"> <i class="simple-icon-eye text-primary mr-2"/> Details</b-dropdown-item>
                <b-dropdown-item href="#"> <i class="simple-icon-pencil text-primary mr-2"/> Editer</b-dropdown-item>
                <b-dropdown-item href="#"> <i class="simple-icon-trash text-primary mr-2"/> Supprimer</b-dropdown-item>
              </b-dropdown>
            </b-colxx>
          </b-row>
          <div class="card-content">
            <img slot="aside" src="@/assets/images/class.svg" width="72" alt="placeholder" />
            <h5 class="mt-3">{{data.nom}}</h5>
            <div class="d-flex align-items-center">
              <img src="@/assets/images/tab-profil/image@2x1.png" width="36" height="36" alt="placeholder" />
              <p class="m-0">{{data.eleves}} élèves</p>
            </div>
          </div>
        </b-media>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<style lang="css">
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

</style>
<script>
export default {
  props: ['items'],
  data () {
    return {}
  },
  watch: {},

  methods: {
    goToDetails (id) {
      this.$router.push(`details-eleve/${id}`)
    }
  }
}
</script>

<style>

</style>
