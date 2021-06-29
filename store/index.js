export const strict = false

export const state = () => ({
  error: null,
  searchValue: ''
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  setValue: (state, value) => {
    state.searchValue = value
  }
}

export const actions = {
  getValue: ({commit}, value) => {
    commit('setValue', value)
  }
}

export const getters = {
  error: state => state.error,
  searchValue: state => state.searchValue
}
