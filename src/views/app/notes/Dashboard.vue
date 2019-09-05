<template>
  <div>
    <banner title="Carnet de notes" />
    <div class="tab-menu">
      <div @click="tab = 0" class="tab d-flex flex-column align-items-center mt-2 mr-5">
        <i class="fas fa-users my-2" style="font-size: 48px; color: #eee;"></i>
        <p class="font-weight-bold mb-2" style="color: #888;">Carnet de note par matière</p>
        <div v-show="tab === 0" style="width: 100px; height: 2px; background-color: blue;"></div>
      </div>
      <div @click="tab = 1" class="tab d-flex flex-column align-items-center mt-2">
        <i class="fas fa-chalkboard-teacher my-2" style="font-size: 48px; color: #eee;"></i>
        <p class="font-weight-bold mb-2" style="color: #888;">Carnet de note des moyennes</p>
        <div v-show="tab === 1" style="width: 100px; height: 2px; background-color: blue;"></div>
      </div>
    </div>
    <matieres v-if="tab === 0" />
    <moyennes v-if="tab === 1" />
  </div>
</template>
<style scoped>
.tab-menu {
  width: calc(100% + 120px);
  background-size: cover;
  position: relative;
  padding: 8px 40px;
  left: -60px;
  top: -45px;
  overflow: hidden;
  background-color: white;
  display: flex;
}
.tab {
  cursor: pointer;
}
</style>
<script>
import Banner from '@/components/Common/Banner'
import Matieres from './tabs/Matieres'
import Moyennes from './tabs/Moyennes'
import listeEmploi from '@/data/emploiDeTemps.js'
export default {
  components: { Banner, Matieres, Moyennes },
  data () {
    return {
      selectClasse: null,
      tab: 0
    }
  },
  computed: {
    classes () {
      const data = [{ value: null, text: 'Classe' }]
      listeEmploi.forEach(el => {
        const find = data.find(x => x.value === el.classe)
        if (!find && el.classe) { data.push({ value: el.classe, text: el.classe }) }
      })
      return data
    }
  }
}
</script>
