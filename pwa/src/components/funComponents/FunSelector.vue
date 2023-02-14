<template>
  <div class="fun-selector">
    <slot
      name="option"
      v-for="option in options"
      :key="option.value"
      v-bind="{
        option,
        onClick: () => select(option),
        isActive: option.value === value,
      }"
    ></slot>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';


interface Option {
  value: string;
}

export default defineComponent({
  name: 'FunSelector',
  props: {
    modelValue: {},
    options: {
      type: Array<Option>,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      value: null as any,
    };
  },
  methods: {
    isActive(option: Option) {
      return option.value === this.value;
    },
    select(option: Option) {
      const value = option.value;

      this.value = value;
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    },
  },
  created() {
    this.value = this.modelValue;
  },
});
</script>