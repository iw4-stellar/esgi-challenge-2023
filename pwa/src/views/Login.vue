<template>
  <div class="login">
    <div class="content prose">
      <h1 class="text-center">{{ $t('login.title') }}</h1>
      <div class="form">
        <!-- Email -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ $t('login.form.email.label') }}</span>
          </label>
          <input type="text" class="f-input" />
        </div>
        <!-- Password -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ $t('login.form.password.label') }}</span>
          </label>
          <input type="password" class="f-input" />
        </div>
        <!-- Errors -->
        <div class="error mb-6">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ $t('login.form.errors.invalid') }}</span>
          </div>
        </div>

        <!-- Submtit -->
        <div class="form-control">
          <button class="btn btn-primary">
            {{ $t('login.form.submit') }}
          </button>
        </div>
      </div>

      <div class="divider uppercase">
        {{ $t('base.or') }}
      </div>

      <div class="text-center">
        <router-link to="/register" class="link link-hover">
          {{ $t('login.signUp') }}
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="postcss">
.login {
  @apply mt-8 pb-8 min-h-screen flex justify-center;
}

.content {
  @apply p-8 w-full max-w-lg;
}
</style>