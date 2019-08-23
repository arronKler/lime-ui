import Vue from 'vue'
import Notice from './notice.vue'

Notice.newInstance = (properties) => {
  let props = properties || {}
  const Instance = new Vue({
    render(h) {
      return h(Notice, {
        props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const notice = component.$children[0]

  return {
    add(_notice) {
      notice.add(_notice)
    }, 
    remove(id) {

    }
  }
}

let noticeInstance


export default (_notice) => {
  noticeInstance = noticeInstance || Notice.newInstance()
  noticeInstance.add(_notice)
}
