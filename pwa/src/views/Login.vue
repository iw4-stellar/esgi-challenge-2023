<template>
  <div class="login">
    <div class="header text-center prose">
      <h1>{{ $t('login.title') }}</h1>
    </div>
    <div class="content">
      <fun-form :initial-values="form" @submit="handleFormSubmit">
        <template #default="{ onSubmit, errors, isSubmitting }">
          <form @submit.prevent="onSubmit">
            <div class="errrors">
              <div v-if="isInvalidCredentials(errors)" class="error">
                <i class="pi pi-times"></i>
                <span>{{ $t('login.form.errors.global.unauthorized') }}</span>
              </div>
            </div>

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
import { defineComponent } from 'vue';
import FunForm from '../components/funComponents/FunForm.vue';
import FunFormField from '../components/funComponents/form/FunFormField.vue';
import { useAuthStore } from '@/store/auth';

interface LoginInterface {
  email: string;
  password: string;
}

type LoginErrors = Partial<Record<keyof LoginInterface, string>>;

export default defineComponent({
  name: 'Login',
  components: {
    FunForm,
    FunFormField,
  },
  setup() {
    const authStore = useAuthStore();
    const { login } = authStore;

    return {
      login,
    }
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
    async handleFormSubmit(
      values: LoginInterface,
      setIsSubmitting: (isSubmitting: boolean) => void,
      setErrors: (errors: LoginErrors) => void,
    ) {
      const credentials = {
        username: values.email,
        password: values.password,
      };

      setIsSubmitting(true)
      try {
        await this.login(credentials);
        this.$router.replace('/');
      } catch (error: any) {
        if (error.response?.status === 401) {
          setErrors({
            email: 'invalid',
            password: 'invalid',
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    isInvalidCredentials(errors: LoginErrors) {
      return errors && errors.email === 'invalid' && errors.password === 'invalid';
    }
  },
});
</script>

<style lang="postcss">
.login {
  @apply mt-8 pb-8 min-h-screen flex flex-col items-center;
}

.content {
  @apply p-8 w-full max-w-lg;
}
</style>