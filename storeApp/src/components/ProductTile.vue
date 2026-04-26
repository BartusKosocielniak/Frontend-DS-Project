
<template>
	<div class="product-tile">
		<RouterLink :to="`/product/${product.id}`">
			<div class="image-container" :style="imageStyle">
				<AppLoader v-if="loading" />
			</div>

			<div class="product-info">
				<div class="name">{{ product.name }}</div>
				<div class="price">{{ product.price }}$</div>
			</div>
		</RouterLink>
	</div>
</template>

<script>

import AppLoader from '@/components/AppLoader.vue'

export default {
	props: {
		product: Object,
	},
	components: {
		AppLoader,
	},
	data() {
		return {
			loading: true, 
			imageLoaded: false,
		}
	},
	computed: {

		imageStyle() {
			return {
				backgroundImage: this.imageLoaded ? `url(${this.getUrl(this.product.image)})` : 'none',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
			}
		},
	},
	methods: {
		getUrl(img) {
			return `/src/assets/${img}`
		},
	},
	mounted() {

		const randomDelay = Math.floor(Math.random() * (2500 - 500 + 1)) + 500

		setTimeout(() => {
			this.loading = false
			this.imageLoaded = true
		}, randomDelay)
	},
}
</script>

<style lang="css" scoped>
.product-tile {
	margin: 10px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 10px;
	transition: transform 0.2s;
}

.product-tile:hover {
	transform: scale(1.02);
}

.image-container {
	width: 200px;
	height: 200px;
	background-color: #f0f0f0;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
}

.product-info {
	text-align: center;
	color: #333;
	text-decoration: none;
}

.name {
	font-weight: bold;
}

.price {
	color: #2c3e50;
}
</style>
