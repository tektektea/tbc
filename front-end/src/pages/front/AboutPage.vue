/<template>
<q-page>
  <div class="container bg-white">
    <div v-html="localStore.content"/>

  </div>
</q-page>
</template>
<script setup>

import {onMounted, reactive} from "vue";
import {api} from "boot/axios";
import {useMeta, useQuasar} from "quasar";

const metaData = {
  // sets document title
  title: 'About us',
  titleTemplate: title => `${title} - About us`,

  // meta tags
  meta: {
    description: { name: 'description', content: "Mizoram chhung a car rental service rinthlak leh changtlung ber te zing ami kan ni e" },
    keywords: { name: 'keywords', content: 'tbc car rental' },
  }
}
const q = useQuasar();
const localStore=reactive({
  content:''
})
useMeta(()=> metaData)
onMounted(()=>{
  q.loading.show();
  api.get('public/web-resource/about')
    .then(res=>{
      const{data}=res.data
      localStore.content = data.content;
    })
    .finally(()=>q.loading.hide())
})
</script>
