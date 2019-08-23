<template>
  <div>
    <label v-if="label" :class="{ 'lime-form-item__label-required': isRequired}">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="lime-form-item__error">{{validateMessage}}</div>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import Emitter from '../../mixins/emitter';
export default {
  name: 'lFormItem',
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      isRequired: false,
      validateState: '',
      validateMessage: ''
    }
  },
  computed: {
    filedValue() {
      return this.form.model[this.prop]
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('lForm', 'on-form-item-add', this)

      // 初始值不一定是空字符串，所以缓存起来，重置的时候用
      this.initialFieldValue = this.fieldValue; 

      this.setRules()
    }
  },
  beforeDestroy() {
    this.dispatch('lForm', 'on-form-item-destroy', this)
  },
  methods: {
    setRules() {
      const rules = this.getCurrentRule()
      if (rules.length > 0) {
        rules.every((rule) => {
          // 如果当前校验规则中有必填项，则标记出来
          this.isRequired = rule.required;
        });
      }

      this.$on('on-form-change', this.onFiledChange)
      this.$on('on-form-blur', this.onFiledBlur)
    },

    getCurrentRule() {
      const formRules = this.form.rules
      let rules = formRules ? formRules[this.prop] : []
      return rules
    },

    validate(_trigger, cb = () => {}) {
      const rules = this.getCurrentRule()

      if (rules.length === 0) return true

      // 使用async validator验证规则
      let desc = {
        [this.prop]: rules
      }
      const validator = new AsyncValidator(desc)
      let model = {
        [this.prop]: this.filedValue
      }

      validator.validate(model, { firstFields: true}, err => {
        this.validateState = err ? 'error' : 'success'
        this.validateMessage = err ? err[0].message : ''
        cb(this.validateMessage)
      })

    },

    onFiledChange(_val) {
      this.validate('change')
    },
    onFiledBlur(_val) {
      this.validate('blur')
    },

    resetFiled() {
      this.validateState = ''
      this.validateMessage = ''

      // 重置为初始值
      this.form.model[this.prop] = this.initialFieldValue;
    }
  }
}
</script>