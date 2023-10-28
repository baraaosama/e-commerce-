<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Products</h3>
        <!--<router-link :to="{ name: 'addProduct' }">
          <button class="btn" style="float:right">Add Product</button>
        </router-link>-->
      </div>
    </div>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="">
    <div class="row" v-else>
      <div
        v-for="product of products"
        :key="product.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <product-box :product="product"> </product-box>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from '@/components/ProductBox.vue';
export default {
  name: "products",
  components: { ProductBox },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
<style scoped></style>