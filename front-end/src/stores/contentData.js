import { defineStore } from 'pinia';
import {LocalStorage} from "quasar";

export const useContentData = defineStore('contentData', {
  state: () => ({
    header:'TBC Car Rental',
    featureText:'I hahdam nan leh i him zawk nan Govt Approved Car rental Service ilo pan ve thin dawn nia',
  }),

  getters: {

  },

  actions: {

  }
})
