---
title: Notice
---

# 提示

填写提示内容，点击按钮弹出提示

<script>
export default {
  data() {
    return {
      content: '提示内容'
    }
  },
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: this.content || '内容',
        duration: 3
      })
    }
  }
}
</script>
<template>
  <div>
    <l-input v-model="content"></l-input>
    <l-button @click.native="onNotice" type="primary" style="margin-top: 20px;">触发提示</l-button>
  </div>
</template>

```vue
<script>
export default {
  data() {
    return {
      content: '提示内容'
    }
  },
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: this.content || '内容',
        duration: 3
      })
    }
  }
}
</script>
<template>
  <div>
    <l-input v-model="content"></l-input>
    <l-button @click.native="onNotice" type="primary" style="margin-top: 20px;">触发提示</l-button>
  </div>
</template>
```