<template>
  <div>
    <banner title="Ajouter une classe" />
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between w-100" style=";">
        <div class="d-flex">
          <div class="mx-2">
            <label for="">Classes</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
          <div class="mx-2">
            <label for="">Série</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
          <div class="mx-2">
            <label for="">Section</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
        </div>
        <div class="mx24">
          <label for="">Choisir un professeur principal</label>
          <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
        </div>
      </div>
      <p class="font-weight-bold mx-2 my-5">Ajouter des matières</p>
      <div class="d-flex align-items-center">
        <div class="d-flex">
          <div class="mx-2">
            <label for="">Matieres</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
          <div class="mx-2">
            <label for="">Coefficient</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
          <div class="mx-2">
            <label for="">Professeur</label>
            <b-form-select v-model="selectedClass"  :options="classes"></b-form-select>
          </div>
        </div>
        <div class="mx-4">
          <b-button class="font-weight-bold">Ajouter</b-button>
        </div>
      </div>
      <div class="mx-2 my-5 p-4 bg-white rounded-lg border-dark w-100">
        <b-row class="align-items-stretch">
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
                <img slot="aside" :src="data.icon" width="80" alt="placeholder"/>
                <h5>{{data.title}}</h5>
                <div class="d-flex align-items-center">
                  <img src="@/assets/images/tab-profil/image@2x1.png" width="36" height="36" alt="placeholder" />
                  <p class="m-0">Ange Bally</p>
                </div>
              </div>
            </b-media>
          </b-card>
        </b-colxx>
        </b-row>
      </div>
    </div>
  </div>
  
</template>
<style scoped>
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
import listeMatieres from '@/data/listeMatieres'
import Banner from "@/components/Common/Banner"
export default {
  components: { Banner },
  data() {
    return {
      selectedClass: null,
      items: listeMatieres,
      classes: [
        {value: "terminale-s1", text: "Terminal S-1"}
      ]
    }
  }
}
</script>