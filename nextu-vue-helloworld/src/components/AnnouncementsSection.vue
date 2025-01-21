<template>
  <div class="announcement">
    <h4>Announcements</h4>
    <div class="background-box">
      <div class="anounce" v-for="(announcement, index) in announcements" :key="index">
        <h5>{{ announcement.title }}</h5>
        <p>{{ announcement.description }}</p>
        <hr v-if="index < announcements.length - 1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Announcement {
  title: string;
  description: string;
}

const announcements: Announcement[] = [
  {
    title: 'Site Maintenance',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Community Share Day',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
  {
    title: 'Updated Privacy Policy',
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa...`,
  },
];
</script>

<style scoped>
.announcement {
  margin: 2rem 0;
}

.background-box {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
}

.anounce {
  margin-bottom: 1rem;
}

.anounce h5 {
  margin: 0 0 0.5rem;
}

.anounce p {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 1rem 0;
}
</style>
