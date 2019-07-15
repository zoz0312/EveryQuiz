<template>
  <transition-group name="quiz-multi">
    <v-layout row wrap v-for="(val,idx) in propsdata" :key="idx" class="q-item-box"
    transition="scale-transition">
      <multiChose :v-if="val.type === 'multi_chose'" 
        v-bind:propsdata="val"></multiChose>
      <!--
        Add After  
        <line :v-if="val.type === 'line'" v-bind:propsdata="val"></line> 
      -->
    </v-layout>
  </transition-group>
</template>

<script>
import multiChose from './multi_chose';

export default{
  props: ['propsdata'],
  components: {
    multiChose: multiChose
  }
}
</script>

<style>
</style>
