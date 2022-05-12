<template>
<div class="flex justify-evenly bg-dark text-white q-pa-xl">
  <div class="column">
    <q-item clickable :to="{name:'privacy'}">
      <q-item-section>
        <q-item-label>Privacy Policy</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable :to="{name:'term'}">
      <q-item-section>
        <q-item-label>Terms And Conditions</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable :to="{name:'login'}">
      <q-item-section>
        <q-item-label>Admin login</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  <div class="column items-center justify-center">
    <q-img style="width: 90px" src="~assets/logo.svg" />
  </div>
  <div class="column">
    <q-item clickable :to="{name:'about'}">
      <q-item-section>
        <q-item-label>About Us</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable :to="{name:'contact'}">
      <q-item-section>
        <q-item-label>Contact</q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable :to="{name:'contact'}">
      <q-item-section>
        <q-item-label>Events</q-item-label>
      </q-item-section>
    </q-item>
  </div>
  <div class="full-width flex justify-center items-center">
    <q class="text-white">Design and developed with ❤ by Lalchhanchhuaha 😉😉</q>
  </div>
</div>
</template>
<script>
export default {

  setup(props, context) {
    return{

    }
  },
}
</script>
