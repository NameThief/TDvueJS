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
  ];
  </script>
  
  <style scoped>
  .project-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>
  