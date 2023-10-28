<template>
    <div class="adminPanel container">
      <router-link :to="{name : 'adminProducts'}" class="d-block m-3 mt-5">
        <button type="button" class="btn btn-primary btn-lg">Admin Products</button>
      </router-link>
      <br>
      <router-link :to="{name : 'adminCategory'}" class="d-block m-3">
        <button type="button" class="btn btn-primary btn-lg">Admin Categories</button>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>