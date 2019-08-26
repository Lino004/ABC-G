<template>
  <div>
    <div class="banner">
      <h1 class="font-weight-bold text-white">Liste des matières</h1>
    </div>
    <h2 class="text-center mt-2 font-weight-bold">Choisir un niveau académique...</h2>
    <b-row class="mt-5" align-h="center">
      <b-colxx md="3" class="mb-3" >
        <b-card class="rounded_sm h-100">
          <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <img src="@/assets/images/academic-level/maternelle.png" width="96" alt="placeholder" />
            <h5 class="text-center mt-2">Maternelle</h5>
            <div class="d-flex align-items-center">
              <img src="@/assets/images/tab-profil/image@2x1.png"  width="36" height="36" alt="placeholder"/>
              <p class="m-0">Ange Bally</p>
            </div>
          </div>
        </b-card>
      </b-colxx>
      <b-colxx md="3" class="mb-3" >
        <b-card class="rounded_sm h-100">
          <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <img src="@/assets/images/academic-level/primaire.png" width="96" alt="placeholder" />
            <h5 class="text-center mt-2">Primaire</h5>
            <div class="d-flex align-items-center">
              <img src="@/assets/images/tab-profil/image@2x1.png"  width="36" height="36" alt="placeholder"/>
              <p class="m-0">Ange Bally</p>
            </div>
          </div>
        </b-card>
      </b-colxx>
      <b-colxx md="3" class="mb-3" >
        <b-card class="rounded_sm h-100">
          <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <img src="@/assets/images/academic-level/secondaire.png" width="96" alt="placeholder" />
            <h5 class="text-center mt-2">Secondaire</h5>
            <div class="d-flex align-items-center">
              <img src="@/assets/images/tab-profil/image@2x1.png"  width="36" height="36" alt="placeholder"/>
              <p class="m-0">Ange Bally</p>
            </div>
          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
  
</template>

<style scoped>
  .banner {
    background-image: url(../../../assets/images/school-banner.png);
    width: calc(150% + 120px);
    background-size: cover;
    background-position: -200px center;
    position: relative;
    padding: 48px;
    left: -60px;
    top: -45px;
    background-color: black;
  }
</style>