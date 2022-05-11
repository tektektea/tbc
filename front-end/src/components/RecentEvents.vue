<template>
  <div class="row q-col-gutter-xs">
    <div class="col-4" v-for="(event,n) in localState.events" :key="`xs-${n}`">
      <div class="tcard">
        <p class="text-bold text-md">{{event?.title}}</p>
        <p class="text-grey-1">{{event?.description}}</p>
        <q-btn color="primary" flat class="q-pa-sm">Read more</q-btn>
      </div>
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
