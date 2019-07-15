<template>
  <v-layout>
    <v-flex text-xs-center>
      <div class="headline text-xs-center pa-5">
        Management Quiz
      </div>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5 d-inline-block"
      >
      <v-container>
        <v-btn color="primary" @click="getQuizBundle">
          Multi Chose Quiz
        </v-btn>
        <Bundle v-bind:propsdata="quizItems"></Bundle>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

import Bundle from '../layouts/manage/bundle';

export default {
  data(){
    return{
      quizItems: []
    }
  },
  methods: {
    getQuizBundle: function() {
      const act = 'multi_chose'
      const obj = {
        act,
        'id':1 //시험 고유 번호
      }
      // using JSONPlaceholder
      this.$http.post('/multiChose/get',obj)
      .then((result) => {
        console.log(result.data.data);
        this.quizItems = result.data.data
      }).catch( error => {
        console.log('error',error)
      });
    }
  },
  components: {
    Bundle: Bundle
  }
}
</script>
<style>

</style>