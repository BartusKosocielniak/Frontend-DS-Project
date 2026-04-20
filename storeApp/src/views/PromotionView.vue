<template>
    <AppLoader v-show="promotionLoading" />
    {{ promotionObject.longDescription }}
    <div class="product-frame">
        <ProductTile v-for="product in promotionObject.items" :key="product.id" :product="product" />
        <!-- <div
            v-for="product in promotionObject.items"
            :key="product.id"
            :product="product">
        {{ product.name }}</div> -->

    </div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue';
import ProductTile from '@/components/ProductTile.vue';
export default {
        data() {
        return {
            promotionLoading: true
        }
    },
    created() {
        this.$store.dispatch("FETCH_PROMOTION", this.$route.params.id);
        console.log(this.$route.params.id);
    },
    computed: {
        promotionObject() {
            this.promotionLoading = this.$store.getters.GET_PROMOTION_LOADING
            return this.$store.getters.GET_PROMOTION_OBJECT;
        },

    },
    components: {
        ProductTile,
        AppLoader
    },



}
// ten zasrany loader do zrobienia 
</script>

<style lang="css" scoped>
.product-frame {
    display: flex;
}
</style>
