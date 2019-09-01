<template>
  <b-card class="present rounded_sm mb-3">
    <b-row>
      <b-colxx>
        <h6>126 Messages</h6>
      </b-colxx>
      <b-colxx>
        <b-row align-h="end" align-v="center">
          <b-colxx xxs="4">
            <v-date-picker
              mode="single"
              v-model="selectedValueSingle"
              :input-props="{ class:'inputDate' }"
            ></v-date-picker>
          </b-colxx>
          <b-colxx xxs="1"><div class=""><i class="simple-icon-arrow-down"></i></div></b-colxx>
        </b-row>
      </b-colxx>
    </b-row>
    <b-row  align-v="center">
      <b-colxx class="text-center">
        <div><i class="simple-icon-microphone display-4 text-primary"/></div>
        <div class="h4">Vocal</div>
        <div class="h4">50</div>
      </b-colxx>
      <b-colxx class="text-center">
        <div><i class="simple-icon-bubble display-4 text-warning"/></div>
        <div class="h4">SMS</div>
        <div class="h4">56</div>
      </b-colxx>
      <b-colxx class="text-center">
        <div><i class="simple-icon-phone display-4 text-success"/></div>
        <div class="h4">Whatsapp</div>
        <div class="h4">20</div>
      </b-colxx>
    </b-row>
  </b-card>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      selectedValueSingle: new Date()
    }
  }
}
</script>

<style>

</style>
