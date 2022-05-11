<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8">
      <MyMap/>
    </div>
    <div class="col-xs-12 col-sm-4">
      <q-form style="max-width: 380px" class="tcard q-pa-md q-ml-md">
        <q-input v-model="localState.formData.name"
                 outlined
                 label="Name"
                 :rules="[
                   value => !!value || 'Name is required'
                 ]"/>
        <q-input v-model="localState.formData.mobile"
                 outlined
                 label="Mobile"
                 :rules="[
                   value => !!value || 'Mobile is required'
                 ]"/>
        <q-input v-model="localState.formData.message"
                 type="textarea"
                 outlined
                 label="Mobile"
                 :rules="[
                   value => !!value || 'Content is required'
                 ]"/>
        <q-btn style="min-width: 120px" color="primary" rounded label="Submit"/>
      </q-form>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue";
import MyMap from "components/MyMap.vue";
export default {
  components: {MyMap},
  setup(props){
    const localState=reactive({
      formData:{
        name:'',
        mobile:'',
        message:''
      }
    })
    return{
      localState
    }
  }
}
</script>
