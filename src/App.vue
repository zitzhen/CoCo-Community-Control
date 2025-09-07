<script setup>
import Navigation from './components/Navigation.vue'
import Search from './components/Search.vue'
import Bottom from './components/Bottom.vue'
import Card from './components/Card.vue'
</script>

<template>
  <main>
     <Navigation />
    <Search />
    <div class="file-list" id="fileList">
      <Card />
    </div>
    <Bottom />
    <router-view />
  </main>
</template>
