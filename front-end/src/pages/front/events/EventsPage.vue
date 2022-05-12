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
        <div class="col-xs-12" v-for="(event,n) in localState.events" :key="`xs-${n}`">
          <q-card class="tcard" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-lg text-dark q-mt-sm q-mb-xs">{{ event?.title }}</div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  style="width: 150px"
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn color="dark" flat round icon="event" />
              <q-btn flat>
                7:30PM
              </q-btn>
              <q-btn flat color="primary">
                Read More
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>

</template>
<script>
import {reactive} from "vue";

export default {
  setup(){
    const localState=reactive({
      events:[
        {id:1,title:"Event one",description:'lorem'},
        {id:2,title:"Event one",description:'lorem'},
        {id:3,title:"Event one",description:'lorem'},
        {id:4,title:"Event one",description:'lorem'},
        {id:5,title:"Event one",description:'lorem'},
        {id:6,title:"Event one",description:'lorem'},
      ]
    })
    const handleSearch=e=>{

    }
    return{
      localState,
      handleSearch
    }
  }
}

</script>
