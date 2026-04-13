<template>
    <div>
        <AppLoader v-show="promotionLoading" />
        <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id">
            <PromotionTile v-bind:promotion="promotion" />
        </RouterLink>
    </div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue';
import PromotionTile from '../components/PromotionTile.vue';


export default {

    data() {
        return {
            promotionLoading: true
        }
    },

    mounted() {
        this.promotionLoading = this.$store.getters.GET_PROMOTIONS_LOADING
        this.$store.dispatch("FETCH_PROMOTIONS");
        //todo usunac zaraz ale testowo
        this.$store.dispatch("FETCH_PROMOTION", 1)
        this.$store.dispatch("FETCH_PROMOTION", 1)
    },
    computed: {
        promotionsList() {
            this.promotionLoading = this.$store.getters.GET_PROMOTIONS_LOADING
            console.log("crazyyy" + this.$store.getters.GET_PROMOTIONS_LIST)
            return this.$store.getters.GET_PROMOTIONS_LIST;
        },

    },
    components: {
        PromotionTile,
        AppLoader
    },
}
</script>

<style lang="scss" scoped></style>
