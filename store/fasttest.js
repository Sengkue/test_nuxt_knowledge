export const state = () => ({
  fastUser:{}
})

export const mutations = {
  setFastTest(state, data){
    state.fastUser = data
  }
}

export const actions = {
  selectFastTest({commit}, params){
    this.$axios.get('https://reqres.in/api/users',{params}).then((data)=>{
      commit('setFastTest', data.data)
    })
  }
}
