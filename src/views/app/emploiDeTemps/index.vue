<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.emploi-de-temps')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx>
      <b-row align-h="between">
        <b-colxx>
          <b-row class="h-100" align-v="center">
            <b-colxx md="3">
              <b-form-select class="rounded_sm shadow-sm" v-model="selectClasse" :options="classes"></b-form-select>
            </b-colxx>
          </b-row>
        </b-colxx>
        <b-colxx md="8" lg="6" class="text-right text-center">
          <b-row class="h-100" align-v="center" align-h="end">
            <b-colxx md="3">
              <b-button
                class="px-1"
                block variant="primary">
                Ajouter <i class="simple-icon-plus"/>
              </b-button>
            </b-colxx>
            <b-colxx md="3"><b-button class="px-1" block variant="primary">Exporter <i class="iconsminds-right-1"/></b-button></b-colxx>
          </b-row>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
  <b-row class="my-3">
    <b-colxx class="p-0">
    </b-colxx>
    <b-colxx
      v-for="(j, i) in jours"
      :key="i"
      class="p-0"
    >
      <b-card
        class="shadow-none text-center"
        :bg-variant=" j === 'Dimanche' ? 'primary' : ''"
      >
        {{j}}
      </b-card>
    </b-colxx>
  </b-row>
  <b-row v-for="(plan, i) in planning" :key="i">
    <b-colxx
      v-for="(p, j) in plan"
      :key="j"
      class="p-0"
    >
      <b-card
        class="shadow-none border_planning p-3"
        :class="j === 'heure' ? 'border_planning_very_sm text-right' : 'text-center'"
        style="height: 80px"
        no-body
        :bg-variant="j === 'heure' ? 'primary' : ''"
      >
        <div v-if="j === 'heure'">
          <p
            v-for="(m, index) in p.split(' ')"
            :key="index"
            class="mb-0"
          >{{m}}</p>
        </div>
        <div v-else>
          <p class="mb-0">{{p}}</p>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</div>
</template>

<script>
import listeEmploi from '@/data/emploiDeTemps.js'

export default {
  components: {},
  data () {
    return {
      selectClasse: null,
      selectSerie: null,
      selectSection: null,
      items: listeEmploi,
      jours: [
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
        'Dimanche'
      ],
      planning: [
        {
          heure: '08h00 à 10h00',
          lun: 'Français',
          mar: 'Histoire-géo',
          mer: 'Anglais',
          jeu: '',
          ven: '',
          sam: '',
          dim: ''
        },
        {
          heure: '10h00 à 10h15',
          lun: 'Récréation',
          mar: 'Récréation',
          mer: 'Récréation',
          jeu: 'Récréation',
          ven: 'Récréation',
          sam: 'Récréation',
          dim: ''
        },
        {
          heure: '10h00 à 12h00',
          lun: 'Français',
          mar: 'Français',
          mer: 'Français',
          jeu: 'Français',
          ven: 'Français',
          sam: 'Français',
          dim: ''
        },
        {
          heure: '12h00 à 15h00',
          lun: 'Pause',
          mar: 'Pause',
          mer: 'Pause',
          jeu: 'Pause',
          ven: 'Pause',
          sam: 'Pause',
          dim: ''
        },
        {
          heure: '15h00 à 17h00',
          lun: 'Français',
          mar: 'Français',
          mer: 'Français',
          jeu: 'Français',
          ven: 'Français',
          sam: 'Français',
          dim: ''
        }
      ]
    }
  },
  computed: {
    classes () {
      const data = [{ value: null, text: 'Classe' }]
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.classe)
        if (!find) data.push({ value: el.classe, text: el.classe })
      })
      return data
    },
    sections () {
      const data = [{ value: null, text: 'Section' }]
      if (this.selectClasse) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.section)
          if (!find) data.push({ value: el.section, text: el.section })
        })
      }
      this.items.forEach(el => {
        const find = data.find(x => x.value === el.section)
        if (!find) data.push({ value: el.section, text: el.section })
      })
      return data
    },
    list () {
      return this.items
    }
  },
  methods: {}
}
</script>
