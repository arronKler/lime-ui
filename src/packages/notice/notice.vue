<template>
  <div class="notice">
    <div class="notice-main" v-for="item in notices" :key="item.id">
      <div class="notice-title">{{item.title}}</div>
      <div class="notice-content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notices: []
    }
  },
  methods: {
    add(notice) {
      let id = +new Date()
      notice.id = id
      this.notices.push(notice)

      const duration = notice.duration
      setTimeout(() => {
        this.remove(id)
      }, duration * 1000)
    },
    remove(id) {
      for(let i = 0; i < this.notices.length; i++) {
        if (this.notices[i].id === id) {
          this.notices.splice(i, 1)
          break;
        }
      }
    }
  }
}
</script>

<style>
.notice {
  position: fixed;
  right: 20px;
  top: 60px;
  z-index: 1000;
}

.notice-main {
  min-width: 100px;
  padding: 10px 20px;
  box-shadow: 0 0 4px #aaa;
  margin-bottom: 10px;
  border-radius: 4px;
}

.notice-title {
  font-size: 16px;
}
.notice-content {
  font-size: 14px;
  color: #777;
}
</style>