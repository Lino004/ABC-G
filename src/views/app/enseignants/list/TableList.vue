<template>
  <div class="bg-white">
    <b-table
      ref="selectableTable"
      selectable
      select-mode="multi"
      selected-variant=""
      :fields="fields"
      :items="items"
      striped
      @row-selected="onRowSelected"
      tbody-tr-class="my-auto"
      :per-page="perPage"
      :current-page="currentPage"
      hover>

      <template slot="HEAD[select]">
        <div class="text-center">
          <b-button class="p-0 bg-transparent border-0" @click="actionsRows">
            <i class="simple-icon-check rounded __icon"
              :class="{
                'bg-primary text-white': selected.length,
                'text-primary': !selected.length
              }"></i>
          </b-button>
        </div>
      </template>

      <template slot="HEAD[action]" slot-scope="data">
        <div class="text-center">
          {{data.label}}
        </div>
      </template>

      <template slot="select" slot-scope="{ rowSelected }">
        <template>
          <div aria-hidden="true" class="text-center">
            <i class="simple-icon-check rounded __icon" :class="{'bg-primary': rowSelected}"></i>
          </div>
        </template>
      </template>

      <template slot="url" slot-scope="data">
        <div class="text-center">
          <b-img height="40" :src="data.value" alt="Rounded image"></b-img>
        </div>
      </template>

      <template slot="classes" slot-scope="data">
        <p class="col-5 p-0 m-0 text-truncate">
          <span v-for="(cl, i) in data.value" :key="i">
            {{cl.replace(/-/gi, ' ')}},
          </span>
        </p>
      </template>

      <template slot="matiere" slot-scope="data">
        <p class="col-5 p-0 m-0 text-truncate">
          <span v-for="(mt, i) in data.value" :key="i">
            {{mt.replace(/-/gi, ' ')}},
          </span>
        </p>
      </template>

      <template slot="action" slot-scope="data">
        <div class="text-center">
          <b-dropdown variant="" dropleft toggle-class="bg-transparent border-0" :no-caret="true">
            <template slot="button-content">
              <i class="simple-icon-options-vertical text-primary"></i>
            </template>
            <b-dropdown-item disabled @click.prevent="goToDetails(data.item.id)">
              <i class="simple-icon-eye text-primary mr-2"/> Details
            </b-dropdown-item>
            <b-dropdown-item disabled> <i class="simple-icon-pencil text-primary mr-2"/> Editer</b-dropdown-item>
            <b-dropdown-item disabled> <i class="simple-icon-trash text-primary mr-2"/> Supprimer</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  props: ['items', 'fields', 'perPage', 'currentPage'],
  data () {
    return {
      selected: []
    }
  },
  watch: {
    selected (val) {
      this.$emit('selected', val)
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  methods: {
    onRowSelected (items) {
      this.selected = items
    },
    actionsRows () {
      if (this.selected.length) this.clearSelected()
      else this.selectAllRows()
    },
    selectAllRows () {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    },
    goToDetails (id) {
      this.$router.push(`details-eleve/${id}`)
    }
  }
}
</script>

<style>

</style>
