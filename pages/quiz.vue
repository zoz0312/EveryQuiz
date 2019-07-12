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
        <multiChose v-if="quizItems.length != 0" v-bind:propsdata="quizItems"></multiChose>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import multiChose from '../layouts/quiz/multi_chose';

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
    // Logo,
    // VuetifyLogo
  },
  components: {
    multiChose: multiChose
  }
}
</script>