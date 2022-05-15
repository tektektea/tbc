<template>
  <q-layout view="hHh lpR fff">

    <q-header  class="header flex justify-center text-primary">
      <q-toolbar class="container" style="height: 70px">
        <q-btn @click="open=!open" v-if="$q.screen.lt.sm" flat icon="menu" color="dark"/>
        <q-toolbar-title @click="$router.replace({name:'home'})" class="text-bold cursor-pointer">
          <q-avatar v-if="$q.screen.gt.xs" class="q-mr-lg">
            <img src="~assets/logo.jpeg">
          </q-avatar>
          TBC Car Rental
        </q-toolbar-title>
        <q-btn @click="logout" color="danger" label="Logout" flat rounded/>
      </q-toolbar>
    </q-header>
    <q-drawer side="left" behavior="mobile"  v-model="open">
      <AdminNav/>
    </q-drawer>

    <q-page-container class="q-pa-sm bg-grey-1">
       <q-page class="row q-col-gutter-sm container q-pa-sm">
         <div class="col-sm-3 xs-hide bg-white rounded-borders">
           <admin-nav/>
         </div>
         <div class="col-xs-12 col-sm-9">
           <router-view class="q-pa-md"/>
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
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useAuthData} from "stores/authData";
import {useRouter} from "vue-router";

export default defineComponent({
  components: {AdminNav:defineAsyncComponent(() => import('components/AdminNav.vue')), Footer: defineAsyncComponent(() => import('components/Footer.vue'))},
  setup(props, context) {
    const q = useQuasar();
    const router = useRouter();
    const {setLoginData} = useAuthData();
    const open = ref(false);
    const localState=reactive({
      cmsMenus:[
        {id:1,title:'Vehicles',route:'vehicle:list',icon:'car_rental'},
        {id:2,title:'Privacy policy',route:'privacy:detail',icon:'description'},
        {id:2,title:'Gallery',route:'gallery:list',icon:'image'},
        {id:3,title:'Terms and Conditions',route:'term:detail',icon:'thumb_up_alt'},
        {id:4,title:'About',route:'about:detail',icon:'self_improvement'},
        {id:5,title:'Contact',route:'contact:detail',icon:'contact_page'},
        {id:6,title:'Testimonials',route:'testimonial:list',icon:'chat'},
      ],
      adminMenus:[
        {id:1,title:'Accounts',route:'account:list',icon:'supervisor_account'},
        {id:2,title:'Our Events',route:'event:list',icon:'event_available'},
        {id:3,title:'Media',route:'media:list',icon:'image'},
        {id:4,title:'Contact Request',route:'contact-request:list',icon:'phone'},
      ]

    })
    const  logout=()=>{
      api.post('auth/logout')
      .then(res=>{
        setLoginData(null, null);
        router.replace({name:'home'})
      })
      .catch(err=>{
        setLoginData(null, null);
      })
    }
    return {
      open,
      localState,
      logout,
    }
  },
})

</script>
