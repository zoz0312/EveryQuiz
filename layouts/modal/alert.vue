<template>
  <v-layout row justify-center>
    <v-dialog v-model="propsdata" persistent max-width="290">
      <v-alert
        :value="true"
        type="success"
      >
        삭제되었습니다.
      </v-alert>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ['propsdata']
}
</script>