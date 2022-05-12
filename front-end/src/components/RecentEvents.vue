<template>
  <div class="row q-col-gutter-xs">
    <div class="col-xs-12 col-sm-6" v-for="(event,n) in localState.events" :key="`xs-${n}`">
      <q-card class="tcard" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-lg text-dark q-mt-sm q-mb-xs">Title</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
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
          <q-btn :to="{name:'event:detail',params:{id:event.id}}" flat color="primary">
            Read More
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
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
    return{
      localState
    }
  }
}

</script>
