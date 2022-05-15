<template>
  <q-page>
    <p class="title">Edit About us</p>
    <br/>
    <div class="q-pa-md q-gutter-sm">
      <q-editor
        v-model="editor"
        :dense="$q.screen.lt.md"
        :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
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
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
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
      <q-btn @click="submit" color="primary" label="Update"/>
    </div>

  </q-page>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";

const q = useQuasar();
const router = useRouter();
const editor=ref('')

const submit = (e) => {
  q.loading.show();
  api.put(`web-resource/about`,{content:editor.value})
    .then(res=>{
      const {message} = res.data;
      q.notify({type: 'positive', message});
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}
onMounted(()=>{
  q.loading.show()
  api.get(`web-resource/about`)
    .then(res=>{
      const {data} = res.data;
      editor.value = data.content;
    })
    .finally(()=>q.loading.hide())
})

</script>
