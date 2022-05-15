import { boot } from 'quasar/wrappers'
import axios from 'axios'
import {LocalStorage, Notify, Quasar} from "quasar";
import {useAuthData} from "stores/authData";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const BASE_URL ='https://tbccarrental.com/api';
const LOCAL_BASE_URL = 'http://127.0.0.1:8000/api';
const api = axios.create({ baseURL: process.env.DEV?BASE_URL:BASE_URL})

export default boot(({ app,router,store }) => {

  const authState=useAuthData(store)
  // for use inside Vue files (Options API) through this.$axios and this.$api
// api.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
//   const Store = useStore();
  api.interceptors.response.use((response) => {

    return response;
  }, (error) => {


    if (error?.response?.status === 401) {
      console.log("error response => ",error.response);

      LocalStorage.remove('user');
      LocalStorage.remove('token');
      authState.user = null;
      authState.token = '';
      // store.dispatch('authData/setCurrentUser', null);
      // store.dispatch('authData/setToken', null)
      router.replace({name:"login"});
      Notify.create({
        message: "Session/Token expired",
        position: "top",
        icon: "warnings",
      });
    }
    //
    return Promise.reject(error,);
  });
  api.interceptors.request.use(
    function(config) {
      let token = LocalStorage.getItem('token');
      // let token=store.getters['authData/getToken'];
      config.headers['Authorization']=`Bearer ${token}`;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
