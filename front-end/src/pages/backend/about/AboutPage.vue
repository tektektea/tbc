<template>
  <q-page>
    <p class="title">About us</p>
    <q-btn :to="{name:'about:edit'}" class="absolute-top-right q-ma-md" v-if="content"  icon="edit" round flat/>

    <br/>
    <div v-if="content" class="q-pa-md bg-white" v-html="content">

    </div>
  </q-page>
</template>
<script setup>

import {onMounted,ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const content=ref('')
onMounted(()=>{
  q.loading.show()
  api.get(`web-resource/about`)
    .then(res=>{
      const {data} = res.data;
      content.value = data.content;
    })
    .finally(()=>q.loading.hide())
})
</script>
