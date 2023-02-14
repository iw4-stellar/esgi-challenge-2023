<template>
  <div class="login-form">
    <div class="header prose">
      <button class="btn btn-ghost mb-2" @click="handleBack">
        <i class="pi pi-arrow-left mr-2"></i>
        {{ $t('register.login.back') }}
      </button>
      <h1>{{  $t('register.login.title') }}</h1>
    </div>

    <div class="body">
      <fun-form :initial-values="form" :validate="validateLogin" @submit="handleSubmit">
        <template #default="{ onSubmit, errors, isSubmitting }">
          <form @submit.prevent="onSubmit">
            <div class="errors">
              <div v-if="errors.email && errors.email === 'unique'" class="error">
                <i class="pi pi-times"></i>
                <span>{{ $t('register.login.form.errors.email.unique') }}</span>
              </div>
            </div>

            <!-- Email -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">
                  {{ $t('register.login.form.email.label') }}
                  <span class="text-accent">*</span>
                </span>
              </label>
              <fun-form-field name="email" type="email" class="input lowercase" required />
            </div>

            <!-- Password -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">
                  {{ $t('register.login.form.password.label') }}
                  <span class="text-accent">*</span>
                </span>
              </label>
              <div class="input-group">
                <fun-form-field name="password" :type="passwordType" class="input flex-1" minlength="8"
                  maxlength="32" required />
                <button class="btn btn-square" tabindex="-1" @click.prevent="toggleShowPassword()">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div class="label">
                <span class="label-text-alt text-accent">
                  {{ $t('register.login.form.password.rules.length', { min: 8, max: 32 }) }}
                </span>
              </div>
            </div>

            <!-- Confirm password -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">
                  {{ $t('register.login.form.confirmPassword.label') }}
                  <span class="text-accent">*</span>
                </span>
              </label>
              <div class="input-group">
                <fun-form-field name="confirmPassword" :type="passwordType" class="input flex-1" minlength="8"
                  maxlength="32" :placeholder="$t('register.login.form.confirmPassword.placeholder')" required />
                <button class="btn btn-square" tabindex="-1" @click.prevent="toggleShowPassword()">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              <!-- Confirm password Errors -->
              <div v-if="errors.confirmPassword">
                <div v-show="errors.confirmPassword === 'match'" class="error">
                  <i class="pi pi-times"></i>
                  <span>{{ $t('register.login.form.errors.confirmPassword.match') }}</span>
                </div>
              </div>
            </div>

            <!-- Submit -->
            <div class="form-control mt-6">
              <button class="btn btn-primary mb-2" :class="{
                'loading': isSubmitting,
              }">
                {{ $t('register.login.form.submit') }}
              </button>
              <p class="text-center text-xs text-accent">
                * {{ $t('base.required') }}
              </p>
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
import { useAuthStore } from '@/store/auth';

interface LoginFormInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

type LoginFormErrors = Partial<Record<keyof LoginFormInterface, string>>;

export default defineComponent({
  name: 'Registerlogin.form',
  components: {
    FunForm,
    FunFormField,
  },
  props: {
    previousStep: Function,
    nextStep: Function,
  },
  setup() {
    const authStore = useAuthStore();

    const { register } = authStore;

    return { register };
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
      } as LoginFormInterface,
      showPassword: false,
    };
  },
  computed: {
    passwordType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    validateLogin(values: LoginFormInterface) {
      const { password, confirmPassword } = values;
      const errors: LoginFormErrors = {};
      
      if (password !== confirmPassword)
        errors.confirmPassword = 'match'

      return errors;
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    handleBack() {
      this.previousStep && this.previousStep();
    },
    async handleSubmit(values: LoginFormInterface, setIsSubmitting: (isSubmitting: boolean) => void, setErrors: (errrors: LoginFormErrors) => void) {
      setIsSubmitting(true);
      try {
        await this.register(values);

        this.nextStep && this.nextStep();
      } catch (error: any) {
        setErrors(error.response.data.errors as LoginFormErrors);
      } finally {
        setIsSubmitting(false);
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
.header {
  @apply mb-4;
}
</style>