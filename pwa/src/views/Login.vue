<template>
  <div class="login">
    <div class="content prose">
      <h1 class="text-center">{{ $t('login.title') }}</h1>
      <div class="form">
        <div v-if="failed" class="error mb-4">
          <div class="self-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ $t('login.form.errors.invalid') }}</span>
          </div>
        </div>

        <fun-form :initial-values="form" @submit="handleFormSubmit">
          <template #default="{ onSubmit, errors, isSubmitting }">
            <form @submit.prevent="onSubmit">
              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{ $t('login.form.email.label') }}</span>
                </label>
                <fun-form-field type="email" name="email" class="input" required />
              </div>

              <!-- Password -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">{{ $t('login.form.password.label') }}</span>
                </label>
                <fun-form-field name="password" type="password" class="input" required />
              </div>

              <!-- Submtit -->
              <div class="form-control mt-4">
                <button class="btn btn-primary" :class="{ loading: isSubmitting }" type="submit">
                  {{ $t('login.form.submit') }}
                </button>
              </div>
            </form>
          </template>
        </fun-form>
      </div>

      <div class="divider uppercase">
        {{ $t('base.or') }}
      </div>

      <div>
        <router-link to="/register" class="btn btn-secondary btn-outline btn-block">
          {{ $t('login.signUp') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import FunForm from '../components/funComponents/FunForm.vue';
import FunFormField from '../components/funComponents/form/FunFormField.vue';
import { defineComponent } from 'vue';

interface LoginInterface {
  email: string;
  password: string;
}

export default defineComponent({
  name: 'Login',
  components: {
    FunForm,
    FunFormField,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      } as LoginInterface,
      failed: true,
    };
  },
  methods: {
    handleFormSubmit(values: LoginInterface, setIsSubmitting: (isSubmitting: boolean) => void) {
      alert()
      setIsSubmitting(true)
    }
  },
  async created() {
    const { data } = await this.$api('/test');

    console.log(data);
  }
});
</script>

<style lang="postcss">
.login {
  @apply mt-8 pb-8 min-h-screen flex justify-center;
}

.content {
  @apply p-8 w-full max-w-lg;
}
</style>