---
title: Form
---
# 表单组件


## 表单验证

<br>

<script>
export default {
  mounted() {
    console.log('ss', this.$options.name)
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate() {
      console.log('doVlidate')
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
<template>
  <l-form ref="form" :model="form" :rules="rules">
    <l-form-item label="用户名" prop="name">
      <l-input v-model="form.name"></l-input>
    </l-form-item>
    <l-form-item label="邮箱" prop="email">
      <l-input v-model="form.email"></l-input>
    </l-form-item>
    <l-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</l-button>
  </l-form>
</template>

```vue
<script>
export default {
  mounted() {
    console.log('ss', this.$options.name)
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doValidate() {
      console.log('doVlidate')
      this.$refs.form.validate((valid) => {
        console.log(valid)
      })
    }
  }
}
</script>
<template>
  <l-form ref="form" :model="form" :rules="rules">
    <l-form-item label="用户名" prop="name">
      <l-input v-model="form.name"></l-input>
    </l-form-item>
    <l-form-item label="邮箱" prop="email">
      <l-input v-model="form.email"></l-input>
    </l-form-item>
    <l-button @click.native="doValidate" style="margin-top:20px" type="primary">触发验证表单</l-button>
  </l-form>
</template>
```
