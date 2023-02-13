<template>
  <div class="profile-form">
    <div class="header prose">
      <h1>{{ $t('register.profile.title') }}</h1>
      <p>{{ $t('register.profile.subtitle') }}</p>
    </div>

    <div class="body">
      <fun-form :initial-values="form" @submit="handleSubmit">
        <template #default="{ onSubmit, errors, isSubmitting }">
          <form @submit.prevent="onSubmit">
            <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ $t('register.profile.form.name.label') }}
              </span>
            </label>
            <fun-form-field name="name" type="text" class="input" required />
          </div>
    
          <div class="mt-4 flex gap-4 items-center">
            <button type="submit" class="btn btn-primary btn-block" :class="{ loading: isSubmitting }">
              {{ $t('register.profile.form.submit') }}
            </button>
          </div>
        </form>
        </template>
    </fun-form>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FunForm from '@/components/funComponents/FunForm.vue';
import FunFormField from '@/components/funComponents/form/FunFormField.vue';

export default defineComponent({
  name: 'RegisterProfileForm',
  components: {
    FunForm,
    FunFormField,
  },
  data() {
    return {
      form: {
        name: '',
      }
    };
  },
  methods: {
    handleSubmit(values, setIsSubmitting) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        this.$router.replace('index')
      }, 3000);
    },
  },
});
</script>

<style lang="postcss" scoped>
.header {
  @apply mb-4;
}
</style>