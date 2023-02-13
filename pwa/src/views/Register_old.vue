<template>
  <div class="register">
    <div class="content prose">
      <div>
        <h1 class="text-center">{{ $t('register.title') }}</h1>
      </div>
      <div v-if="currentStep == FORM_STEP">
        <fun-form :initial-values="form" :validate="validate" @submit="handleFormSubmit">
          <template #default="{ errors, isSubmitting, handleSubmit }">
            <form class="form" @submit.prevent="handleSubmit">
              <!-- Name -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    {{ $t('register.form.name.label') }}
                    <span class="text-accent">*</span>
                  </span>
                </label>
                <fun-form-field name="name" type="text" class="input capitalize"
                  :placeholder="$t('register.form.name.placeholder')" required />
              </div>

              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    {{ $t('register.form.email.label') }}
                    <span class="text-accent">*</span>
                  </span>
                </label>
                <fun-form-field name="email" type="email" class="input lowercase"
                  :placeholder="$t('register.form.email.placeholder')" required />
              </div>

              <!-- Password -->
              <div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">
                      {{ $t('register.form.password.label') }}
                      <span class="text-accent">*</span>
                    </span>
                  </label>
                  <div class="input-group">
                    <fun-form-field name="password" :type="passwordType" class="input flex-1" minlength="8"
                      maxlength="32" required :placeholder="$t('register.form.password.placeholder')" />
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
                      {{ $t('register.form.password.rules.length', { min: 8, max: 32 }) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Confirm password -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text">
                    {{ $t('register.form.confirmPassword.label') }}
                    <span class="text-accent">*</span>
                  </span>
                </label>
                <div class="input-group">
                  <input name="confirmPassword" :type="passwordType" class="input" minlength="8"
                    maxlength="32" :placeholder="$t('register.form.confirmPassword.placeholder')" required />
                  <!-- <fun-form-field name="confirmPassword" :type="passwordType" class="input" minlength="8"
                    maxlength="32" :placeholder="$t('register.form.confirmPassword.placeholder')" required /> -->
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
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{{ $t('register.form.errors.confirmPassword.match') }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit -->
              <div class="form-control mt-6">
                <button class="btn btn-primary" :class="{
                  'loading': isSubmitting,
                }">
                  {{ $t('register.form.submit') }}
                </button>
              </div>

              <p class="text-center text-xs text-accent">
                * {{ $t('base.required') }}
              </p>
            </form>
          </template>
        </fun-form>
      </div>
      <div class="divider uppercase">
        {{ $t('base.or') }}
      </div>

      <div class="py-2">
        <router-link to="/login" class="btn btn-secondary btn-outline btn-block">
          {{ $t('register.signIn') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import RegistrationForm from '../components/registration/RegistrationForm.vue';
import FunForm from './../components/funComponents/FunForm.vue';
import FunFormField from './../components/funComponents/form/FunFormField.vue';

export default {
  name: 'Register',
  components: {
    RegistrationForm,
    FunForm,
    FunFormField,
  },
  setup() {
    const FORM_STEP = 0;
    const currentStep = ref(FORM_STEP);

    return {
      FORM_STEP,
      currentStep,
    };
  },
  data() {
    return {
      form: {
        name: 'Rudro Khan',
        email: 'rudrokhan@email.com',
        password: '',
        confirmPassword: '',
      },
      showPassword: false,
    };
  },
  computed: {
    passwordType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    validate(values) {
      const errors = {};

      // if (values.password.length < 8 || values.password.length > 32)
      //   errors.password = 'length'

      if (values.password !== values.confirmPassword)
        errors.confirmPassword = 'match'

      return errors;
    },
    handleFormSubmit(values, setIsSubmitting) {
      setIsSubmitting(true);
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
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