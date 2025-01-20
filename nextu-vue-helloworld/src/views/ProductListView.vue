<template>
    <div>
      <h1>Vue Parent</h1>
      <ProductList :products="products" />
    </div>
  </template>
  
  <script setup lang="ts">
 import ProductList from '@/components/ProductList.vue';

  
  
  const products = [
    { id: 1, label: 'Produit 1', description: 'Description du produit 1', quantity: 10 },
    { id: 2, label: 'Produit 2', description: 'Description du produit 2', quantity: 0 },
    { id: 3, label: 'Produit 3', description: 'Description du produit 3', quantity: 5 },
  ];
  </script>
  