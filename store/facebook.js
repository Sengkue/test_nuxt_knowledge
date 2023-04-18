export const state = () =>({
  facebook1:false,
  facebook2:false,
})

export const mutations ={
  setFacebook1(state, data){
    state.facebook1 = data
  },
  setFacebook2(state, data){
    state.facebook2 = data
  },
}

export const actions={
  login({commit},form){
    this.$axios.post('https://reqres.in/api/login', form).then((data)=>{
      this.$router.push('/')
    })
  }

}
