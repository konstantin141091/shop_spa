export const state = () => ({
  products: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const products = (await this.$axios.$get('http://sausage-mgn.xyz/api/product')).products;
      commit('setProducts', products)
    } catch (e) {
      console.log('errorFetch', e);
      commit('setError', e, {root: true});
      throw e;
    }
  },
};

export const getters = {
  all: state => state.products,
  one: state => id => state.products.find(product => product.id === id),
  news: state => state.products.filter(product => product.news),
};
