<script setup>
const route=useRoute()
const id=route.params.id
console.log(id)
</script>
<template>
    <div>{{ id }}</div>
    <div>Using template syntax{{$route.params.id }}</div>
</template>