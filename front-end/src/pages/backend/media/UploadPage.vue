<template>
  <q-page>
    <h1 class="title">Upload Image</h1>
    <q-card flat class="bg-white q-pa-md">
      <q-file accept="image/*" max-file-size="4048576" filled bottom-slots v-model="model" label="Upload Image">
        <template v-slot:before>
          <q-icon name="image" />
        </template>

        <template v-slot:hint>
          4md is Maximum size of image
        </template>

        <template v-slot:append>
          <q-btn label="Upload" color="primary"  icon="send" @click="upload" />
        </template>
      </q-file>
    </q-card>
  </q-page>
</template>
<script setup>

import {ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const model=ref(null)
const upload=()=>{
  q.loading.show();
  let data = new FormData();
  data.append('attachment', model.value);
  api.post(`media`,data)
  .then(res=>{
    const {message} = res.data;
    q.notify({type:'positive',message})
    model.value = null;
  })
  .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
  .finally(()=>q.loading.hide())
}
</script>
