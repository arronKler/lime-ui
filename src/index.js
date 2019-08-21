import Button from './packages/button'

const components = {
  lButton: Button,
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });


  // Vue.prototype.$message = Message;
  // Vue.prototype.$notice = Notice;
}

export default install