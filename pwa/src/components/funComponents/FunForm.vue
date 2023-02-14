<template>
  <slot v-bind="{ values, errors, onSubmit, isSubmitting }"></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FunFormData, FunFormErrors, FunFormValues } from '../../../types';

export default defineComponent({
  name: 'FunForm',
  props: {
    initialValues: {
      type: Object,
      default: () => ({}),
    },
    validate: {
      type: Function,
      default: () => (values: FunFormValues): FunFormErrors => ({}),
    },
  },
  emits: ['submit'],
  data(): FunFormData {
    return {
      values: {},
      errors: {},
      isSubmitting: false,
    }
  },
  methods: {
    onSubmit() {
      this.errors = this.validate(this.values)
      const hasErrors = Object.keys(this.errors).length > 0
      if (!hasErrors) {
        this.$emit('submit', this.values, this.setIsSubmitting, this.setErrors)
      }
    },
    getValueByName(name: string) {
      return this.values[name]
    },
    setValueByName(name: string, value: any) {
      this.values[name] = value
    },
    getIsSubmitting() {
      return this.isSubmitting;
    },
    setIsSubmitting(isSubmitting: boolean) {
      this.isSubmitting = isSubmitting
    },
    getErrors() {
      return this.errors;
    },
    setErrors(errors: object) {
      this.errors = errors;
    },
  },
  provide() {
    return {
      getValueByName: this.getValueByName,
      setValueByName: this.setValueByName,
      getIsSubmitting: this.getIsSubmitting,
    }
  },
  created() {
    this.values = { ...this.initialValues }
  },
});
</script>