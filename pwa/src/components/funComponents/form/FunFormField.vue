<template>
  <Component
    :is="as"
    v-bind="{ value, onInput, disabled }"
  >
    <slot />
  </Component>
</template>

<script lang="ts">
import type { FunFormValue, FunFormValueGetter, FunFormValueSetter } from './../../../../types';

export default {
  name: 'FunFormField',
  inject: ['getValueByName', 'setValueByName', 'getIsSubmitting'],
  props: {
    name: {
      type: String,
      required: true,
    },
    as: {
      type: String,
      default: 'input',
    },
  },
  data() {
    return {
      modelValue: null,
    }
  },
  computed: {
    value() {
      return (this.getValueByName as FunFormValueGetter)(this.name)
    },
    disabled() {
      return (this.getIsSubmitting as () => boolean)();
    }
  },
  methods: {
    onInput(event: InputEvent) {
      const value: FunFormValue = (event.target as HTMLInputElement).value
      return (this.setValueByName as FunFormValueSetter)(this.name, value)
    },
  }
}
</script>