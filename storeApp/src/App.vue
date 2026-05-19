<template>
	<Header></Header>
	<div class="main">
		<AppLoader v-show="isLoading" />
		<RouterView />
	</div>
	<Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import AppLoader from '@/components/AppLoader.vue';
export default {
	data() {
		return {
			loading: true
		}
	},
	components: {
		Header,
		Footer,
		AppLoader
	},
	beforeCreate() {
    console.log(this.$store.getters.GET_CURRENT_USER);
		this.$store.dispatch('FETCH_CURRENT_USER')
	},
	computed: {
		isLoading() {
			if(this.$store.getters.GET_PRODUCTS_LOADING || this.$store.getters.GET_PROMOTION_LOADING|| this.$store.getters.GET_CURRENT_USER_LOADING)
				return true
			else return false
			
		},
	},
}
</script>

<style lang="css">
.main {
	min-height: 80vh;
	/* max-height: 80vh; */
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
