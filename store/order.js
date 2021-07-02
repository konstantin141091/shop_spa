export const state = () => ({
  orderCurrent: null
})

export const mutations = {}

export const actions = {
  async apiAddOrder({commit}, credentials) {
     try {
       const response = await this.$axios.$get('http://sausage-mgn.xyz/api/order')
     } catch (e) {
       console.log(e)
     }
  }
}

export const getters = {
  orderCurrent: state => state.orderCurrent
}
