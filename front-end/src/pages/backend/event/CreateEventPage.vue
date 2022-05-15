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
      <q-editor
        v-model="localState.formData.content"
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
