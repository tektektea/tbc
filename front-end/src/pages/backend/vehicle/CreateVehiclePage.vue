<template>
  <q-page>
    <p class="title">Vehicle </p>
    <br/>
    <q-form @submit="submit" @reset="reset" class="bg-white">
      <q-input v-model="localState.formData.name"
               outlined
               label="Name"
               :rules="[
                 value => !!value || 'Name is required'
               ]"
      />
      <q-input v-model="localState.formData.image_url"
               type="url"
               outlined
               label="Image url"
               :rules="[
                 value => !!value || 'URL is required'
               ]"
      />
      <q-input v-model="localState.formData.km_rate"
               type="number"
               outlined
               label="Rate per KM"
               :rules="[
                 value => !!value || 'KM rate is required'
               ]"
      />
      <q-input v-model="localState.formData.duty_rate"
               outlined
               label="Duty Rate"
               :rules="[
                 value => !!value || 'Duty Rate is required'
               ]"
      />
      <q-editor
        v-model="localState.formData.description"
        :dense="$q.screen.lt.md"
        :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['viewsource']
      ]"
        :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
      />
      <q-checkbox v-model="localState.formData.decorated" label="I like to display as feature images"/>
      <div class="flex q-gutter-sm q-my-md">
        <q-btn style="min-width: 120px" color="primary" type="submit" label="Save" rounded/>
        <q-btn style="min-width: 120px" color="negative" outline type="reset" label="Reset" rounded/>
      </div>

    </q-form>
  </q-page>
</template>
<script setup>
import {reactive} from "vue";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {api} from "boot/axios";

const q = useQuasar();
const router = useRouter();
const localState=reactive({
  formData:{
    name:'',
    image_url:'',
    km_rate:0,
    duty_rate:0,
    description:'',
    decorated:false
  }
})

const submit = (e) => {
  q.loading.show();
  api.post(`vehicle`, localState.formData)
    .then(res => {
      const {message} = res.data;
      q.notify({type: 'positive', message})
      setTimeout(()=>{
        router.replace({name:'vehicle:list'})
      },500)
    })
    .catch(err => q.notify({type: 'negative', message: err.response.data.message || err.toString()}))
    .finally(()=>q.loading.hide())
}
const reset = (e) => {
  Object.assign(localState.formData,{
    name:'',
    image_url:'',
    km_rate:0,
    duty_rate:0,
    description:'',
    decorated:false
  })
}
</script>
