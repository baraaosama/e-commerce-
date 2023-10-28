<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" :alt="product.name" class="img-fluid" />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="category font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>

        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Quantity</span>
            </div>
            <input class="form-control" type="number" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button
              type="button"
              id="add-to-cart-button"
              class="btn"
              @click="addToCart(this.id)"
            >
              Add to Cart
              <ion-icon name="cart-outline" v-pre></ion-icon>
            </button>
          </div>
        </div>

        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>

        <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0"
          :class="{ product_added_wishlist: isAddedToWishlist }"
          @click="addToWishList(this.id)"
        >
          {{ wishlistString }}
        </button>
        <button
          id="show-cart-button"
          type="button"
          class="btn mr-3 p-1 py-0"
          @click="listCartItems()"
        >
          Show Cart

          <ion-icon name="cart-outline" v-pre></ion-icon>
        </button>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import  axios from "axios";
const baseURL = "https://limitless-lake-55070.herokuapp.com";
export default {
  data() {
    return {
      product: {},
      category: {},
      id: null,
      token: null,
      isAddedToWishlist: false,
      wishlistString: "Add to wishlist",
      quantity: 1,
      cartItems: [],
    };
  },
  methods: {
    addToWishList(productId) {
        if (this.token) {
      axios
        .post(`${baseURL}/wishlist/add?token=${this.token}`, {
          id: productId,
        })
        .then(
          (response) => {
            if (response.status == 201) {
              this.isAddedToWishlist = true;
              this.wishlistString = "Added to WishList";
            }
          },
          (error) => {
            console.log(error);
          }
        );
        }else {
            this.$router.push({name : 'Signin'});
        }
    },
    addToCart(productId) {
      if (!this.token) {
        swal({
          text: "Please log in first!",
          icon: "error",
        });
        return;
      }
      if(this.quantity < 1) {
        swal({
          text: "Quantity should be greater than 0!",
          icon: "error",
        });
        return;
      }
      axios
        .post(`${baseURL}/cart/add?token=${this.token}`, {
          productId: productId,
          quantity: this.quantity,
        })
        .then(
          (response) => {
            if (response.status == 201) {
              this.$store.dispatch("cartCount");
              swal({
                text: "Product Added to the cart!",
                icon: "success",
                closeOnClickOutside: false,
              });
              // refresh nav bar
            }
          },
          (error) => {
            console.log(error);
          }
        );
    },

    listCartItems() {
      axios.get(`${baseURL}/cart/?token=${this.token}`).then(
        (response) => {
          if (response.status === 200) {
            this.$router.push("/cart");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log('any', this.id, this.products, this.categories);
    this.product = this.products.find((product) => product.id == this.id);
    console.log('any pro', this.product);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    console.log('any cat', this.category);
    this.token = localStorage.getItem("token");
      axios.get(`${baseURL}/cart/?token=${this.token}`).then(
        (response) => {
          if (response.status == 200) {
            const result = response.data;
            // store cartitems and total price in two variables
            this.cartItems = result.cartItems;
          }
        },
        (error) => {
          console.log(error);
        }
      );
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    products() {
      return this.$store.getters.products;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style>
.category {
  font-weight: 400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

#add-to-cart-button {
  background-color: #febd69;
}

#wishlist-button {
  background-color: #b9b9b9;
  border-radius: 0;
}

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
</style>