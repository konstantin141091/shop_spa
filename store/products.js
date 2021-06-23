//   getters: {
//     PRODUCTS: state => state.products,
//     PRODUCTS_NEW: state => state.products.filter(products => products.news),
//     PRODUCTS_SALE: state => state.products.filter(products => products.sale > 0),
//     PRODUCT_ONE: state => id => state.products.find(pr => pr.id === id),
//   },
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
      const products = (await this.$axios.$get('http://shop-sausage/api/product')).products
      commit('setProducts', products)
    } catch (e) {
      console.log('errorFetch', e)
      commit('setError', e, {root: true})
      throw e
    }
  },
}

export const getters = {
  all: state => state.products,
  one: state => id => state.products.find(product => product.id === id)
}
