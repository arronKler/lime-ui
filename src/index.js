import Button from './packages/button'
import Form from './packages/form'
import FormItem from './packages/form-item'
import Input from './packages/input'
import Notice from './packages/notice/notice.js'

const components = {
  lButton: Button,
  lForm: Form,
  lFormItem: FormItem,
  lInput: Input
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });


  // Vue.prototype.$message = Message;
  Vue.prototype.$notice = Notice;
}

export default install