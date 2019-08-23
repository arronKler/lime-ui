<template>
  <button class="lime-button" :class="{[`lime-button-${type}`]: true}" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
  name: 'Button',
  props: {
    type: {
      validator (value) {
          return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
      },
      type: String,
      default: 'default'
    },
    size: {
      validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
      },
      default: 'default'
    }
  }
}
</script>
