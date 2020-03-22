import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeId:'',
    cartList: []
  },
  mutations: {
    changeId(state,id) {
      state.storeId=id
    },
    addCartList(state,payload) {
      let oldProduct = null
      for (let item of state.cartList) {
        if(item.id === payload.id){
          oldProduct = item;
        }
      }
      //oldProduct（原来的数组中有相同的商品）
      if(oldProduct){//如果有 相同的商品，则不添加

      }else {//没有则添加
        state.cartList.push(payload)
      }
    },
    clearCart(state) {
      state.cartList = []
    }
  },
  actions: {
  },
  modules: {
  }
})
