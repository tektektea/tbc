<template>
  <div class="row q-col-gutter-sm">
    <div class="col-xs-12 col-sm-3"
         v-for="(item,i) in awards"
         :key="i">
      <div class="column full-width">
        <q-icon size="32px" color="accent" :name="item.icon"/>
        <p class="text-dark">{{item?.head}}</p>
        <p class="text-dark text-caption">{{item?.caption}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {api} from "boot/axios";
const awards=ref([])
onMounted(()=>{
  api.get('public/cta')
    .then(res=>{
      const {list} = res.data;
      awards.value=list
    })
})
</script>
