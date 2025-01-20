<template>
    <div class="product-list">
      <h1>Liste des produits</h1>
      <ul>
        <li v-for="product in products" :key="product.id" class="product-item">
          <h2>{{ product.label }}</h2>
          <p>{{ product.description }}</p>
          <p :class="{'available': product.status === 'Disponible', 'unavailable': product.status === 'Indisponible'}">
            Statut: {{ product.status }}
          </p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { PropType } from 'vue';
  
  const props = defineProps({
    products: {
      type: Array as PropType<{
        id: number;
        label: string;
        description: string;
        quantity: number;
      }[]>,
      required: true,
    },
  });
  
  const products = computed(() => {
    return props.products.map(product => ({
      ...product,
      status: product.quantity > 0 ? 'Disponible' : 'Indisponible',
    }));
  });
  </script>
  
  <style scoped>
  .product-list {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .product-item {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .available {
    color: green;
  }
  
  .unavailable {
    color: red;
  }
  </style>
  