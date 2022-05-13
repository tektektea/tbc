<template>
  <router-view />
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {useContentData} from "stores/contentData";

export default defineComponent({
  name: 'App',
  setup(props) {
    const {getPublicData} = useContentData();
    onMounted(()=>{
      getPublicData();
    })
  },
})
</script>
