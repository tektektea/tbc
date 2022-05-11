<template>
  <div class="row q-col-gutter-xs">
    <div class="col-xs-6 col-sm-2" v-for="(event,n) in localState.events" :key="`xs-${n}`">
      <q-card class="tcard" flat bordered>
          <q-avatar style="margin-top: -90px;" size="72px">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-avatar>


          <q-card-section class="col-5 flex flex-center">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </blockquote>
          </q-card-section>


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
