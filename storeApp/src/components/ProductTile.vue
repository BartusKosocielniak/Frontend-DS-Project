<!-- <template>
    <div class="product-tile">        
        <RouterLink :to="`/product/${this.product.id}`">
            <img :src=getUrl(product.image) class="img">
            <div>{{ product.name }}</div>
            <div>{{ product.price }}$</div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    props: { product: Object },
    methods: {
        getUrl(img){
            return `/src/assets/${img}`
        }
    }
}
</script>

<style lang="css" scoped>
.img{
    width: 200px;
    height: 200px;
}
.product-tile{
    margin: 10px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
}


</style> -->
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
// Zakładamy, że AppLoader jest zarejestrowany globalnie lub importowany tutaj
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
			loading: true, // Loader widoczny na starcie
			imageLoaded: false, // Flaga stanu obrazka
		}
	},
	computed: {
		// Dynamiczny styl tła dla diva
		imageStyle() {
			return {
				backgroundImage: this.imageLoaded ? `url(${this.getUrl(this.product.image)})` : 'none',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative', // Ważne dla pozycjonowania loadera (absolute)
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
