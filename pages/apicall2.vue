<script setup>
// for singal source:https://fakestoreapi.com/products/1
//limit results https://fakestoreapi.com/products?limit=5
// for cors error   headers: { Accept: 'application/json', apikey: 'xxxx' },
// headers: {
//         'Authorization': 'Bearer '+this.token,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify( this.form )
// const TOKEN="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"
// const {data:users}= await useFetch('https://api.github.com/users',{
//     headers:{
//         Authorization: `Bearer ${TOKEN}`,
//     }
// })
//,{
    //headers: { 'Access-Control-Allow-Origin': '*'}
    
// const{data:credits,pending}=useFetch("/api/v1/titles/ts236033/credits",{
//     baseURL: 'http://10.0.17.15:3000'}
// )
// console.log(pending)
const { data: titles, error,pending } = await useAsyncData(
  'titles',
  () => $fetch(`/api/v1/titles`, { baseURL: 'http://10.0.17.15:3000',
    // params: {
    //   page: page.value,
    //   search: search.value,
    // }
  } ))

</script>
<template>
    <div>
        <p>
            {{ pending }}
            <!-- {{ credits.data }} -->
            <div v-if="pending">
            Loading ...
            </div>
            <div v-else>
            <!-- <div v-for="title in titles.data">
                {{ title.id }} 
            </div> -->
             <div v-for="title in titles.data.title">
                <p>{{title.id}}|{{ title.title }}</p>
            </div>
            <!-- <div v-for="credit in credits.data"> -->
                <!-- {{credit.name}} -->
            <!-- </div> --> 
             <!-- {{ titles.data }}  -->
            </div>
        </p>
    </div>
</template>