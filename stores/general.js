import { defineStore } from 'pinia'
import { useUsersStore } from './user'
import axios from '../plugins/axios' // IMPORT AXIOS INSTANCE FROM AXIOS.JS.

const $axios = axios().provide.axios //GETTING THE AXIOS INSTANCE PROVIDED BY PROVIDER. SEE THAT FILE.

// THE <-- persist: true --> IS USING NUXT_PINIA_PERSIST PACKAGE TO STORE THESE STORES AS COOKIES
export const useGeneralStore = defineStore('general', {
  state: () => ({
    isMainSidebarOpen : false,
    isBackUrl: '',
  }),
  actions: {
    // THIS IS TO PREVENT SCROLLING WHEN THE MODALS ARE OPEN. ALSO SEE app.vue onMounted FOR THE REST OF THE FUNCTIONAL CODE
    bodySwitch(val){
      if(val){
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'visible'
    },

    async hasSessionExpired(){
      await $axios.interceptors.response.use((response) => {
        // CALL WAS SUCCESSFUL
        return response;
      }, (error) => {
        // A SWITCH CASE THAT USES THE ERROR RESPONSE STATUS CODE
        switch(error.response.status){
          case 401:
          case 419:
          case 503:
            useUsersStore().resetUser()
            window.location.href = "/"
            break
          case 500:
            alert('Oops! Something went wrong! The team has been notified.')
            break
          default:
            // ALLOW INDIVIDUAL REQUESTS TO HANDLE OTHER ERRORS(I.E 422 AND 401)
            return Promise.reject(error);
        }
      })
    },

    // allLowerCaseNoCaps(str){
    //   return str.split(' ').join('').toLowerCase()
    // },

    setBackUrl(url) {
      this.isBackUrl = url
    },
  },
  persist: true,
})