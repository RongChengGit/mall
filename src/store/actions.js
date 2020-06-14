import {
  ADD_PRODUCT ,
  ADD_PRODUCT_COUNT
} from './mutation_types'
const actions = {
  addProduct( context , payload){
    // return 一个promise 将操作结果传回详情页 详情页根据传回的数据选择toast显示的文本
    return new Promise( (resolve , reject )=>{
      let isEmptyPayload = true;
      Object.keys(payload).map(
        item =>{
          if(payload[item]==undefined){
            isEmptyPayload = false;
          }
        }
      )
      if(!isEmptyPayload){
        reject('添加失败 商品数据不完整 请重试');
        return;
      };
      let oldProduct = null;
      for(let item of context.state.productList){
        if(item.id == payload.id){
          oldProduct = item;
        }
      }
      if(!oldProduct){
        context.commit(ADD_PRODUCT , payload);
        resolve('已添加至购物车');
        
      }else{
        context.commit(ADD_PRODUCT_COUNT , oldProduct);
        resolve('商品数量加一');
      }
    })
  }
}

export default actions