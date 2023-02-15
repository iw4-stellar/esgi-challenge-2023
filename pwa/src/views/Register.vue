<template>
  <div class="register max-w-4xl mx-auto">
    <fun-stepper :steps="steps">
      <template #user-type="{ nextStep }">
        <user-type-selector :next-step="nextStep" />
      </template>
      <template #login="{ previousStep, nextStep }">
        <login-form
          :previous-step="previousStep"
          :next-step="nextStep"
        />
      </template>
      <template #verify-email="{ nextStep }">
        <verify-email :next-step="nextStep" />
      </template>
      <template #profile-form="{ nextStep }">
        <profile-form :next-step="nextStep" />
      </template>
    </fun-stepper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Step } from '@/../types';
import FunStepper from '@/components/FunStepper.vue';

import UserTypeSelector from '@/components/register/UserTypeSelector.vue'
import LoginForm from '@/components/register/LoginForm.vue'
import VerifyEmail from '@/components/register/VerifyEmail.vue'
import ProfileForm from '@/components/register/ProfileForm.vue'

type UserType = 'funder' | 'company';

export default defineComponent({
  name: 'RegisterView',
  components: {
    FunStepper,
    UserTypeSelector,
    LoginForm,
    VerifyEmail,
    ProfileForm,
  },
  provide() {
    return {
      getUserType: this.getUserType,
      setUserType: this.setUserType,
    };
  },
  beforeRouteLeave() {
    if (!this.userType) return true;

    return window.confirm('Are you sure?');
  },
  data() {
    return {
      userType: null as null | UserType,
    };
  },
  computed: {
    steps(): Step[] {
      return [
        {
          name: 'user-type',
          title: this.$t('register.steps.userType')
        },
        {
          name: 'login',
          title: this.$t('register.steps.login')
        },
        {
          name: 'verify-email',
          title: this.$t('register.steps.verifyEmail')
        },
        {
          name: 'profile-form',
          title: this.$t('register.steps.profile')
        },
      ];
    },
  },
  methods: {
    getUserType() {
      return this.userType;
    },
    setUserType(type: UserType) {
      this.userType = type;
    },
  },
});
</script>

<style lang="postcss" scoped>

</style>