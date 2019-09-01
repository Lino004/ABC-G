<template>
  <b-row>
    <b-colxx md="4" class="mb-3" v-for="(data, i) in dataTab" :key="i">
      <b-card class="rounded_sm">
        <b-media>
          <b-img slot="aside" :src="data.url" width="80" alt="placeholder"></b-img>
          <div>
            <b-row>
              <b-colxx class="text-left">
                <h5 class="font-weight-bold"> {{data.nom}} </h5>
              </b-colxx>
              <b-colxx xxs="2" class="text-right">
                <b-dropdown variant="" dropleft toggle-class="bg-transparent border-0 p-0" :no-caret="true">
                  <template slot="button-content">
                    <i class="simple-icon-options text-primary"></i>
                  </template>
                  <b-dropdown-item @click.prevent="goToDetails(data.id)"> <i class="simple-icon-eye text-primary mr-2"/> Details</b-dropdown-item>
                  <b-dropdown-item disabled> <i class="simple-icon-pencil text-primary mr-2"/> Editer</b-dropdown-item>
                  <b-dropdown-item disabled> <i class="simple-icon-trash text-primary mr-2"/> Supprimer</b-dropdown-item>
                </b-dropdown>
              </b-colxx>
            </b-row>
            <b-row>
              <b-colxx xxs="auto">
                <p class="text-muted mb-1">Contacts</p>
                <h6 class="font-weight-bold">
                  <p class="col-12 p-0 m-0 text-truncate">
                    <span>{{data.contacts}}</span>
                  </p>
                </h6>
              </b-colxx>
              <b-colxx xxs="auto">
                <p class="text-muted mb-1">Email</p>
                <h6 class="font-weight-bold"> {{data.email}} </h6>
              </b-colxx>
            </b-row>
            <b-row>
              <b-colxx xxs="8">
                <b-button disabled @click.prevent="goToDetails(data.id)" class="rounded-0" block variant="light">Details</b-button>
              </b-colxx>
            </b-row>
          </div>
        </b-media>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
export default {
  props: ['items', 'perPage', 'currentPage'],
  data () {
    return {}
  },
  watch: {},
  computed: {
    dataTab () {
      const a = this.perPage * this.currentPage
      return this.items.slice(a - this.perPage, a)
    }
  },
  methods: {
    goToDetails (id) {
      this.$router.push(`details-parent/${id}`)
    }
  }
}
</script>

<style>

</style>
