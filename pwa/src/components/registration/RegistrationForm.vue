<template>
  <form class="registration-form" @submit.prevent>
    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.name.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="text" class="input input-bordered" autofocus
        :placeholder="$t('register.registrationForm.form.name.placeholder')" />

      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>This field is required</span>
        </div>
      </div>
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.email.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="email" class="input input-bordered"
        :placeholder="$t('register.registrationForm.form.email.placeholder')" />

      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>This field is required</span>
        </div>
      </div>
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Email address already in use</span>
        </div>
      </div>
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.password.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="password" class="input input-bordered"
        :placeholder="$t('register.registrationForm.form.password.placeholder')" />
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>This field is required</span>
        </div>
      </div>
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Password should have a length of 8-12 characters</span>
        </div>
      </div>
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">
          {{ $t('register.registrationForm.form.confirmPassword.label') }}
          <span class="text-accent">*</span>
        </span>
      </label>
      <input type="text" class="input input-bordered"
        :placeholder="$t('register.registrationForm.form.confirmPassword.placeholder')" />
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>This field is required</span>
        </div>
      </div>
      <div class="error">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Passwords don't match</span>
        </div>
      </div>
    </div>

    <p class="text-xs mt-4">
      <span class="text-accent">*</span> Required
    </p>

    <div class="form-control mt-6">
      <button class="btn btn-primary">
        {{ $t('register.registrationForm.form.submit') }}
      </button>
    </div>
  </form>
</template>

<style lang="postcss" scoped>
.error {
  @apply alert bg-transparent px-0 py-2 text-error;
}
</style>