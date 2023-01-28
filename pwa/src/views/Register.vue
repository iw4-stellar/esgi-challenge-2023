<template>
  <div class="register">
    <div class="content prose">
      <h1 class="text-center">{{ $t('register.title') }}</h1>
      <div class="form">
        <registration-form />
      </div>
      <div class="divider uppercase">
        {{ $t('base.or') }}
      </div>

      <div class="text-center">
        <router-link to="/login" class="link link-hover">
          {{ $t('register.signIn') }}
        </router-link>
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
  @apply mt-8 pb-8 min-h-screen flex justify-center;
}

.content {
  @apply p-8 w-full max-w-lg;
}
</style>