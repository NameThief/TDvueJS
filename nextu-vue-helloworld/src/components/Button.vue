<template>
    <button class="icon-button" :title="title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>{{ title }}</title>
        <path :d="pathData" />
      </svg>
    </button>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    title: String, 
    pathData: String, 
  });
  </script>
  
  <style scoped>
  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  </style>
  