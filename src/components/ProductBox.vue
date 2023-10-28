<template>
  <div class="card w-100 h-100" style="margin-top: 10px">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imageURL"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
        <router-link :to="{ name: 'ShowDetails', params: { id: product.id } }">
          <h5 class="card-title">{{ product.name }}</h5>
        </router-link>
      <p class="card-text">
        {{ product.description }}
      </p>
      <p class="card-text"><sup>$</sup>{{ product.price }}</p>
      <router-link :to="{name: 'editProducts', params: {id: product.id}}">
        <button class="btn btn-primary">Edit</button>
      </router-link>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsBox",
  props: ["product"],
  methods: {},
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>