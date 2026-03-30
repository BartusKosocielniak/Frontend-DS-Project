<template>
   <div :style="contStyle">
      <h3 class="img-text">{{ this.promotion.header }}</h3>
      <h2 class="img-text">{{ this.promotion.description }}</h2>
   </div>
</template>

<script>
export default {
   name: "PromotionTile",
   props: { promotion: Object },
   computed: {
      contStyle() {
         const { image } = this.promotion;
         let imageUrl;

         try {
            imageUrl = `/src/assets/${image}`;
         } catch (e) {
            console.log(e);
         }

         return {
            background: `url(${imageUrl})`,
            backgroundPosition: `0%`
         };
      },
   },
};
</script>

<style scoped>
.img-text{
   color: #fff;
   text-decoration: ;
}
</style>