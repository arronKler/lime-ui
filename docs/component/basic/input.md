---
title: Input
---

# 输入框

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<template>
  <l-input v-model="inputValue"></l-input>
  <div>输入的值是: {{inputValue}}</div>
</template>

```vue
<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  }
}
</script>
<template>
  <l-input v-model="inputValue"></l-input>
  <div>输入的值是: {{inputValue}}</div>
</template>
```