export const state = () => ({
  orderCurrent: null
});

export const mutations = {
  setOrderCurrent (state, value) {
    state.orderCurrent = value
  },
};

export const actions = {
  async apiAddOrder({commit}, credentials) {
     try {
       const answer = await this.$axios.post('http://sausage-mgn.xyz/api/order', credentials)
         .then((response) => {
           if (response.data.order) {
             commit('setOrderCurrent', response.data.order);
           }
           return response;
         });
       return answer;

     } catch (e) {
       console.log(e)
     }
  }
};

export const getters = {
  orderCurrent: state => state.orderCurrent
};
