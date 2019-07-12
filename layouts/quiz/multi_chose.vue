<template>
  <transition-group name="quiz-multi">
    <v-layout row wrap v-for="(val,idx) in propsdata" :key="idx" class="q-item-box">
      <v-flex xs12>
        <v-card  color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            {{ propsdata[idx].question }}
          </v-card-title>
          <v-card-actions>
            <v-radio-group :v-model="'radio'+idx" :mandatory="false">
              <div v-for="(quizItem, idx2) in val.items" :key="quizItem" class="multi-contain shadow">
                <div class="q-input">
                  <v-radio :label="quizItem" :value="idx+'-'+idx2"></v-radio>
                </div>
              </div>
            </v-radio-group>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </transition-group>
</template>

<script>
export default{
  props: ['propsdata'],
  data () {
    return {
      radios: 'radio-1'
    }
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
</style>
