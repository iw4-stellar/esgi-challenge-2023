<template>
  <div class="register">
    <div class="content prose">
      <h1 class="text-center">{{ $t('register.title') }}</h1>
      <div class="form">
        <registration-form />

        <div class="divider">OR</div>

        <div class="text-center">
          <a href="" class="link link-hover">I already have an account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RegistrationForm from '../components/registration/RegistrationForm.vue';

export default {
  name: 'Register',
  components: {
    RegistrationForm,
  },
}
</script>

<style lang="postcss" scoped>
.register {
  @apply mt-8 h-screen flex justify-center;
}

.content {
  @apply p-8 w-full max-w-lg;
}
</style>