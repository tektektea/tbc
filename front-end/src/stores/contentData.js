import { defineStore } from 'pinia';
import {LocalStorage} from "quasar";
import {api} from "boot/axios";

export const useContentData = defineStore('contentData', {
  state: () => ({
    header:'TBC CAR RENTAL',
    featureText:'I hahdam nan leh i him zawk nan Govt Approved Car rental Service ilo pan ve thin dawn nia',
    recent_events: [],
    testimonials: [],
    fav_cars:[]
  }),

  getters: {
    cars: (state) => this.state.fav_cars,

  },

  actions: {
    getPublicData(){
      api.get('public/data')
        .then(res=>{
          const {recent_events,header_text,feature_text,fav_cars, testimonials} = res.data;
          console.log('recent events',recent_events);
          this.recent_events = recent_events;
          this.testimonials = testimonials;
          this.header = header_text;
          this.featureText = feature_text;
          this.fav_cars = fav_cars;
        })
    }
  }
})
