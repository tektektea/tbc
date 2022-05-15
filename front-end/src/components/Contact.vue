<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8">
      <MyMap/>
    </div>
    <div class="col-xs-12 col-sm-4">
      <q-form @submit="submit" style="max-width: 380px" class="tcard q-pa-md q-ml-md">
        <q-input v-model="localState.formData.name"
                 outlined
                 label="Name"
                 :rules="[
                   value => !!value || 'Name is required'
                 ]"/>
        <q-input v-model="localState.formData.mobile"
                 outlined
                 label="Mobile"
                 mask="##########"
                 :rules="[
                   value => !!value || 'Mobile is required'
                 ]"/>
        <q-input v-model="localState.formData.email"
                 type="email"
                 outlined
                 label="Email"
                 :rules="[
                   value => !!value || 'Email is required'
                 ]"/>
        <q-input v-model="localState.formData.message"
                 type="textarea"
                 outlined
                 label="Message"
                 :rules="[
                   value => !!value || 'Message is required'
                 ]"/>
        <q-btn type="submit" style="min-width: 120px" color="primary" rounded label="Submit"/>
      </q-form>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
import MyMap from "components/MyMap.vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState=reactive({
  formData:{
    name:'',
    mobile:'',
    email:'',
    message:''
  }
})
const submit = (e) => {
  q.loading.show();
  api.post('public/contact-request',localState.formData)
    .then(res=>{
      const {message} = res.data;
      q.notify({type:'positive',message})
      Object.assign(localState.formData,{
        name:'',
        mobile:'',
        email:'',
        message:''
      })
      e?.target?.reset();

    })
    .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
    .finally(()=>q.loading.hide())
}
</script>
