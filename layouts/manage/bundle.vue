<template>
  <transition name="quiz-multi">
    <v-data-table
      :headers="headers"
      :items="propsdata"
      class="elevation-1"
    >
      <template v-slot:items="propsdata">
        <tr @click="showDetail">
          <td>{{ propsdata.item.question }}</td>
          <td>{{ propsdata.item.count }}</td>
        </tr>
      </template>
    </v-data-table>
  </transition>
</template>

<script>
import multiChose from './multi_chose';
export default{
  data () {
      return {
        headers: [
          { text: '문제', value: 'question', align: 'center' },
          { text: '문항수', value: 'count', align: 'center', sortable: false }
        ]
      }
  },
  methods: {
    showDetail: function() {
      const act = 'multi_chose'
      const obj = {
        act,
        'id':1 //시험 고유 번호
      }
      // using JSONPlaceholder
      this.$http.post('/multiChose/detail',obj)
      .then((result) => {
        console.log(result.data.data);
        this.quizItems = result.data.data
      }).catch( error => {
        console.log('error',error)
      });
    }
  },
  props: ['propsdata'],
  components: {
    multiChose: multiChose
  }
}
</script>

<style>
</style>
