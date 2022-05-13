<template>
<q-page>
  <h1 class="title">Media</h1>
  <div class="q-col-gutter-md row items-start">

    <div class="col-12 flex items-center bg-white">
      <q-btn :to="{name:'media:upload'}" rounded label="Upload Image" outline color="primary"/>
      <p class="text-dark q-ma-md">Click here to upload image</p>
    </div>
    <div v-for="item in localState.listData.data" :key="item.id" class="col-6">
      <q-img :src="item.full_path" no-native-menu>
        <q-btn @click="deleteImage(item)" round icon="delete" class="absolute all-pointer-events" flat style="top: 8px; left: 8px">
        </q-btn>
      </q-img>
    </div>
    <div class="col-12">
      <q-pagination
        @update:model-value="updatePagination"
        v-model="localState.listData.current_page"
        :max="pageCount"
        input
      />
    </div>
  </div>
</q-page>

</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState=reactive({
  listData:{
    per_page:15,
    data:[],
    current_page:1,
    total:1
  }
})

const deleteImage=item=>{
  api.delete(`media/${item.id}`)
  .then(res=>{
    const {message} = res.data;
    q.notify({type:'positive',message})
    fetch(0)
  })
  .catch(err=>q.notify({type:'negative',message:err?.response?.data?.message || err.toString()}))
}
const updatePagination=(value)=>fetch(value)
const  pageCount= computed(() => Math.ceil(localState.listData.total / localState.listData.per_page));
const updatePaginatedData=list=>{
  const {current_page, total, per_page,data} =list;
  localState.listData.current_page = current_page;
  localState.listData.data = data;
  localState.listData.total = total;
  localState.listData.per_page = per_page;
}
const fetch=(page)=>{
  api.get(`media/index`,{params:page})
  .then(res=>{
    const {message,list} = res.data;
    updatePaginatedData(list)
  })
  .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
  .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
