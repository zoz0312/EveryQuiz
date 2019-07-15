<template>
  <v-layout row wrap class="q-item-box bounceInRight animated">
    <v-flex xs12>
      <v-card color="blue lighten-5 darken-2" class="white--text">
        <v-card-title primary-title>
          {{ propsdata.question }}
        </v-card-title>
        <v-card-actions>
          <v-radio-group :v-model="'radio'" :mandatory="false">
            <div v-for="(q_val,idx) in propsdata.items" :key="idx" class="multi-contain shadow">
              <div class="q-input">
                <v-radio :label="q_val" :value="'-'+idx"></v-radio>
              </div>
            </div>
          </v-radio-group>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default{
  props: ['propsdata']
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
</style>
