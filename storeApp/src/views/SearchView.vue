<template>
	<form @submit="onSubmit">
		<input v-model="name" />
		<select v-model="category">
			<option value="">Nie wybrano</option>
			<option v-for="c in categories" :value="c">{{ c }}</option>
		</select>
		<select v-model="sort">
			<option value="">Nie wybrano</option>
			<option v-for="n in sortNames" :value="n.value">{{ n.label }}</option>
		</select>
		<select v-model="dir">
			<option value="">Nie wybrano</option>
			<option v-for="d in sortDirections" :value="d.value">{{ d.label }}</option>
		</select>
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
			category: '',
			sort: '',
			dir: '',
			sortNames: [
				{ label: "Name", value: "name" },
				{ label: "Price", value: "price" },
			],
			sortDirections: [
				{ label: "Rosnąco", value: "asc" },
				{ label: "Malejąco", value: "desc" },
			]
		}
	},
	created() {
		this.$store.dispatch("FETCH_PRODUCTS", {});
		this.$store.dispatch("FETCH_CATEGORIES", {});
		// this.$store.dispatch("FETCH_PRODUCTS", options);
	},
	computed: {
		products() {
			return this.$store.getters.GET_PRODUCTS_LIST
		},
		categories() {
			return this.$store.getters.GET_CATEGORIES_LIST
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault()

			const options = {
				name: this.name,
				category: this.category,
				_sort: this.sort,
				_order: this.dir
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
