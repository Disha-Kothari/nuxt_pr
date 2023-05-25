// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig:{
        //private key which are only available on server side
        apiSecret:process.env.NUXT_API_SECRET,
        //keys within public are also exposed client side
        public:{
            apiBase :'/api',
            API_BASE_URL:process.env.API_BASE_URL
        }
     },
     modules:["@pinia/nuxt"],
    // pinia: {
    //     autoImports: [
    //       // automatically imports `defineStore`
    //       'defineStore', // import { defineStore } from 'pinia'
    //       ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    //     ],
    // },
    // routeRules:{
    //     '/': { prerender: true },
    //     '/*': { cors: true, headers: { 'access-control-allow-methods': 'GET' }  } 
    // }

    // imports: {
    //     autoImport: false
    // },

    // ,ssr:false
})
