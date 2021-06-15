import axios from 'axios'

export default {
  namespaced: true,

  state: {
    AUTHENTICATED: false,
    USER: null,
    ADMIN: false,
    // TODO здесь тоже свой url
    BASE_URL: 'http://laravel.local',
  },

  getters: {
    AUTHENTICATED (state) {
      return state.AUTHENTICATED
    },
    USER (state) {
      return state.USER
    },
    ADMIN (state) {
      return state.ADMIN
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.AUTHENTICATED = value
    },
    SET_USER (state, value) {
      state.USER = value
    },
    SET_ADMIN(state, value) {
      state.ADMIN = value
    }
  },

  actions: {
    async SIGN_IN ({ dispatch, state }, credentials) {
      await axios.get(state.BASE_URL + '/sanctum/csrf-cookie');
      const answer = await axios.post(state.BASE_URL + '/login', credentials)
        .then((response) => {
          if (response.status === 204) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    async SIGN_OUT ({ dispatch, state }) {
      await axios.post(state.BASE_URL + '/logout');

      return dispatch('ME')
    },

    async REGISTER ({ dispatch, state }, credentials) {
      await axios.get(state.BASE_URL + '/sanctum/csrf-cookie');
      const answer = await axios.post(state.BASE_URL + '/register', credentials)
        .then((response) => {
          if (response.status === 201) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    async UPDATE ({dispatch, state}, credentials) {
      await axios.get(state.BASE_URL + '/sanctum/csrf-cookie');
      const answer = await axios.put(state.BASE_URL + '/api/user', credentials,)
        .then((response) => {
          if (response.status === 204) {
            dispatch('ME');
          }
          return response;
        })
        .catch((error) => {
          return error.response;
        });
      return answer;
    },

    ME ({ commit, state }) {
      return axios.get(state.BASE_URL + '/api/user')
        .then((response) => {
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', response.data);
          if(response.data.is_admin) {
            commit('SET_ADMIN', true);
          }
        })
        .catch((error) => {
          commit('SET_AUTHENTICATED', false);
          commit('SET_USER', null);
          console.log(error);
        })
    }
  }
}
