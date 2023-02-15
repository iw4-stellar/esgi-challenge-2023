<template>
  <div class="fun-selector">
    <slot
      v-for="option in options"
      :key="option.value"
      name="option"
      v-bind="{
        option,
        onClick: () => select(option),
        isActive: option.value === value,
      }"
    />
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
    modelValue: {
      required: true,
    },
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
  created() {
    this.value = this.modelValue;
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
});
</script>