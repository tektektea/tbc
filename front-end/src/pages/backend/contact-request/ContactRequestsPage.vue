<template>
  <q-page>
    <div class="flex justify-between bg-white q-pa-md q-my-md">
      <p class="title">Contact request</p>
      <q-input v-model="localState.search" outlined rounded dense placeholder="Search">
      <template  #append>
        <q-icon name="search"/>
      </template>
      </q-input>
    </div>
    <q-list separator class="bg-white">
      <q-item v-for="item in localState.listData.data" :key="item.id">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="text-white">{{item.name[0].toUpperCase()}}</q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.name}}</q-item-label>
          <q-item-label caption>{{item.message}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn @click="deleteItem(item)" round color="negative" icon="delete"/>
        </q-item-section>
      </q-item>
    </q-list>
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
  listData:{
    per_page:15,
    data:[],
    current_page:1,
    total:1
  }
})

const deleteImage=item=>{
  api.delete(`contact-request/${item.id}`)
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
const deleteItem = (item) => {
    q.dialog({
      title: 'Confirm Delete',
      message: 'Do you want to delete?',
      cancel:true,
    }).onOk(() => {
      api.delete(`contact-request/${item.id}`)
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
const fetch=(page)=>{
  api.get(`contact-request/index`,{params:page})
    .then(res=>{
      const {message,list} = res.data;
      updatePaginatedData(list)
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
