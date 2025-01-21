<template>
  <section class="dashboard">
    <div class="project">
      <h4>Your Projects</h4>
      <div class="project-grid">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Card from './Card.vue';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Super Cool Project',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Another Project',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Amazing App',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Fantastic Platform',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Incredible Innovation',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Brilliant Design',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
];
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes égales */
  gap: 1rem; /* Espace entre les cartes */
}

.project {
  margin: 1rem 0;
}
</style>
