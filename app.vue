<script setup>
// import {createPinia} from 'pinia'
function enableCustomLayout(){
  setPageLayout("custom")
}
function changeDefaultLayout(){
  setPageLayout("default")
}
const layout="custom" 
//Type:false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
//Set a static or dynamic name of the layout for each route. This can be set to false in case the default layout needs to be disabled
// definePageMeta({
//   layout:false,
// });
</script>
<template>
  <div>
    <!-- <NuxtWelcome />
    <Test/> -->
    <!-- <NuxtLayout :name="layout"> -->
    <!-- <NuxtLayout name="layout"> -->
    <NuxtLayout>
      <NuxtPage/>
      <button @click="enableCustomLayout">Update Layout</button>
      <button @click="changeDefaultLayout">Reset To Default Layout</button>
    </NuxtLayout>
  </div>
</template>
