export const state = () =>({
  testUser:{}
})


export const mutations ={
  setTestUser( state, data){
    state.testUser = data
  }
}

export const actions ={
  selectUser({commit}, params){
    this.$axios.get('https://reqres.in/api/users',{params}).then((data)=>{
      commit('setTestUser', data.data)
    })
  }
}


