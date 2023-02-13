<template>
  <template>
    <fun-form>
      <template #default="{ errors, handleSubmit }" @submit="handleFormSubmit">
        <form class="registration-form" @submit.prevent="handleSubmit()">
          <div class="form-control">
            <!-- User Type -->
            <label class="label">
              <span class="label-text">
                {{ $t('register.registrationForm.form.type.label') }}
                <span v-if="form.type" class="font-bold">
                  {{ $t(`register.registrationForm.form.type.options.${form.type }`) }}
                </span>
              </span>
            </label>
            <div class="btn-group flex w-full">
              <button v-for="userType in userTypes" :key="userType.value"
                class="btn border border-2 border-primary flex-1" :class="{
                  [userType.value === form.type ? 'btn-active' : 'btn-ghost']: true
                }" @click="form.type = userType.value">
                {{ userType.label }}
              </button>
            </div>
          </div>
          <!-- Name -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ $t('register.registrationForm.form.name.label') }}
                <span class="text-accent">*</span>
              </span>
            </label>
            <input v-model="form.name" type="text" class="input capitalize" required
              :placeholder="$t('register.registrationForm.form.name.placeholder')" />
            <div v-if="errors.name">
              <div v-show="errors.name === 'required'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.required') }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Email -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ $t('register.registrationForm.form.email.label') }}
                <span class="text-accent">*</span>
              </span>
            </label>
            <input v-model="form.email" type="email" class="input lowercase" required
              :placeholder="$t('register.registrationForm.form.email.placeholder')" />
            <!-- Email Errors -->
            <div v-if="errors.email">
              <div v-show="errors.email === 'required'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.required') }}</span>
                </div>
              </div>
              <div v-show="errors.email === 'invalid'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.email.invalid') }}</span>
                </div>
              </div>
              <div v-show="errors.email === 'unavailable'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.email.unavailable') }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Password -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ $t('register.registrationForm.form.password.label') }}
                <span class="text-accent">*</span>
              </span>
            </label>
            <input v-model="form.password" type="password" class="input" minlength="8" maxlength="32" required
              :placeholder="$t('register.registrationForm.form.password.placeholder')" />

            <!-- Password errors -->
            <div v-if="errors.password">
              <div v-show="errors.password === 'required'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.required') }}</span>
                </div>
              </div>
              <div v-show="errors.password === 'length'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.password.length', { min: 8, max: 32 }) }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Confirm password -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ $t('register.registrationForm.form.confirmPassword.label') }}
                <span class="text-accent">*</span>
              </span>
            </label>
            <input v-model="form.confirmPassword" type="password" class="input" minlength="8" maxlength="32" required
              :placeholder="$t('register.registrationForm.form.confirmPassword.placeholder')" />

            <!-- Confirm password Errors -->
            <div v-if="errors.confirmPassword">
              <div v-show="errors.confirmPassword === 'required'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.required') }}</span>
                </div>
              </div>
              <div v-show="errors.email === 'match'" class="error">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('register.registrationForm.errors.confirmPassword.match') }}</span>
                </div>
              </div>
            </div>
          </div>

          <p class="text-xs mt-4">
            <span class="text-accent">*</span> {{ $t('base.required') }}
          </p>

          <!-- Submit -->
          <div class="form-control mt-6">
            <button class="btn btn-primary" :class="{
              'loading': isLoading,
            }">
              {{ $t('register.registrationForm.form.submit') }}
            </button>
          </div>
        </form>
      </template>
    </fun-form>
  </template>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '../../store/auth';
import FunForm from '../funComponents/FunForm.vue';

export default {
  name: 'RegistrationForm',
  components: {
    FunForm,
  },
  data() {
    return {
      form: {
        type: null as null | string,
        name: 'Rudro Khan',
        email: 'rudrokhan.pro@gmail.com',
        password: 'password',
        confirmPassword: 'password',
      },
      errors: {
        password: 'required',
      } as { [key: string]: string },
    };
  },
  computed: {
    ...mapState(useAuthStore, ['isLoading']),
    userTypes() {
      return [
        {
          value: 'contributor',
          label: this.$t('register.registrationForm.form.type.options.contributor')
        },
        {
          value: 'company',
          label: this.$t('register.registrationForm.form.type.options.company')
        },
      ]
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['register']),
    handleFormSubmit(values, setIsLoading) {
      setIsLoading(true);
      console.log(this.form)
      this.register(this.form)
    },
  },
}
</script>

<style lang="postcss" scoped>

</style>