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
            @click="quiz_test"
          >
            quiz_test
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
    <v-card class="w-100 mt-5">
      <v-toolbar color="teal">
        <v-toolbar-title>Menu</v-toolbar-title>
      </v-toolbar>

      <v-list light>
        <template v-for="(item, index) in items">
          <v-list-tile
            v-if="item.action"
            :key="item.title"
            :to="item.to"
          >
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider
            v-else-if="item.divider"
            :key="index"
          ></v-divider>

          <v-subheader
            v-else-if="item.header"
            :key="item.header"
          >
            {{ item.header }}
          </v-subheader>
        </template>
      </v-list>
    </v-card>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data () {
    return {
      items: [
        { header: '문제 풀기' },
        {
          action: 'info',
          title: '객관식',
          to: '/quiz'
        },
        { divider: true },
        { 
          header: '문제 관리'
        },
        {
          action: 'label',
          title: '_객관식_',
          to: '/manage'
        }
      ]
    }
  },
  methods: {
    getInfo: function () {
      // using JSONPlaceholder
      this.$http.get('http://127.0.0.1:3000/q1')
      .then((result) => {
        console.log('result',result.data)
      }).catch( error => {
        console.log('error',error)
      });
    },
    quiz_test: function() {
      const act = 'getQuizBundle'
      const obj = {
        act,
        'id':1 //시험 고유 번호
      }
      this.type = act
      // using JSONPlaceholder
      this.$http.post('/multiChose/test',obj)
      .then((result) => {
        console.log(result.data);
        this.quizItems = result.data.bundle
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

<style>
</style>