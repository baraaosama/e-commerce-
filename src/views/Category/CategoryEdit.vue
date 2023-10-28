<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form v-if="category">
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="category.categoryName" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="category.description" required>
          </div>
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="category.imageUrl" required>
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
const baseURL = 'https://limitless-lake-55070.herokuapp.com';
export default {
  data(){
    return {
      category: null,
      id: null
    }
  },
  methods : {
    async editCategory() {
      delete this.category["products"]
      await axios.post(baseURL+"/category/update/"+this.id, this.category)
      .then(res => {
        this.$router.push({name:'adminCategory'});
        swal({
          text: "Category Updated Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      })
      .catch(err => console.log(err));
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find(category => category.id == this.id);
    console.log('category', this.category);
  },
  computed : {
    categories () {
      return this.$store.getters.categories
    },
  }
}
</script>

<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>