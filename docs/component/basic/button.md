---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <l-button>{{button}}</l-button>
  <l-button type="primary">主色</l-button>
  <l-button type="success">成功</l-button>
  <l-button type="info">提示</l-button>
</template>


### 使用
```html
<l-button>默认</l-button>
<l-button type="primary">主色</l-button>
<l-button type="success">成功</l-button>
<l-button type="info">提示</l-button>
```