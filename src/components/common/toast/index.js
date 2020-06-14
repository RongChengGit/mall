import Toast from './Toast.vue'

// 组件的插件式封装及使用

let obj = {}
// 1. 对象内声明一个install函数   Vue.use的时候会自动调用此函数  并传入vue
obj.install = function(Vue){
  //2. 将导入的toast组件传入Vue.extend 生成一个组件构造器
  let toastConstructor = Vue.extend(Toast);
  // 3.使用此组件构造器生成toast组件对象
  let toast = new toastConstructor();
  // 4.将元素挂载到某个元素上
  toast.$mount(document.createElement('div'));
  // 5.挂载后添加到body中 这个时候才能取到toast的$el 不经过组件构造器取不到$el 无法挂载
  document.body.appendChild(toast.$el);
  // 以上步骤主要是为了能把组件挂载到页面上 否则组件中的template页面部分无法显示
  
  // 6.将组件放在Vue原型上方便使用
  Vue.prototype.$toast = toast;
}


export default obj