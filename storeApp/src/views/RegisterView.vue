<template>
    <AppLoader v-show="loading" />
  <div v-show="exists" class="register-component">
    <h1>Info</h1>
    <p>User już istnieje</p>
    <button @click="exists = false; registered = false;">Zarejestruj się</button>
  </div>

  <form @onSubmit="onSubmit" v-show="!exists && !registered" class="register-component">
    <h1>Register</h1>
    <div v-show="error" style="color: red;">{{ error }}</div>
    
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Hasło" />

    <button type="submit" :disabled="!isFormValid || loading">
      Register
    </button>
  </form>

  <div v-show="registered" class="register-component">
    <h1>Info</h1>
    <p>User zarejestrowany</p>
    <button @click="exists = false; registered = false;">Zarejestruj się ponownie</button>
  </div>
</template>

<script>
import { registerUser } from '@/api'
import AppLoader from '@/components/AppLoader.vue';

export default {
  data() {
    return {
      error: '',
      email: '',
      password: '',
      exists: false,
      loading: false,
      registered: false,
    }
  },
  components: {
    AppLoader
  },
  computed: {
    // Zmieniłem nazwę na bardziej logiczną
    isFormValid() {
      return this.email.length > 3 && this.password.length >= 3
    },
  },
  // KLUCZOWE: Metody muszą być w tym obiekcie!
  methods: {
    onSubmit() {
      this.error = ''
      this.loading = true

      registerUser({ email: this.email, password: this.password })
        .then(data => {
          
          if (data.status === 'exists') {
            this.exists = true
            this.registered = false
          } else if (data.status === 'registered') {
            this.exists = false
            this.registered = true
          }
        })
        .catch(err => {
          this.registered = false
          this.exists = false
          this.error = 'Błąd serwera. Spróbuj ponownie.'
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style>
.register-component {
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  border-radius: 5px;
  gap: 20px;
}
</style>