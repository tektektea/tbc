<template>
  <q-page>
    <p class="title">New testimony</p>
    <q-form class="column q-gutter-sm">
      <q-input
        v-model="localState.formData.name"
        outlined
        label="Name"/>
    </q-form>
  </q-page>
</template>
<script setup>
import {reactive} from "vue";

const localState=reactive({
  formData:{
    name:'',
    designation:'',
    qoute:'',
    profile_url:''
  }
})
</script>
