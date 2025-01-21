import { createRouter, createWebHistory } from 'vue-router';
import HomeProjectView from '../views/HomeProjectView.vue';
import FormComponent from '../components/FormComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeProjectView,
  },
  {
    path: '/form',
    name: 'form',
    component: FormComponent,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
