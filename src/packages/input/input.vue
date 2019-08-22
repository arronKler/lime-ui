<template>
  <div class="lime-input-container">
    <input
      class="lime-input"
      type="text"
      :class="inputClass"
      @input="handleInput"
      @blur="handleBlur">
  </div>
</template>

<script>
import { oneOf } from '../../utils/assist';
import Emitter from '../../mixins/emitter';

export default {
  name: 'lInput',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
      },
      default: 'default'
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(v) {
      this.currentValue = v
    }
  },
  computed: {
    inputClass() {
      const prefix = 'lime-input'
      return {
        [`${prefix}__size-${this.size}`]: true
      }
    }
  },
  methods: {
    handleInput(_event) {
      const value = _event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('lFormItem', 'on-form-change', value) // 通知FormItem值有所改变
    },
    handleBlur() {
      this.dispatch('lFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>
