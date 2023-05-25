<script setup>
const counter=useState('counter',()=>Math.round(Math.random()*1000))
</script>
<template>
    <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/events/1">events 1</NuxtLink></li>
          <li><NuxtLink to="/events/2">events 2</NuxtLink></li>
          <li><NuxtLink to="/events/custom/11">custom event 11</NuxtLink></li>
          <li><NuxtLink to="/apicall2">Api call</NuxtLink></li>
          <li><NuxtLink to="/events/myProfile">Profile</NuxtLink></li>
          <li><NuxtLink to="/titles">List of Titles</NuxtLink></li>
          <li><NuxtLink to="/titles">Insert a Title</NuxtLink></li>
          <li><NuxtLink to="/titles/12">Get Title and Credits By Id</NuxtLink></li>
          <li><NuxtLink to="/titles/12">Delete the title By Id</NuxtLink></li>
          <li><NuxtLink to="/titles/121">Update Titles</NuxtLink></li>

        </ul>
      </nav>
    </header>
<slot/>
</div>
</template>