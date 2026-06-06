<template>
	<form @submit.prevent="onSubmit">
		<input v-model="name" />
		<select v-model="category">
			<option value="">Nie wybrano</option>
			<option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
		</select>
		<select v-model="sort">
			<option value="">Nie wybrano</option>
			<option v-for="n in sortNames" :key="n.value" :value="n.value">{{ n.label }}</option>
		</select>
		<select v-model="dir">
			<option value="">Nie wybrano</option>
			<option v-for="d in sortDirections" :key="d.value" :value="d.value">{{ d.label }}</option>
		</select>
		<button type="submit">Search</button>
	</form>

	<AppPagination :currentPage="currentPage" :totalItems="totalItems" :limit="limit" />
	<div class="products-frame">
		<ProductTile v-for="product in products" :key="product.id" :product="product" />
	</div>
	<AppPagination :currentPage="currentPage" :totalItems="totalItems" :limit="limit" />
</template>

<script>
import ProductTile from '@/components/ProductTile.vue'
import AppPagination from '@/components/AppPagination.vue'

export default {
	data() {
		return {
			name: '',
			category: '',
			sort: '',
			dir: '',
			sortNames: [
				{ label: 'Name', value: 'name' },
				{ label: 'Price', value: 'price' },
			],
			sortDirections: [
				{ label: 'Rosnąco', value: 'asc' },
				{ label: 'Malejąco', value: 'desc' },
			],
			currentPage: 1,
			limit: 5,
		}
	},
	created() {
		this.$store.dispatch('FETCH_CATEGORIES', {})
	},
	computed: {
		totalItems() {
			return this.$store.getters.GET_TOTAL_PRODUCTS || 0
		},
		products() {
			return this.$store.getters.GET_PRODUCTS_LIST
		},
		categories() {
			return this.$store.getters.GET_CATEGORIES_LIST
		},
	},
	methods: {
		onSubmit() {
			// Zamiast dispatch - wrzucamy wszystko do URL query i resetujemy stronę do 1
			this.$router
				.push({
					query: {
						...this.$route.query,
						name: this.name || undefined, // undefined usuwa pusty parametr z URL
						category: this.category || undefined,
						_sort: this.sort || undefined,
						_order: this.dir || undefined,
						_page: 1, // Nowe wyszukiwanie zawsze od 1 strony
						_limit: this.limit,
					},
				})
				.catch(err => {
					if (err.name !== 'NavigationDuplicated') console.error(err)
				})
		},
		syncParamsFromUrl() {
			const q = this.$route.query
			this.name = q.name || ''
			this.category = q.category || ''
			this.sort = q._sort || ''
			this.dir = q._order || ''
			this.currentPage = parseInt(q._page) || 1
			this.limit = parseInt(q._limit) || 5
		},
		fetchProducts() {
			const options = {
				name: this.name || undefined,
				category: this.category || undefined,
				_sort: this.sort || undefined,
				_order: this.dir || undefined,
				_page: this.currentPage,
				_limit: this.limit,
			}
			this.$store.dispatch('FETCH_PRODUCTS', options)
		},
	},
	components: {
		ProductTile,
		AppPagination,
	},
	watch: {
		'$route.query': {
			immediate: true,
			handler() {
				this.syncParamsFromUrl()
				this.fetchProducts()
			},
		},
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
,
