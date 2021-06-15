import Vuex from 'vuex';
import products from './modules/products'
import categories from './modules/categories'
import order from './modules/order'
import cart from './modules/cart'
import auth from './modules/auth'
import all from './modules/all'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      products, categories, order, cart, auth, all,
    }

  })
};

export default createStore
