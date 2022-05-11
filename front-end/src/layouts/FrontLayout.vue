<template>
  <q-layout @scroll="onScroll" view="hHh lpR fFf">

    <q-header :elevated="position!==0" class="bg-white flex justify-center text-dark">
      <q-toolbar style="height: 70px" class="container">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          App name
        </q-toolbar-title>
        <q-btn color="primary" rounded outline label="Booking"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script setup>
import {ref} from "vue";

const position = ref(0);
const onScroll=detail=>{
  position.value = detail.position;
}
</script>
