<template>
  <q-page>
    <p class="title">Events</p>
    <div class="full-width flex items-center bg-white q-pa-md q-ma-md">
      <q-btn :to="{name:'event:create'}" rounded label="New Event" outline color="primary"/>
      <p class="text-dark q-ma-md">Create a new event</p>
    </div>
    <q-list separator class="bg-white full-width">
      <q-item :to="{name:'event:edit',params: {id:item.id}}" v-for="item in localState.listData.data" :key="item.id">

        <q-item-section avatar>
          <q-avatar square>
            <q-img style="width: 210px" :src="item?.thumbnail_path" no-native-menu/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item?.title}}</q-item-label>
          <q-item-label caption>{{item?.description}}</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-btn round @click.self="deleteData(item)" icon="delete" color="negative"/>
        </q-item-section>
      </q-item>
      <div class="col-12">
        <q-pagination
          @update:model-value="updatePagination"
          v-model="localState.listData.current_page"
          :max="pageCount"
          input
        />
      </div>
    </q-list>
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

const deleteData=item=>{
  api.delete(`event/${item.id}`)
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
  api.get(`event/index`,{params: {page}})
    .then(res=>{
      const {message,list} = res.data;
      updatePaginatedData(list)
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
