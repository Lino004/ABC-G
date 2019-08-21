<template>
  <b-row class="h-100">
    <div class="fixed-top"><span class="logo-single ml-3 mb-0 mt-3"/></div>
    <b-colxx md=11 class="mx-auto my-auto">
      <b-row class="h-100">
        <b-col md=6 lg=7 class="mx-auto my-auto">
          <b-img :src="imgConx" fluid-grow alt="Fluid-grow image"></b-img>
        </b-col>
        <b-col md=6 lg=5 class="mx-auto">
          <b-card class="h-100 shadow-lg rounded_sm">
            <b-row class="h-100" align-v="center">
              <b-col>
                <div class="form-side">
                  <div class="text-center">
                    <router-link tag="a" to="/"><span class="logo-single mb-5"/></router-link>
                    <h4 class="mb-5">{{ $t('user.title')}}</h4>
                  </div>
                  <b-form @submit.prevent="formSubmit">
                    <b-input-group class="mb-2">
                      <b-input-group-prepend class="no__border" is-text>
                        <i class="simple-icon-user small__icon"
                          :class="{
                            'text-danger': username.status === 'invalid',
                            'text-success': username.status === 'valid'
                          }"/>
                      </b-input-group-prepend>
                      <b-input
                        v-model="username.value"
                        class="no__border"
                        :class="{
                          'text-danger': username.status === 'invalid',
                          'text-success': username.status === 'valid'
                        }"
                        :placeholder="$t('user.username')"
                        @input="valideUsername">
                      </b-input>
                      <b-input-group-append class="no__border" is-text>
                        <i class="small__icon"
                          :class="{
                            'simple-icon-close text-danger': username.status === 'invalid',
                            'simple-icon-check text-success': username.status === 'valid'
                          }"/>
                      </b-input-group-append>
                    </b-input-group>
                    <div class="separator"></div>
                    <b-input-group class="mb-5">
                      <b-input-group-prepend class="no__border" is-text>
                        <i class="simple-icon-lock small__icon"
                          :class="{
                            'text-danger': password.status === 'invalid',
                            'text-success': password.status === 'valid'
                          }"/>
                      </b-input-group-prepend>
                      <b-input
                        v-model="password.value"
                        type="password"
                        class="no__border"
                        :class="{
                          'text-danger': password.status === 'invalid',
                          'text-success': password.status === 'valid'
                        }"
                        :placeholder="$t('user.password')"
                        @input="validePassword">
                      </b-input>
                      <b-input-group-append class="no__border" is-text>
                        <i class="small__icon"
                          :class="{
                            'simple-icon-close text-danger': password.status === 'invalid',
                            'simple-icon-check text-success': password.status === 'valid'
                          }"/>
                      </b-input-group-append>
                    </b-input-group>
                    <div class="d-flex justify-content-between align-items-center">
                      <router-link tag="a" to="/user/forgot-password">{{ $t('user.forgot-password-question')}}</router-link>
                      <b-button type="submit" variant="primary" class="btn-shadow" :disabled="processing">{{ $t('user.login-button')}}</b-button>
                    </div>
                  </b-form>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-colxx>
    <div class="fixed-bottom mb-2"><p class="text-center very__small">{{ $t('general.copyright')}}</p></div>
  </b-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      username: {
        value: '',
        status: ''
      },
      password: {
        value: '',
        status: ''
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'processing', 'loginError']),
    imgConx () {
      return require('@/assets/images/connexionABC.png')
    }
  },
  methods: {
    ...mapActions(['login']),
    formSubmit () {
      // this.email = 'demo@gogo.com'
      // this.password = 'gogo123'
      if (this.username.status === 'valid' && this.password.status === 'valid') {
        this.login({ email: this.username.value, password: this.password.value })
      } else {
        this.username.status = 'invalid'
        this.password.status = 'invalid'
        this.$notify('error', 'Champ manquant',
          'Verifier les informations saisie',
          { duration: 3000, permanent: false }
        )
      }
    },
    valideUsername () {
      if (this.username.value.length > 3) this.username.status = 'valid'
      else this.username.status = 'invalid'
    },
    validePassword () {
      if (this.password.value.length > 5) this.password.status = 'valid'
      else this.password.status = 'invalid'
    }
  },
  watch: {
    currentUser (val) {
      if (val && val.uid && val.uid.length > 0) {
        setTimeout(() => {
          this.$router.push('/')
        }, 500)
      }
    },
    loginError (val) {
      if (val != null) {
        this.$notify('error', 'Login Error', val, { duration: 3000, permanent: false })
      }
    }
  }
}
</script>
