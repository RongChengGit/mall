const getters = {
  productListLength(state , getters){
    return state.productList.length;
  },

  productList(state , getters){
    return state.productList;
  }

}

export default getters