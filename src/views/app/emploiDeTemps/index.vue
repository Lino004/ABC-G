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
              <b-form-select
                class="rounded_sm shadow-sm"
                v-model="selectClasse"
                :options="classes"
                :disabled="(classes.length <= 1)"
              ></b-form-select>
            </b-colxx>
            <b-colxx md="3">
              <b-form-select
                class="rounded_sm shadow-sm"
                v-model="selectSection"
                :options="sections"
                :disabled="(sections.length <= 1)"
              ></b-form-select>
            </b-colxx>
            <b-colxx md="3">
              <b-form-select
                class="rounded_sm shadow-sm"
                v-model="selectSerie"
                :options="series"
                :disabled="(series.length <= 1)"
              ></b-form-select>
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
  <div v-if="selectClasse || selectSection || selectSerie">
    <b-row class="my-3">
      <b-colxx class="p-0">
        <b-row class="h-100" align-v="center">
          <b-colxx class="text-center">
            1/{{list.length}}
          </b-colxx>
        </b-row>
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
    <b-row v-for="(plan, i) in list[0].planning" :key="i">
      <b-colxx
        v-for="(p, j) in plan"
        :key="j"
        class="p-0"
      >
        <b-card
          class="shadow-none border_planning p-3"
          :class="j === 'autre' ? 'border-0 text-right' : 'text-center'"
          style="height: 80px"
          no-body
          :bg-variant="j === 'autre' ? 'primary' : ''"
        >
          <div v-if="p.cours">
            <p class="mb-0">{{p.cours}}</p>
            <p class="mb-0">{{p.debut}} à {{p.fin}}</p>
            <b-img height="20" :src="p.url"></b-img> <span class="">{{p.prof}}</span>
          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
  <div v-else class="m-5 text-center font-weight-bold h4"> Choisissez un classe ...</div>
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
      if (this.selectSection) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.classe)
          if (!find && el.classe) data.push({ value: el.classe, text: el.classe })
        })
      }
      if (this.selectSerie) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.classe)
          if (!find && el.classe) data.push({ value: el.classe, text: el.classe })
        })
      }
      if (!this.selectSection && !this.selectSerie) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.classe)
          if (!find && el.classe) data.push({ value: el.classe, text: el.classe })
        })
      }
      return data
    },
    sections () {
      const data = [{ value: null, text: 'Section' }]
      if (this.selectClasse) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.section)
          if (!find && el.section) data.push({ value: el.section, text: el.section })
        })
      }
      if (this.selectSerie) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.section)
          if (!find && el.section) data.push({ value: el.section, text: el.section })
        })
      }
      if (!this.selectClasse && !this.selectSerie) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.section)
          if (!find && el.section) data.push({ value: el.section, text: el.section })
        })
      }
      return data
    },
    series () {
      const data = [{ value: null, text: 'Serie' }]
      if (this.selectClasse) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.serie)
          if (!find && el.serie) data.push({ value: el.serie, text: el.serie })
        })
      }
      if (this.selectSection) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.serie)
          if (!find && el.serie) data.push({ value: el.serie, text: el.serie })
        })
      }
      if (!this.selectClasse && !this.selectSection) {
        this.list.forEach(el => {
          const find = data.find(x => x.value === el.serie)
          if (!find && el.serie) data.push({ value: el.serie, text: el.serie })
        })
      }
      return data
    },
    list () {
      let data = this.items
      if (this.selectClasse) data = data.filter(el => el.classe === this.selectClasse)
      if (this.selectSerie) data = data.filter(el => el.serie === this.selectSerie)
      if (this.selectSection) data = data.filter(el => el.section === this.selectSection)
      return data
    }
  },
  methods: {}
}
</script>
