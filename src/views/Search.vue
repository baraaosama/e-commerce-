<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Results For: {{ searchInput }}</h4>
      </div>
    </div>

    <div class="row" v-if="filteredProducts">
      <div v-for="product of filteredProducts" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
    <div class="row" v-else>
      <h2>No Results Found</h2>
    </div>
  </div>
</template>

<script>
import ProductBox from '@/components/ProductBox';

export default {
  components: {
    ProductBox
  },
  computed: {
    searchInput() {
      return this.$route.params.searchInput || '';
    },
    products () {
      return this.$store.state.products;
    },
    filteredProducts() {
      console.log(this.products);
      return this.products.filter(product => {
        if(product.name){
          return product.name.toLowerCase().includes(this.searchInput.toLowerCase());
        }
      });
    }
  },
};
</script>

<style>
/* Add your styles here */
</style>