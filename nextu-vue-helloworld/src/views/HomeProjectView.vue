<template>
  <div class="container project-box">
    <section class="dashboard">
      
      <ProjectSection />
    
      <section class="side">
        <AnnouncementsSection />
        <TrendingSection />
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectSection from '../components/ProjectSection.vue';
import AnnouncementsSection from '../components/AnnouncementsSection.vue';
import TrendingSection from '../components/TrendingSection.vue';
</script>

<style scoped>
.container {
  margin: 2rem;
}

.dashboard {
  display: flex;
  justify-content: space-between;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
