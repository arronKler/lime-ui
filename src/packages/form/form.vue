<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
export default {
 name: 'lForm',
 provide() {
   return {
     form: this
   }
 },
 props: {
   model: {
     type: Object
   },
   rules: {
     type: Object
   }
 },
 mounted() {
   this.$nextTick(() => {
     console.log('form name', this.$options.componentName)
   })
 },
 methods: {
   resetFileds() {
     this.fileds.forEach(filed => {
       field.resetFileds()
     })
   },

   validate(cb) {
     let isValid = true
     let counter = 0
     this.fileds.forEach(filed => {
       filed.validate('', err => {
         if (err) {
           isValid = false
         }
        
          counter++
         if (coutner === this.fileds.length) {
           if (callback === 'function')
            cb(isValid)
         }
       })
     })
   }
 },
 data() {
   return {
     fileds: []
   }
 },
 created() {
   /* 初始化的时候缓存form-item */
   this.$on('on-form-item-add', (filed) => {
     console.log('form-item-add')
     if (filed)
      this.fileds.push(filed)
   })

  /* form-item销毁的时候移除 */
   this.$on('on-form-item-destroy', (filed) => {
     console.log('form-item-destroy')
     if (filed.prop) 
      this.fileds.splice(this.fileds.indexOf(filed), 1)
   })
 }
}
</script>