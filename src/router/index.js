import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPanel from '@/views/AdminPanel/AdminPanel.vue'
import categoriesPage from '@/views/Category/CategoriesPage.vue'
import CatgeoryEdit from '@/views/Category/CategoryEdit.vue'
import ProductsPage from '@/views/Products/ProductPage.vue'
import AddCategory from '@/views/Category/AddCategory.vue'
import EditProducts from '@/views/Products/EditProduct.vue'
import ProductDetails from '@/views/Products/ProductDetails.vue'
import Signup from '@/views/SignUp.vue'
import Signin from '@/views/SignIn.vue'
import Wishlist from '@/views/Products/WishList.vue'
import ListProducts from '@/views/Category/ListProducts.vue'
import Cart from '@/views/Cart/Cart.vue'
import Checkout from '@/views/Checkout/Checkout.vue'
import search from '@/views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPanel
  },
  {
    path: '/categories',
    name: 'adminCategory',
    component: categoriesPage
  },
  {
    path: '/Products',
    name: 'adminProducts',
    component: ProductsPage
  },
  {
    path: '/Products/:id',
    name: 'editProducts',
    component: EditProducts
  },
  {
    path : '/products/show/:id',
    name : 'ShowDetails',
    component: ProductDetails
  },
  {
    path: '/category/:id',
    name: 'editCategory',
    component: CatgeoryEdit
  },
  {
    path: '/category/add',
    name: 'addCategory',
    component: AddCategory
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },
  {
    path : '/search/:searchInput',
    name : 'Search',
    component : search
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
