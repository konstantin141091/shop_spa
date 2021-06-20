// export default {
//   namespaced: true,
//
//   state: {
//     products: [],
//   },
//
//   getters: {
//     PRODUCTS: state => state.products,
//     PRODUCTS_NEW: state => state.products.filter(products => products.news),
//     PRODUCTS_SALE: state => state.products.filter(products => products.sale > 0),
//     PRODUCT_ONE: state => id => state.products.find(pr => pr.id === id),
//   },
//   mutations: {
//     SET_PRODUCTS: (state, products) => {
//       state.products = products;
//     },
//   },
//
//   actions: {
//     async fetch({commit}) {
//       try {
//         let products = await this.$axios.$get('http://shop-sausage/api/product');
//         commit('SET_PRODUCTS', products);
//         return products
//       } catch (e) {
//         console.log(e)
//       }
//     },
//   }
// }

export const state = () => ({
    products: []
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetch({commit}) {
    try {
      let response = await this.$axios.$get('http://shop-sausage/api/product')
      commit('setProducts', response.products)
    }catch (e) {
      console.log('error', e)
    }
  },
}

export const getters = {
  products: s => s.products,
  productOne: s => id => s.products.find(pr => pr.id === id),
}


