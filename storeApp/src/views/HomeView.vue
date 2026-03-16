<template>
    <div>
    <RouterLink
        v-for="promotion in promotionsList"
        :to="`/promotion/${promotion.id}`"
        :key="promotion.id"
      >
        <PromotionTile v-bind:promotion="promotion" />
</RouterLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
