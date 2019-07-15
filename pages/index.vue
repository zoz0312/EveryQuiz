<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        Logo...
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to EveryQuiz
        </v-card-title>
        <v-btn
            color="primary"
            flat
            nuxt
            to="/quiz"
          >
            Multi Chose Quiz
          </v-btn>
        <v-card-text>
          <button v-on:click="getInfo">GET INFO</button>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="/q1"
              target="_blank"
            >
              documentation
            </a>.
          </p>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  methods: {
    getInfo: function () {
      // using JSONPlaceholder
      this.$http.get('http://127.0.0.1:3000/q1')
      .then((result) => {
        console.log('result',result.data)
      }).catch( error => {
        console.log('error',error)
      });
    }
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
