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
        @click="getQuiz"
      >
        Multi Chose Quiz
      </v-btn>
      <v-container fluid>
        <Question v-if="quizItems.length != 0" v-bind:propsdata="quizItems"></question>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Question from '../layouts/quiz/question';


export default {
  data(){
    return{
      quizItems: []
    }
  },
  methods: {
    getQuiz:  function () {
      const obj = {
        'act':'multi_chose',
        'id':1
      }
      // using JSONPlaceholder
      this.$http.post('/multiChose',obj)
      .then((result) => {
        console.log('result',result.data)
        this.quizItems = result.data.data
        console.log('quizItems',quizItems)
      }).catch( error => {
        console.log('error',error)
      });
    }
  },
  components: {
    // Logo,
    // VuetifyLogo
  },
  components: {
    Question: Question
  }
}
</script>