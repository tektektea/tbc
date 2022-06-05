/<template>
  <q-page>
    <div class="container  q-mx-auto bg-white">
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
  title: 'Contact us',
  titleTemplate: title => `${title} - Contact us`,

  // meta tags
  meta: {
    description: { name: 'description', content: "Mobile : 918974626947 Email:tbccarrental@gmail.com" },
    keywords: { name: 'keywords', content: 'mizo car rental service, mizo car, tbc car rental' },
  }
}
const q = useQuasar();
const localStore=reactive({
  content:''
})

useMeta(()=>metaData)
onMounted(()=>{
  q.loading.show();
  api.get('public/web-resource/contact')
    .then(res=>{
      const{data}=res.data
      localStore.content = data.content;
    })
    .finally(()=>q.loading.hide())
})
</script>
