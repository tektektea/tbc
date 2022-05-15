<template>
  <q-page>
    <div class="container">
      <p class="title">Gallery</p>
      <br/>
      <div class="q-col-gutter-md row items-start">

        <div v-for="item in localState.listData.data" :key="item.id" class="col-sm-3 col-xs-6">
          <q-img style="width: 60%" @click="openDetail(item)" :src="item.thumbnail_path" no-native-menu>
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
    </div>
    <q-dialog v-model="localState.openDetail">
      <q-card style="max-width: 80%;width: 80%;" class="bg-white">
        <q-card-section>
          <q-img  :src="localState.selected?.full_path"/>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Close" @click="localState.openDetail=false"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>

</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState=reactive({
  openDetail: false,
  listData:{
    per_page:15,
    data:[],
    current_page:1,
    total:1
  }
})

const updatePagination=(value)=>fetch(value)
const  pageCount= computed(() => Math.ceil(localState.listData.total / localState.listData.per_page));
const updatePaginatedData=list=>{
  const {current_page, total, per_page,data} =list;
  localState.listData.current_page = current_page;
  localState.listData.data = data;
  localState.listData.total = total;
  localState.listData.per_page = per_page;
}
const openDetail = (item) => {
  localState.selected = item;
  localState.openDetail=true
}
const fetch=(page)=>{
  api.get(`media/gallery`,{params:page})
    .then(res=>{
      const {message,list} = res.data;
      updatePaginatedData(list)
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
