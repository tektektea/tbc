<template>
  <q-layout view="hHh lpR fff">

    <q-header  class="header flex justify-center text-primary">
      <q-toolbar class="container" style="height: 70px">
        <q-toolbar-title @click="$router.replace({name:'home'})" class="text-bold cursor-pointer">
          <q-avatar class="q-mr-lg">
            <img src="~assets/quasar-logo-vertical.svg">
          </q-avatar>
          TBC Car Rental
        </q-toolbar-title>
        <q-btn @click="logout" color="danger" label="Logout" flat rounded/>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-sm">
     <q-page>
       <div class="row q-col-gutter-sm container q-pa-md">
         <div class="col-3">
           <q-list class="shadow-0 q-pa-xs">
             <q-item>
               <q-item-section>
                 <q-item-label>CONTENT MANAGEMENT</q-item-label>
               </q-item-section>
             </q-item>
             <q-item clickable v-for="menu in localState.cmsMenus" :key="menu.id" class="q-pa-xs">
               <q-item-section avatar class="q-pa-none q-ma-none">
                 <q-icon color="dark" :name="menu.icon"/>
               </q-item-section>
               <q-item-section>
                 <q-item-label>{{menu?.title}}</q-item-label>
               </q-item-section>
             </q-item>
             <q-separator class="q-my-md"/>
             <q-item>
               <q-item-section>
                 <q-item-label>ADMINISTRATION</q-item-label>
               </q-item-section>
             </q-item>
             <q-item clickable v-for="menu in localState.adminMenus" :key="menu.id">
               <q-item-section avatar class="q-pa-none q-ma-none">
                 <q-icon color="dark" :name="menu.icon"/>
               </q-item-section>
               <q-item-section>
                 <q-item-label>{{menu?.title}}</q-item-label>
               </q-item-section>
             </q-item>
           </q-list>
         </div>
         <div class="col-9">
           <router-view class="tcard"/>
         </div>
       </div>
     </q-page>
    </q-page-container>
    <q-footer>
      <Footer/>
    </q-footer>
  </q-layout>
</template>
<script>
import {defineAsyncComponent, defineComponent, reactive, ref} from "vue";

export default defineComponent({
  components: {Footer: defineAsyncComponent(() => import('components/Footer.vue'))},
  setup(props, context) {
    const localState=reactive({
      cmsMenus:[
        {id:1,title:'Vehicles',route:'vehicle:list',icon:'car_rental'},
        {id:2,title:'Privacy policy',route:'privacy:detail',icon:'description'},
        {id:2,title:'Terms and Conditions',route:'term:detail',icon:'thumb_up_alt'},
        {id:2,title:'About',route:'about:detail',icon:'self_improvement'},
        {id:2,title:'Contact',route:'contact:detail',icon:'contact_page'},
      ],
      adminMenus:[
        {id:1,title:'Users',route:'car:list',icon:'supervisor_account'},
        {id:2,title:'Events',route:'car:list',icon:'event_available'},
        {id:2,title:'Setting',route:'car:list',icon:'settings'},
      ]

    })
    return {
      localState,
      logout:()=>{
        console.log('logout')
      }
    }
  },
})

</script>
