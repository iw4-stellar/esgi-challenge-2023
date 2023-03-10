<template>
  <div class="verify-email">
    <div class="header prose">
      <h1>{{ $t('register.verifyEmail.title') }}</h1>
      <p>{{ $t('register.verifyEmail.greeting') }}</p>
      <p v-html="$t('register.verifyEmail.subtitle')" />
      <p class="font-bold">
        If you did not receive the verification code, please check your spam folder or contact us for
        assistance.
      </p>
    </div>

    <div class="body">
      <fun-form
        :initial-values="form"
        :validate="validate"
        @submit="handleSubmit"
      >
        <template #default="{ onSubmit, isSubmitting }">
          <form @submit.prevent="onSubmit">
            <div class="form-control">
              <label class="label">
                <span class="label-text">
                  {{ $t('register.verifyEmail.form.code.label') }}
                </span>
              </label>
              <fun-form-field
                name="code"
                type="text"
                class="input w-48"
                required
              />
            </div>

            <!-- TODO: Add error message -->
    
            <div class="mt-4 flex gap-4 items-center">
              <button
                type="submit"
                class="btn btn-primary"
                :class="{ loading: isSubmitting }"
              >
                {{ $t('register.verifyEmail.form.submit') }}
              </button>
              <button
                v-show="!isSubmitting"
                type="reset"
                class="btn btn-ghost"
              >
                {{ $t('register.verifyEmail.form.resend') }}
              </button>
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

interface VerifyEmailInterface {
  code: string;
}

export default defineComponent({
  name: 'RegisterVerifyEmail',
  components: {
    FunForm,
    FunFormField,
  },
  props: {
    nextStep: Function,
  },
  data() {
    return {
      form: {
        code: '',
      } as VerifyEmailInterface,
    };
  },
  methods: {
    validate(_values: VerifyEmailInterface) {
      const errors = {}
      return errors;
    },
    handleSubmit(_values: VerifyEmailInterface, setIsLoading: (isSubmitting: boolean) => void) {
      setIsLoading(true);

      setTimeout(() => {
        this.nextStep && this.nextStep();
      }, 3000);
    },
  }
});
</script>

<style lang="postcss" scoped>
.header {
  @apply mb-4;
}
</style>