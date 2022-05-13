<template>
  <q-page>
    <p class="title">New Event</p>
    <br/>
    <q-form @submit="submit" @reset="reset" class="column q-gutter-sm q-pa-md bg-white">

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.title"
        outlined
        :rules="[
          value => !!value || 'Title is required'
        ]"
        label="Title"/>

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.description"
        outlined
        :rules="[
          value => !!value || 'Description is required'
        ]"
        label="Description"/>

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.thumbnail_path"
        outlined
        :rules="[
          value => !!value || 'Image url is required'
        ]"
        label="Thumbnail Url"/>
      <q-input
        class="q-mt-sm"
        type="textarea"
        v-model="localState.formData.content"
        outlined
        :rules="[
          value => !!value || 'Quote is required'
        ]"
        label="Content"/>

      <q-separator class="full-width q-my-sm"/>
      <div class="q-gutter-sm">
        <q-btn style="min-width: 120px" type="submit" label="save" color="primary" rounded/>
        <q-btn style="min-width: 120px"  type="reset" label="cancel" color="negative" outline rounded/>
      </div>

    </q-form>
  </q-page>
</template>
<script setup>
import {reactive} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState=reactive({
  formData:{
    title:'',
    description:'',
    content:'',
    thumbnail_path:''
  }
})

const reset = () => {
  Object.assign(localState.formData,{
    title:'',
    description:'',
    content:'',
    thumbnail_path:''
    }
  )

}
const submit = (e) => {
  q.loading.show();
  api.post('event',localState.formData)
    .then(res=>{
      const {message} = res.data;
      e.target.reset();
      q.notify({type:'positive',message})
    })
    .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
    .finally(()=>q.loading.hide())
}
</script>
