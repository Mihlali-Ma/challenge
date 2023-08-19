import { createStore } from 'vuex'
import axios from 'axios'

const cUrl = ""

export default createStore({
  state: {
    Users:null,
    User:null,
    products:null,
    product:null,
    spinner:false,
    token:null,
    msg:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, Users){
      state.Users = Users
    },
    setUser(state, User){
      state.User = User
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, Product){
      state.product = Product
    },
    setSpinner(state, spinner){
      state.spinner = spinner
    },
    setToken(state, toke){
      state.token = toke 
    },
    setMsg(state, msg){
      state.msg = msg
    }
  },
  actions: {
    async fetchUsers(context){
      try{
        const {results} = await axios.get(`${cUrl}users`)
        context.commit("setUsers",data.results)
      }catch(e){
        context.commit("setMsggit")
      }
    }
  },
  modules: {
  }
})
