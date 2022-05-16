<template>
  <q-page>
    <h1 class="title">Upload Image</h1>
    <q-form @submit="upload" flat class="bg-white q-pa-md">
      <q-file accept="image/*" max-file-size="4048576" filled bottom-slots v-model="model" label="Upload Image">
        <template v-slot:before>
          <q-icon name="image" />
        </template>

        <template v-slot:hint>
          4md is Maximum size of image
        </template>
      </q-file>
      <q-checkbox v-model="gallery_image"
                  label="Do you want to display in gallery?"
      />
      <br/>
      <q-btn class="q-mt-md" type="submit" label="Upload" color="primary"  icon="send" />

    </q-form>
  </q-page>
</template>
<script setup>

import {ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const model=ref(null)
const gallery_image=ref(false)
const upload=()=>{
  q.loading.show();
  let data = new FormData();
  const config = {
    headers: {
      'enctype': 'multipart/form-data'
    }
  }
  data.append('gallery_image',gallery_image.value)
  data.append('attachment', model.value);
  api.post(`media`,data,config)
  .then(res=>{
    const {message} = res.data;
    q.notify({type:'positive',message})
    model.value = null;
  })
  .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
  .finally(()=>q.loading.hide())
}
</script>
