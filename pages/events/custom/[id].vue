<script setup>

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  }
})

const route=useRoute()
const id=route.params.id
const qry=route.query
</script>
<template>
    <div>custom id:{{ id }}</div>
    <div>Using custom template syntax{{$route.params.id }}</div>
</template>