import { defineStore } from 'pinia';
import {LocalStorage} from "quasar";

export const useAuthData = defineStore('authData', {
  state: () => ({
    user: LocalStorage.getItem('user'),
    token: LocalStorage.getItem('token'),
    title:'Title of '
  }),

  getters: {
    authenticated: state => !!state.token,
    doubleCount(state) {
      return state.counter * 2
    },
    titleString: (state) => state.title
  },

  actions: {
    clearAuthData () {
      this.user={}
      this.token = '';
      LocalStorage.remove('token');
      LocalStorage.remove('user');
    },
    setTitle(){
      this.title="Application of "
    }
  }
})
