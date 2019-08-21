<template>
  <v-layout column wrap class="q-item-box">
    <v-flex xs12>
      <v-card-title class="q-title">
        <v-text-field
          label="문제 제목"
          outlined
          v-model="q_list.question"
        ></v-text-field>
      </v-card-title>
      <v-flex v-for="(q_val,idx) in q_list.items" :key="idx" class="multi-contain shadow mb-5">
        <v-card color="#26c6da" class="white--text pt-1 bounceInRight animated">
          <v-card-actions>
            <v-text-field :label="'문항'+(idx+1)" :value="q_val" v-model="q_list.items[idx]"></v-text-field>
            <v-icon class="icon-del" @click="delItem(idx)">delete</v-icon>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-flex>
    <v-btn color="#26c6da" class="btn-add bounceInRight animated" @click="addItem">문항 추가하기<v-icon>exposure_plus_1</v-icon></v-btn>
    <v-btn color="#4caf50" class="btn-add bounceInRight animated" @click="applyItem">적용하기</v-btn>
    <Alert v-bind:propsdata="q_alert"></Alert>
  </v-layout>
</template>

<script>
import Alert from '../modal/alert'

export default{
  props: ['propsdata'],
  data: function () {
    return {
      q_list: this.propsdata,
      q_alert: false
    }
  },
  methods: {
    addItem: function() {
      this.q_list.items.push('')
    },
    delItem: function( item_idx ) {
      this.q_list.items.splice(item_idx,1)
      this.q_alert = true
      if( this.q_alert ){
        setTimeout(()=>{
          this.q_alert = false;
        }, 800);
      }
    },
    applyItem: function() {
      const act = 'multi_chose'
      const obj = {
        'question':this.q_list.question,
        'items':this.q_list.items, 
      }
      
      // using JSONPlaceholder
      this.$http.post('/multiChose/save',obj)
      .then((result) => {
        console.log(result.data.result)
      }).catch( error => {
        console.log('error',error)
      });
    }
  },
  components:{
    Alert: Alert
  }
}
</script>

<style>
.multi-contain {
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  padding: 0 0.9rem;
  margin: 0.5rem 0;
  /* background: white; */
  border-radius: 5px;
  text-align: left;
}
.q-title {
  font-size: 1.5rem;
}
.q-item-box {
  margin-bottom: 1rem !important;
}
.q-input,
.q-text {
  display: inline-block;
  /* color: #333; */
  vertical-align: middle;
}
.q-input input {
  width: 20px;
  height: 20px;
  margin: 0;
  vertical-align: middle;
}
.q-text {
  font-size: 1.2rem;
}
.icon-del {
  color: #FFFFFF;
  cursor: pointer;
}
.icon-del:hover {
  color: #F44336;
}
.btn-add {
  margin: 6px 12px;
}
</style>
