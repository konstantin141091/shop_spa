import Vue from 'vue'

export const state = () => ({
  cart: [],
  last_cart: [],
});

export const mutations = {
  pushProductToCart: (state, product) => {
    state.cart.push(product);
    Vue.set(product, 'quantity', 1);
    Vue.set(product, 'totalPriceProduct', product.price)
  },
  increment: (state, index) => {
    const cartItem = state.cart.find(item => item.id === index)
    cartItem.quantity++;
    cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
  },
  save_cart: (state, value) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  init_cart: (state, value) => {
    state.cart = value;
  }
};


export const actions = {
  addToCart: async function ({commit, state}, product) {
    const cartItem = state.cart.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('increment', product.id)
    }
    commit('save_cart')
  },

  initCart: async function({ commit}) {
    if (process.browser) {
      commit('init_cart', JSON.parse(localStorage.getItem('cart' ) || '[]'))
    } else {
      commit('init_cart', [])
    }
  }
};

export const getters = {
  all: state => state.cart,
  total_price: state => {
    return state.cart.reduce((total, product) => {
      return total + product.quantity * product.price
    }, 0)
  }
};
