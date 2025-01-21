<template>
    <div>
      <h4>Trending</h4>
      <div class="background-box trending">
        <div class="trend" v-for="(trend, index) in trending" :key="index">
          <figure>
            <img class="avatar" :src="trend.avatar" :alt="`Avatar of ${trend.name}`" />
          </figure>
          <div class="trend-details">
            <h6>{{ trend.name }}</h6>
            <p>{{ trend.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const trending = [
    { name: '@tegan', description: 'World Peace Builder', avatar: 'https://robohash.org/irwi32.png?set=set4' },
    { name: '@morgan', description: 'Super cool Project', avatar: 'https://robohash.org/ijrwi32.png?set=set4' },
    { name: '@kindall', description: 'Life Changing App', avatar: 'https://robohash.org/irw2.png?set=set4' },
    { name: '@alex', description: 'No Traffic Maker', avatar: 'https://robohash.org/ireqwe2.png?set=set4' },
  ];
  </script>
  
  <style scoped>
  .trending {
    margin-top: 2rem;
  }
  </style>
  