<template>
  <v-layout column wrap>
    <v-data-table
      :headers="headers"
      :items="propsdata"
      class="elevation-1 mb-3 fadeIn animated"
    >
      <template v-slot:items="propsdata">
        <tr @click="showDetail">
          <td>{{ propsdata.item.question }}</td>
          <td>{{ propsdata.item.count }}</td>
        </tr>
      </template>
    </v-data-table>
    <multiChose v-if="detail.type === 'multi_chose'" v-bind:propsdata="detail"></multiChose>
  </v-layout>
</template>

<script>
import multiChose from './multi_chose';
export default{
  data () {
      return {
        headers: [
          { text: '문제', value: 'question', align: 'center' },
          { text: '문항수', value: 'count', align: 'center', sortable: false }
        ],
        detail: {}
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
        this.detail = result.data.data
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
