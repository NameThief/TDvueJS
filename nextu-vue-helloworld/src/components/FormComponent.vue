<template>
  <div class="form-container">
    <h2>Formulaire d'inscription</h2>
    <form v-if="!showRecap" @submit.prevent="handleRecap">
      
      <div class="form-group">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" v-model="form.nom" required />
      </div>

      <div class="form-group">
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" v-model="form.prenom" required />
      </div>

      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label>Genre :</label>
        <div class="radio-container">
          <input
            type="radio"
            id="homme"
            value="Homme"
            v-model="form.genre"
            class="radio-input"
          />
          <label for="homme" class="radio-label">Homme</label>
        </div>
        <div class="radio-container">
          <input
            type="radio"
            id="femme"
            value="Femme"
            v-model="form.genre"
            class="radio-input"
          />
          <label for="femme" class="radio-label">Femme</label>
        </div>
      </div>

      <div class="form-group">
        <label for="adresse">Adresse :</label>
        <input type="text" id="adresse" v-model="form.adresse" required />
      </div>

      <div class="form-group">
        <label for="code-postal">Code Postal :</label>
        <input type="text" id="code-postal" v-model="form.codePostal" required />
      </div>

      <div class="form-group">
        <label for="ville">Ville :</label>
        <input type="text" id="ville" v-model="form.ville" required />
      </div>

      <div class="form-group">
        <label for="institut">Nom de l'institut :</label>
        <input type="text" id="institut" v-model="form.institut" required />
      </div>

      <div class="form-actions">
        <button type="submit">Valider</button>
        <button type="button" @click="resetForm">Annuler</button>
      </div>
    </form>

    <div v-else class="recap-container">
      <h3>Fiche Récapitulative</h3>
      <ul>
        <li><strong>Nom :</strong> {{ form.nom }}</li>
        <li><strong>Prénom :</strong> {{ form.prenom }}</li>
        <li><strong>Email :</strong> {{ form.email }}</li>
        <li><strong>Genre :</strong> {{ form.genre }}</li>
        <li><strong>Adresse :</strong> {{ form.adresse }}</li>
        <li><strong>Code Postal :</strong> {{ form.codePostal }}</li>
        <li><strong>Ville :</strong> {{ form.ville }}</li>
        <li><strong>Nom de l'institut :</strong> {{ form.institut }}</li>
      </ul>
      <div class="form-actions">
        <div class="form-actions recap-actions">
          <button class="btn-confirm" @click="confirmSubmission">Confirmer</button>
          <button class="btn-edit" @click="editForm">Modifier</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  genre: 'Homme' | 'Femme' | '';
  adresse: string;
  codePostal: string;
  ville: string;
  institut: string;
}

const form: FormData = reactive({
  nom: '',
  prenom: '',
  email: '',
  genre: '',
  adresse: '',
  codePostal: '',
  ville: '',
  institut: '',
});

const showRecap = ref(false);
const router = useRouter();

const handleRecap = () => {
  showRecap.value = true;
};

const resetForm = () => {
  Object.keys(form).forEach((key) => (form[key as keyof FormData] = ''));
  showRecap.value = false;
  router.push('/'); 
};

const confirmSubmission = () => {
  alert('Formulaire soumis : ' + JSON.stringify(form, null, 2));
  resetForm();
};

const editForm = () => {
  showRecap.value = false;
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}

h2,
h3 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type='text'],
input[type='email'] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-container {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.radio-input {
  appearance: auto;
  margin-right: 0.5rem;
}

.radio-label {
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit'],
button[type='button'] {
  background-color: #4caf50;
  color: white;
}

button[type='button'] {
  background-color: #f44336;
  color: white;
}

.recap-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.btn-confirm {
  background-color: #e8f5e9; 
  color: #2e7d32; 
  border: 2px solid #2e7d32; 
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.btn-confirm:hover {
  background-color: #2e7d32; 
  color: white;
}

.btn-edit {
  background-color: #e3f2fd; 
  color: #1565c0; 
  border: 2px solid #1565c0; 
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.btn-edit:hover {
  background-color: #1565c0; 
  color: white;
}

.recap-actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}

</style>
