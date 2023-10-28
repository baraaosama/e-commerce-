import { createStore } from 'vuex'
import axios from 'axios';
const baseURL = 'https://limitless-lake-55070.herokuapp.com';

export default createStore({
  state: {
    categories: null,
    products: null,
    users: null,
    loading: true,
    cartCount:0,
    token: null,
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
    loading: state => state.loading,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchCategories({state, commit}) {
      await axios.get(`${baseURL}/category/`)
      .then(res => {
        commit('setCategories', res.data)
        console.log('ok')
        state.loading = false
      })
      .catch(err => {
        console.log(err);
      })
    },
    async fetchProducts({state, commit}) {
      await axios.get(`${baseURL}/product/`)
      .then(res => {
        commit('setProducts', res.data)
        state.loading = false
      })
      .catch(err => {
        console.log(err);
      })
    },
    async cartCount ({state}) {
      state.token = localStorage.getItem('token');
      if (state.token) {
        await axios.get(`${baseURL}/cart/?token=${state.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              state.cartCount = Object.keys(response.data.cartItems).length;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    resetCartCount({state}) {
      state.cartCount = 0;
    },
    searchProduct({state}, searchInput) {
      products = state.products.filter(product => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    }

  }
})
