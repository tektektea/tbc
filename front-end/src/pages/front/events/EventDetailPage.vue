<template>
  <q-page class="flex justify-center">
    <div class="container">
      <p class="text-lg text-dark">{{localState.data?.title || 'No title'}}</p>
      <div class="q-my-md tcard">
        <div v-html="localState.data?.content"/>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import {useRoute} from "vue-router";
import {api} from "boot/axios";
import {onMounted, reactive} from "vue";
import {useQuasar} from "quasar";

const route = useRoute();
const q = useQuasar();
const localState = reactive({
  data: {}
})
const fetch = (id) => {
  q.loading.show();
  api.get(`events/${id}`)
    .then(res => {
      const {data} = res.data;
      localState.data = data;
    })
    .catch(err => q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(() => {
  fetch(route.params.id)
})
</script>
