<template>
  <div class="row q-col-gutter-xs flex justify-center items-center">
    <div class="col-xs-12 col-sm-3" v-for="(event,n) in localState.events" :key="`xs-${n}`">
      <q-card class="tcard" flat bordered>
          <q-avatar style="margin-top: -90px;" size="72px">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-avatar>
        <p class="text-grey-5"> Designation</p>
          <q-card-section class=" flex flex-center">
            <q class="text-dark text-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q>
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
      ]
    })
    return{
      localState
    }
  }
}

</script>
