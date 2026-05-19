<template>
	<div class="nav">
		<div class="routing">
			<RouterLink class="nav-element" to="/" exact>Home</RouterLink>
			<RouterLink class="nav-element" to="/about">About</RouterLink>
			<RouterLink class="nav-element" to="/nnn">Not found</RouterLink>
            <RouterLink class="nav-element" to="/search">Search</RouterLink>
		</div>
		<div class="register-header" v-show="!user && !userLoading">
			<RouterLink class="" to="/register"><button>Register</button></RouterLink>
			<RouterLink class="" to="/login"><button>Login</button></RouterLink>
		</div>
		<div class="register-header" v-show="user && !userLoading">
			<span>Welcome, {{ user }}!</span>
			<button class="nav-element" @click="logout">Logout</button>
		</div>
	</div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue'

export default {
	components: {
		AppLoader,
	},
	computed: {
		user() {
			if (this.$store.getters.GET_CURRENT_USER != null) return this.$store.getters.GET_CURRENT_USER.email
			else {
				return null
			}
		},
		userLoading() {
			return this.$store.getters.GET_CURRENT_USER_LOADING
		},
	},
	methods: {
		logout() {
			this.$store.dispatch('LOGOUT_USER').then(() => {
				this.$router.push('/login') // redirect
			})
		},
	},
}
</script>

<style lang="css" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    align-items: center;
    background-color: black;
}

.routing {
    display: flex;
}

.nav-element {
    padding: 5px 30px;
}

.nav-element:hover {
    background-color: #333;
    color: rgb(255, 8, 8);
}

a {
    text-decoration: none;
    color: #f6ff00;
}

button {
    background-color: transparent;
    border: 1px solid #f6ff00;
    color: #f6ff00;
    padding: 5px 30px;
    cursor: pointer;
    margin-left: 5px;
}

button:hover {
    background-color: #f6ff00;
    color: black;
}

.register-header {
    position: relative; /* Kluczowe dla loadera */
    display: flex;
    align-items: center;
    height: 100%; /* Wypełnia wysokość .nav */
    padding: 0 10px;
    overflow: hidden; /* Utrzymuje tło loadera w ryzach */
}

.register-header span {
    color: #f6ff00;
    margin-right: 10px;
}
</style>
