<script setup>
// console.log()
import { useCounterStore } from '@/stores/myStore'

const counter = useCounterStore()
counter.count++
//with auto completion'
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>
<template>
    <div>
      {{ counter.count }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
      <h1>Welcome to the home/Index page</h1>
      <AppAlert>
        This is an auto-imported component
      </AppAlert>
      <Test></Test>
    </div>
  </template>