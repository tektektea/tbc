<template>
  <q-page>
    <p class="title">Vehicles</p>

    <div class="flex justify-between bg-white q-pa-md q-my-md">
      <q-input @keyup="handleSearch" v-model="localState.search" outlined rounded dense placeholder="Search">
        <template  #append>
          <q-icon name="search"/>
        </template>
      </q-input>
      <q-btn :to="{name:'vehicle:create'}" color="primary" rounded label="New vehicle"/>
    </div>
    <div class="row q-col-gutter-sm ">

      <div v-for="item in localState.listData.data" :key="item.id">
        <q-card style="padding: 0 !important;" flat class="tcard">
          <img :src="item?.image_url"/>

          <q-card-section>
            <div class="text-h6">{{item?.name}}</div>
            <div class="text-subtitle2">KM Rate: {{item?.km_rate}}</div>
            <div class="text-subtitle2">DUty Rate : {{item?.duty_rate}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div v-html="item.description"/>
          </q-card-section>
          <q-card-actions>
<!--            <q-btn label="Edit" flat/>-->
            <q-btn @click="deleteItem(item)" label="Delete" color="negative" flat/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="flex q-my-md">
      <q-pagination
        @update:model-value="updatePagination"
        v-model="localState.listData.current_page"
        :max="pageCount"
        input
      />
    </div>
  </q-page>

</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar();
const localState=reactive({
  search: '',
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
const deleteItem = (item) => {
  q.dialog({
    title: 'Confirm Delete',
    message: 'Do you want to delete?',
    cancel:true,
  }).onOk(() => {
    api.delete(`vehicle/${item.id}`)
      .then(res=>{
        const {message} = res.data;
        q.notify({type:'positive',message})
        fetch(1)
      })
  }).onCancel(() => {
    // console.log('Cancel')
  }).onDismiss(() => {
    // console.log('I am triggered on both OK and Cancel')
  })
}
const handleSearch = (e) => {
  if (e.keyCode === 13) {
    fetch(1);
  }
}
const fetch=(page)=>{
  api.get(`vehicle/index`,{params:page,search:localState.search})
    .then(res=>{
      const {message,list} = res.data;
      updatePaginatedData(list)
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
