export const state = () =>({
  user:{
    data:[]
  }
})

export const mutations ={
  setUser(state, data){
    state.user = data
  }
}

export const actions={
  selectUser({commit}, params){
    this.$axios.get('https://reqres.in/api/users?',{params}).then((data)=>{
      commit('setUser', data.data)
    })
  },

  login({commit},form){
    this.$axios.post('https://reqres.in/api/login', form).then((data)=>{
      this.$router.push('/')
    })
  }


}
