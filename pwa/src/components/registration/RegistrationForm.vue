<template>
  <form class="registration-form" @submit.prevent>
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
        <button v-for="userType in userTypes" :key="userType.value" class="btn border border-2 border-primary flex-1"
          :class="{
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
      <input type="text" class="f-input" autofocus
        :placeholder="$t('register.registrationForm.form.name.placeholder')" />

      <div class="error">
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
    <!-- Email -->
    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.email.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="email" class="f-input" :placeholder="$t('register.registrationForm.form.email.placeholder')" />
      <!-- Email Errors -->
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ $t('register.registrationForm.errors.required') }}</span>
        </div>
      </div>
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ $t('register.registrationForm.errors.email.invalid') }}</span>
        </div>
      </div>
      <div class="error">
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
    <!-- Password -->
    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.password.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="password" class="f-input" :placeholder="$t('register.registrationForm.form.password.placeholder')" />
      <!-- Password errors -->
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ $t('register.registrationForm.errors.required') }}</span>
        </div>
      </div>
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ $t('register.registrationForm.errors.password.length') }}</span>
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
      <input type="text" class="f-input"
        :placeholder="$t('register.registrationForm.form.confirmPassword.placeholder')" />

      <!-- Confirm password Errors -->
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ $t('register.registrationForm.errors.required') }}</span>
        </div>
      </div>
      <div class="error">
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

    <p class="text-xs mt-4">
      <span class="text-accent">*</span> {{ $t('base.required') }}
    </p>

    <!-- Submit -->
    <div class="form-control mt-6">
      <button class="btn btn-primary">
        {{ $t('register.registrationForm.form.submit') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">

export default {
  name: 'RegistrationForm',
  data() {
    return {
      form: {
        type: null as null | string,
      }
    };
  },
  computed: {
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
  }
}
</script>

<style lang="postcss" scoped>

</style>