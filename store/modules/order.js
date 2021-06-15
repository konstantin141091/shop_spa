import axios from 'axios'

export default {
  state: {
    ORDER_CURRENT: null,
    BASE_URL: 'http://laravel.local',
  },

  getters: {
    ORDER_CURRENT (state) {
      return state.ORDER_CURRENT
    },
  },

  mutations: {
    SET_ORDER_CURRENT(state, value) {
      state.ORDER_CURRENT = value
    },
  },

  actions: {
    async API_ADD_ORDER ({ commit, state }, credentials) {
      await axios.get(state.BASE_URL + '/sanctum/csrf-cookie');
      const answer = await axios.post(state.BASE_URL + '/api/order', credentials)
        .then((response) => {
          if (response.data.order) {
            commit('SET_ORDER_CURRENT', response.data.order);
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },
  }
}
