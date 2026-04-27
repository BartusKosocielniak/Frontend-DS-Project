<template>
	<AppLoader v-show="isLoading" />

	<form @onSubmit="onSubmit" v-show="!isLogged" class="login-component">
		<h1>login</h1>
		<div v-show="error" style="color: red">{{ error }}</div>

		<input type="email" v-model="email" placeholder="Email" />
		<input type="password" v-model="password" placeholder="Hasło" />

		<button type="submit" :disabled="!isFormValid || isLoading">login</button>
	</form>
  <p v-show="isLogged">Zalogowany jako {{ $store.getters.GET_CURRENT_USER }}</p>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue'

export default {
	data() {
		return {
			error: '',
			email: '',
			password: '',
			exists: false,
			logged: false,
		}
	},
	components: {
		AppLoader,
	},
	computed: {
		isFormValid() {
			return this.email.length > 3 && this.password.length >= 3
		},
    isLoading() {
      return this.$store.getters.GET_CURRENT_USER_LOADING
    },
    isLogged() {
      if (this.$store.getters.GET_CURRENT_USER != null)
        return true
      else return false
    }
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()
      
			/* po przejściu walidacji (zachowany format emaila - regex)
      uruchamiamy funkcję ze store User
      jeśli otrzymamy z serwera email zalogowanego usera
      to znaczy, że można wykonywać działania na kliencie
      np przekierować się na inny adres
      logika pozostałych komunikatów musi być oparta o serwer
      */

			this.$store
				.dispatch('LOGIN_USER', { email: this.email, password: this.password })
				.then(() => {
          this.loading = this.$store.getters.GET_CURRENT_USER_LOADING
					const { email } = this.$store.getters.GET_CURRENT_USER

					if (email){
            this.logged = true
            console.log("działa!!!!");
            this.loading = this.$store.getters.GET_CURRENT_USER_LOADING
          } 
					else this.logged = false

					this.$router.push("/");
				})
				.catch(() => {
					this.error = 'niepoprawne dane logowania'
					this.logged = false
				})
		},
	},
}
</script>
<style>
.login-component {
	display: flex;
	flex-direction: column;
	margin: 20px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	gap: 20px;
}
</style>
