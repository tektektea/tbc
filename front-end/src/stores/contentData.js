import { defineStore } from 'pinia';
import {LocalStorage} from "quasar";
import {api} from "boot/axios";

export const useContentData = defineStore('contentData', {
  state: () => ({
    header:'TBC CAR RENTAL',
    featureText:'I hahdam nan leh i him zawk nan Govt Approved Car rental Service ilo pan ve thin dawn nia',
    recent_events: [],
    testimonials: [],
  }),

  getters: {

  },

  actions: {
    getPublicData(){
      api.get('public/data')
        .then(res=>{
          const {recent_events, testimonials} = res.data;
          console.log('recent events',recent_events);
          this.recent_events = recent_events;
          this.testimonials = testimonials;
        })
    }
  }
})
