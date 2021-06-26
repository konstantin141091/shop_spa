export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async fetch({commit}) {
    try {
      const categories = (await this.$axios.$get('http://shop-sausage/api/category')).categories
      commit('setCategories', categories)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  all: state => state.categories
}
