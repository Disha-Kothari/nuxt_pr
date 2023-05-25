<script setup>
const search=ref('')
const page=ref(1)
const {data:cafes,pending,error,refresh}=await useFetch("https://api.roastandbrew.coffee/api/v1/cafes",{
    params:{
        page:page.value,
       // search:search.value
        },
    pick:['id','company_id','company','location_name'],
    watch:[page], //,search
    })
    const previous = () => {
        if( page.value != 1 ){
            page.value = page.value -1 ;
    }
}

const next = () => {
  if( page.value + 1 <= cafes.value.last_page ){
    page.value = page.value + 1;
  }
}
</script>
<template>
 <ul>
    <li v-for="cafe in cafes.data" 
      :key="cafe.id" 
      v-text="cafe.company.name+' - '+cafe.location_name"></li>
  </ul>

<button @click="previous()" v-if="page > 1">Previous</button>
<button @click="next()" v-if="page < cafes.last_page">Next</button>
</template>