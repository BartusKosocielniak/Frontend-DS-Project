<template>
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


</style>