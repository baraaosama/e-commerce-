<template>
    <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'addCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
      </div>
    </div>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="">
    <div class="row" v-else>
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
    
  </div>
</template>

<script>
import CategoryBox from '@/components/CategoryBox.vue'
export default {
    components : {
        CategoryBox
    },
    computed : {
        categories () {
            return this.$store.getters.categories
        },
        loading () {
            return this.$store.getters.loading
        }
    }

}
</script>

<style>

</style>