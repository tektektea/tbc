import { defineStore } from 'pinia';
import {LocalStorage} from "quasar";

export const useContentData = defineStore('contentData', {
  state: () => ({
    header:'Test headinbg',
    featureText:'Lorem dfas dfasdf adfadf adsf',
  }),

  getters: {

  },

  actions: {

  }
})
