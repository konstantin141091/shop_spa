export const strict = false

export const state = () => ({
  error: null,
  searchValue: '',
  isMobile: false,
  isDesktop: true,
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  setValue: (state, value) => {
    state.searchValue = value
  },
  switchMobile: (state) => {
    state.isMobile = true
    state.isDesktop = false
  },
  switchDesktop: (state) => {
    state.isMobile = false
    state.isDesktop = true
  },
}

export const actions = {
  getValue: ({commit}, value) => {
    commit('setValue', value)
  },
  setMobile: ({commit}) => {
    commit('switchMobile')
  },
  setDesktop: ({commit}) => {
    commit('switchDesktop')
  },
}

export const getters = {
  error: state => state.error,
  searchValue: state => state.searchValue,
  isMobile: state => state.isMobile,
  isDesktop: state => state.isDesktop,
}
