<script setup lang="ts">
import AsideView from './components/layouts/AsideView.vue';
import HeaderView from './components/layouts/HeaderView.vue';
import NavView from './components/layouts/NavView.vue';
import HomeProjectView from './views/HomeProjectView.vue';
</script>

<template>
  <AsideView />
  <main>
    <HeaderView />
    <NavView />
    <router-view />
  </main>
</template>

<style scoped>
main {
  margin-left: 250px; 
  padding: 1rem;
}

aside {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #007bff; 
  color: white;
}

header {
  background-color: #f8f9fa;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

nav {
  margin: 1rem 0;
}
</style>
