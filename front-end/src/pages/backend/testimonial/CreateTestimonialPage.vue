<template>
  <q-page>
    <p class="title">New testimony</p>
    <br/>
    <q-form @submit="submit" @reset="reset" class="column q-gutter-sm q-pa-md bg-white">

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.name"
        outlined
        :rules="[
          value => !!value || 'Name is required'
        ]"
        label="Name"/>

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.designation"
        outlined
        :rules="[
          value => !!value || 'Designation is required'
        ]"
        label="Designation"/>

      <q-input
        class="q-mt-sm"
        type="textarea"
        v-model="localState.formData.quote"
        outlined
        :rules="[
          value => !!value || 'Quote is required'
        ]"
        label="Quote"/>

      <q-input
        class="q-mt-sm"
        v-model="localState.formData.image_url"
        outlined
        :rules="[
          value => !!value || 'Image url is required'
        ]"
        label="Image Url"/>

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
    name:'',
    designation:'',
    quote:'',
    image_url:''
  }
})

const reset = () => {
  Object.assign(localState.formData,{
    name:'',
    designation:'',
    quote:'',
    image_url:''
    }
  )

}
const submit = (e) => {
  q.loading.show();
  api.post('testimony',localState.formData)
    .then(res=>{
      const {message} = res.data;
      e.target.reset();
      q.notify({type:'positive',message})
    })
    .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
    .finally(()=>q.loading.hide())
}
</script>
