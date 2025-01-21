<template>
  <div class="container project-box">
    <div class="form-navigation">
      <router-link to="/form" class="form-link">
        Accéder au formulaire
      </router-link>
    </div>
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
.form-navigation {
  text-align: center;
  margin-top: 2rem;
}

.form-link {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.25rem; 
  font-weight: bold;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s ease;
}

.form-link:hover {
  background-color: #0056b3;
  transform: translateY(-2px); 
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); 
}

.form-link:active {
  transform: translateY(0); 
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}
</style>
