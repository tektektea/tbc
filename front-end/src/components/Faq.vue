<template>
  <div class="q-my-md">
    <q-list separator class="tcard full-width">
      <q-expansion-item v-for="(item,i) in questions"
                        :key="i"
                        :label="item?.question"
      >
        <p class="text-weight-medium text-dark">{{ item?.answer }}</p>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {api} from "boot/axios";

const questions = ref([])

onMounted(() => {
  api.get('public/faq')
    .then(res => {
      const {list} = res.data;
      questions.value = list;
    })
    .catch(err => console.error(err))
})
</script>
