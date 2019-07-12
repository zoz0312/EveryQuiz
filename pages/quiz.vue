<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <v-btn
        color="primary"
        flat
        nuxt
        @click="getQuizBundle"
      >
        Multi Chose Quiz
      </v-btn>
      <v-container fluid grid-list-lg>
        <Bundle v-if="quizItems.length != 0" v-bind:propsdata="quizItems"></Bundle>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import Bundle from '../layouts/quiz/bundle';

export default {
  data(){
    return{
      quizItems: [],
      type: '',
      ans: []
    }
  },
  methods: {
    getQuizBundle: function() {
      const act = 'getQuizBundle'
      const obj = {
        act,
        'id':1 //시험 고유 번호
      }
      this.type = act
      // using JSONPlaceholder
      this.$http.post('/quizBundle',obj)
      .then((result) => {
        console.log(result.data);
        this.quizItems = result.data.bundle
      }).catch( error => {
        console.log('error',error)
      });
    },
    checkAnswer: function() {
      const act = 'checkAnswer'
      const obj = {
        type,
        act
      }
      this.$http.post('/chkAns',obj)
      .then((result) => {
        //success
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