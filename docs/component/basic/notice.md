---
title: Notice
---

# 提示
<script>
export default {
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: '内容',
        duration: 3
      })
    }
  }
}
</script>
<template>
  <div>
    <button @click="onNotice">触发</button>
  </div>
</template>