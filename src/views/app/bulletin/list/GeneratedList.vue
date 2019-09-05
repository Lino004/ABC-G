<template>
  <div class="bg-white">
    <b-table
      ref="selectableTable"
      head-variant="dark"
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
          <!-- <b-img height="40" :src="data.value"></b-img> -->
          <img src="/bulletin/report.svg"  height="40" :alt="data.value">
        </div>
      </template>

      <template slot="action" slot-scope="data">
        <div class="text-center">
          <b-dropdown variant="" dropleft toggle-class="bg-transparent border-0" :no-caret="true">
            <template slot="button-content">
              <i class="simple-icon-options-vertical text-primary"></i>
            </template>
            <b-dropdown-item @click.prevent="currentRow = data.item" v-b-modal.preview-modal>
              <i class="simple-icon-eye text-primary mr-2"/> Details
            </b-dropdown-item>
            <b-dropdown-item disabled> <i class="simple-icon-trash text-primary mr-2"/> Supprimer</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
    </b-table>
    <b-modal v-if="currentRow" @ok="print(currentRow)" @cancel="download(currentRow)" id="preview-modal" title="Aperçu du bulletin" >
      <div class="d-flex justify-content-center">
        <!-- <b-img height="40" :src="data.value"></b-img> -->
        <img src="/bulletin/report.svg"  height="240" alt="aperçu du bulletion">
      </div>
      <template v-slot:modal-ok>
        <p class="m-0">Imprimer</p>
      </template>
      <template v-slot:modal-cancel>
        <p class="m-0">Exporter</p>
      </template>

    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['items', 'fields', 'perPage', 'currentPage'],
  data () {
    return {
      selected: [],
      currentRow: null
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
    download (data) {
      console.log('download', data)
    },
    print (data) {
      console.log('print', data)
    }
  }
}
</script>

<style>

</style>
