<template>
  <q-page>
    <div class="container">
      <h1 class="title">Our Events</h1>
      <div class="row q-col-gutter-xs">
        <div class="col-xs-12 flex justify-end">
          <q-input v-model="localState.search"
                   style="width: 400px"
                   outlined
                   dense
                   rounded
                   @keyup="handleSearch"
                   placeholder="Search">
            <template #append>
              <q-icon name="search" color="dark"/>
            </template>
          </q-input>
        </div>
        <div class="col-xs-12">
          <q-separator class="q-my-md"/>
        </div>
        <div class="col-xs-12" v-for="(event,n) in localState.listData.data" :key="`xs-${n}`">
          <q-card class="tcard" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col-5 flex flex-center">
                <q-img
                  style="width: 150px"
                  class="rounded-borders"
                  :src="event?.thumbnail_path"
                />
              </q-card-section>
              <q-card-section class="q-pt-xs col-7">
                <div class="full-width">
                  <div class="text-lg text-dark q-mt-sm q-mb-xs">{{ event?.title }}</div>
                  <div class="text-caption text-grey">
                    {{event?.description}}
                  </div>
                </div>

              </q-card-section>


            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn color="dark" flat round icon="event" />
              <q-btn flat>
                {{formatDate(event?.created_at)}}
              </q-btn>
              <q-btn :to="{name:'event:detail',params:{id:event.id}}" flat color="primary">
                Read More
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-xs-12">
          <q-pagination
            @update:model-value="updatePagination"
            v-model="localState.listData.current_page"
            :max="pageCount"
            input
          />
        </div>
      </div>
    </div>
  </q-page>

</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import useUtils from "src/utils/useUtils";

const {formatDate}=useUtils()
const q = useQuasar();
const localState=reactive({
  listData:{
    per_page:15,
    data:[],
    current_page:1,
    total:1
  }
})

const handleSearch=e=>{
  if (e.keyCode === 13) {
    localState.search = e.target.value;
    fetch(1);
  }
}
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
  api.get(`public/events`,{params:{page,search:localState.search}})
    .then(res=>{
      const {message,list} = res.data;
      updatePaginatedData(list)
    })
    .catch(err=>q.notify({type:'negative',message:err.response?.data?.message ||  err.toString()}))
    .finally(()=>q.loading.hide())
}

onMounted(()=>fetch(1))
</script>
