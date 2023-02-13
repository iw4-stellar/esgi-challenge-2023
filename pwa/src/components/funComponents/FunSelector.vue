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

export default defineComponent({
  name: 'FunSelector',
  props: {
    modelValue: {},
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      value: null,
    };
  },
  methods: {
    isActive(option) {
      return option.value === this.value;
    },
    select(option) {
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