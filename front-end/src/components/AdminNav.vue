<template>
  <q-list class="shadow-0 q-pa-xs">

    <q-item class="flex items-center justify-center">
          <q-img style="width: 90px" src="~assets/logo.jpeg"/>
    </q-item>
    <q-separator/>
    <q-item>
      <q-item-section>
        <q-item-label>CONTENT MANAGEMENT</q-item-label>
      </q-item-section>
    </q-item>
    <q-item :to="{name:menu.route}" clickable v-for="menu in localState.cmsMenus" :key="menu.id" class="q-pa-xs">
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
    <q-item :to="{name:menu.route}" clickable v-for="menu in localState.adminMenus" :key="menu.id">
      <q-item-section avatar class="q-pa-none q-ma-none">
        <q-icon color="dark" :name="menu.icon"/>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{menu?.title}}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script setup>
import {reactive} from "vue";

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
</script>
