<template>
  <b-row>
    <b-colxx>
      <b-form>
        <b-form-group label-cols-sm="2" label="Email">
          <b-form-input
            v-model="info.email"
            @blur="infoValideEmail"
            placeholder="Ex : pierre@gmail.com"
            :state="info.stateEmail"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{info.msgInvalidEmail}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Téléphone 1">
          <b-form-input
            v-model="info.tel1"
            @blur="infoValideTel1"
            placeholder="Ex : +229 8972622"
            :state="info.stateTel1"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{info.msgInvalidTel1}}</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label-cols-sm="2" label="Téléphone 2">
          <b-form-input
            v-model="info.tel2"
            @blur="infoValideTel2"
            placeholder="Ex : +229 5271910"
            :state="info.stateTel2"
            class="rounded_sm"></b-form-input>
          <b-form-invalid-feedback>{{info.msgInvalidTel2}}</b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </b-colxx>
  </b-row>
</template>

<script>

export default {
  data () {
    return {
      info: {
        email: '',
        stateEmail: null,
        msgInvalidEmail: '',
        tel1: '',
        stateTel1: null,
        msgInvalidTel1: '',
        tel2: '',
        stateTel2: null,
        msgInvalidTel2: ''
      }
    }
  },
  computed: {},
  methods: {
    infoValideEmail () {
      if (this.info.email.length >= 1) {
        this.info.stateEmail = true
        this.info.msgInvalidEmail = ''
        this.validate()
      } else if (this.info.email.length > 0) {
        this.info.stateEmail = false
        this.info.msgInvalidEmail = 'Entrez au moins 3 caracteres'
      } else {
        this.info.stateEmail = false
        this.info.msgInvalidEmail = 'Auccune donnee rentree'
      }
    },
    infoValideTel1 () {
      if (this.info.tel1.length >= 1) {
        this.info.stateTel1 = true
        this.info.msgInvalidTel1 = ''
        this.validate()
      } else if (this.info.tel1.length > 0) {
        this.info.stateTel1 = false
        this.info.msgInvalidTel1 = 'Entrez au moins 3 caracteres'
      } else {
        this.info.stateTel1 = false
        this.info.msgInvalidTel1 = 'Auccune donnee rentree'
      }
    },
    infoValideTel2 () {
      if (this.info.tel2.length >= 1) {
        this.info.stateTel2 = true
        this.info.msgInvalidTel2 = ''
        this.validate()
      } else if (this.info.tel2.length > 0) {
        this.info.stateTel2 = false
        this.info.msgInvalidTel2 = 'Entrez au moins 3 caracteres'
      } else {
        this.info.stateTel2 = false
        this.info.msgInvalidTel2 = 'Auccune donnee rentree'
      }
    },
    validatePere () {
      if (this.info.stateEmail &&
          this.info.stateTel1 &&
          this.info.stateTel2) {
        return true
      }
      return false
    },
    validate () {
      if (this.validatePere()) {
        this.$emit('data', {
          email: this.info.email,
          tel1: this.info.tel1,
          tel2: this.info.tel2
        })
      } else {
        this.$emit('data', null)
      }
    }
  }
}
</script>

<style>

</style>
