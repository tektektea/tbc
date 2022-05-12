<template>
  <div class="bg-grey-1 flex items-center justify-center fullscreen">
    <div style="width: 650px" class="row shadow-5 rounded-borders bg-white">
      <div class="col-xs-12 col-sm-6 flex justify-center items-center">
        <q-form class="text-center q-ma-md relative-position">
          <q-img style="width: 70px" src="~assets/logo.svg"/>
          <q-separator class="full-width q-my-md"/>
          <q-input outlined
                   type="email"
                   v-model="localState.formData.email"
                   label="Email"
                   :rules="[
                       val=>!!val || 'Email is required'
                     ]"
          />

          <q-input outlined
                   class="q-my-md"
                   type="password"
                   v-model="localState.formData.password"
                   label="Password"
                   :rules="[
                       val=>!!val || 'Password is required'
                     ]"
          />

          <q-btn type="submit" color="primary" class="full-width" rounded label="Login"/>
          <q-btn :to="{name:'home'}" label="Back to home" flat class="full-width"/>

        </q-form>
      </div>
      <div class="col-xs-12 col-sm-6 bg-secondary">
        <q-img style="width: 240px" src="~assets/login.svg"/>
      </div>
    </div>

  </div>
</template>
<script setup>
import {reactive} from "vue";

const localState=reactive({
  formData:{
    email:'',
    password:''
  }
})
</script>
