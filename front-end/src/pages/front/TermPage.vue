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
import {useQuasar} from "quasar";

const q = useQuasar();
const localStore=reactive({
  content:''
})
onMounted(()=>{
  q.loading.show();
  api.get('public/web-resource/term')
    .then(res=>{
      const{data}=res.data
      localStore.content = data.content;
    })
    .finally(()=>q.loading.hide())
})
</script>
