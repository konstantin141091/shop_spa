import Vue from 'vue'

export const state = () => ({
  // cart: () => {
  //   if (process.browser) {
  //     JSON.parse(localStorage.getItem('cart' ) || '[]')
  //   } else {
  //     JSON.parse( '[]')
  //   }
  // },
  // TODO нужно решить вопрос с тем чтобы читать корзину из локал.сторадж
  cart: [],
  last_cart: [],
});

export const mutations = {
  pushProductToCart: (state, product) => {
    state.cart.push(product);
    Vue.set(product, 'quantity', 1);
    Vue.set(product, 'totalPriceProduct', product.price);
  },
  increment: (state, index) => {
    const cartItem = state.cart.find(item => item.id === index);
    cartItem.quantity++;
    cartItem.totalPriceProduct = cartItem.quantity * cartItem.price
  },
  save_cart: (state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

  // setCategories(state, categories) {
  //   state.categories = categories
  // }
};

export const actions = {
  addToCart: ({commit, state}, product) => {
    const cartItem = state.cart.find(item => item.id === product.id);
    if (!cartItem) {
      commit('pushProductToCart', product)
    } else {
      commit('increment', product.id)
    }
    commit('save_cart')
  },

  // async cartState() {
  //   if (localStorage) {
  //     return JSON.parse(localStorage.getItem('cart' ) || '[]');
  //   } else {
  //     return [];
  //   }
  // }
};

export const getters = {
  all: state => state.cart,
  total_price: state => {
    return state.cart.reduce((total, product) => {
      return total + product.quantity * product.price
    }, 0)
  }
};
