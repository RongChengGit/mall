import {
  ADD_PRODUCT,
  ADD_PRODUCT_COUNT,
  MINUS_PRODUCT_COUNT
} from './mutation_types'
// mutations 中功能最好单一 只负责更改state状态  逻辑判断交给actions
const mutations = {
  [ADD_PRODUCT]( state , payload){
    payload.checked = false;
    state.productList.push(payload);
    
  },
  [ADD_PRODUCT_COUNT]( state , payload ){
    payload.count++;
  },
  [MINUS_PRODUCT_COUNT](state , payload){
    payload.count--;
  }
}

export default mutations