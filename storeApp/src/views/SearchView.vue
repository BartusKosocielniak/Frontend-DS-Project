<template>
	<form @submit="onSubmit">
		<input v-model="name" />
		<select v-model="category" />
		<select v-model="sort" />
		<select v-model="dir" />
		<button type="submit">Search</button>
	</form>
	<div class="products-frame">
		<ProductTile v-for="product in products" :key="product.id" :product="product" />
	</div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue';

export default {
	data() {
		return {
			name: '',
			category: 'LAPTOP',
			sort: '',
			dir: '',
		}
	},
	created() {
		this.$store.dispatch("FETCH_PRODUCTS", {});
		// this.$store.dispatch("FETCH_PRODUCTS", options);
	},
	computed: {
		products() {
			return this.$store.getters.GET_PRODUCTS_LIST
		},
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()
		
			const options = {
				name: this.name,
				category: this.category,
				_sort: this.sort,
				_order:this.dir
			}
			console.log('methods', options)
			this.$store.dispatch("FETCH_PRODUCTS", options);
		}
	},
	components: {
		ProductTile
	},
}
</script>

<style lang="css" scoped>
.products-frame {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
	max-width: 1200px;
	margin: 0 auto;
}
</style>
