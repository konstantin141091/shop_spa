import Vue from 'vue'

export const state = () => ({
  cart: [],
  lastCart: [],
});

export const mutations = {
  pushProductToCart: (state, product) => {
    state.cart.push(product);
    Vue.set(product, 'quantity', 1);
    Vue.set(product, 'totalPriceProduct', product.price)
  },
  removeFromCart: (state, index) => {
    state.cart.splice(index, 1)
  },
  increment: (state, index) => {
    const cartItem = state.cart.find(item => item.id === index)
    cartItem.quantity++;
    cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
  },
  decrement: ( state, index) => {
    const cartItem = state.cart.find(item => item.id === index);
    if (cartItem.quantity > 1) {
      cartItem.quantity--
      cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
    }
  },
  deleteAllCart: (state) => {
    state.cart = [];
  },
  saveCart: (state, value) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  initCart: (state, value) => {
    state.cart = value;
  },
  copyCart: (state) => {
    state.lastCart = [];
    state.lastCart = JSON.parse(localStorage.getItem('cart' ) || '[]');
  },
};


export const actions = {
  addToCart: async function ({commit, state}, product) {
    const cartItem = state.cart.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('increment', product.id)
    }
    commit('saveCart')
  },

  initCart: async function({ commit}) {
    if (process.browser) {
      commit('initCart', JSON.parse(localStorage.getItem('cart' ) || '[]'))
    } else {
      commit('initCart', [])
    }
  },

  decrementToProduct: ({commit}, index) => {
    commit('decrement', index)
    commit('saveCart')
  },
  incrementToProduct: ({commit}, index) => {
    commit('increment', index)
    commit('saveCart')
  },

  deleteFromCart: ({commit}, index) => {
    commit('removeFromCart', index);
    commit('saveCart')
  },

  clearCart: ({commit}) => {
    commit('copyCart');
    localStorage.clear();
    commit('deleteAllCart');
  },

  apiAddCart: async function({dispatch, commit}, credentials) {
    try {
      const answer = await this.$axios.post('http://sausage-mgn.xyz/api/basket', credentials)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;

    } catch (e) {
      console.log('errorFetch', e);
      commit('setError', e, {root: true});
      throw e;
    }
  },
};

export const getters = {
  all: state => state.cart,
  totalPrice: state => {
    return state.cart.reduce((total, product) => {
      return total + product.quantity * product.price
    }, 0)
  },
  lastCart: state => state.lastCart
};
