<template>
  <div class="user-type-selector">
    <div class="header prose">
      <h1>{{ $t('register.userType.title') }}</h1>
    </div>

    <div class="body">
      <fun-selector class="selector" :options="userTypes" @change="handleTypeChange">
        <template #option="{ option, isActive, onClick }">
          <div class="user-type" :class="{ 'user-type-active': isActive }" @click="onClick">
            <figure class="relative">
              <img :src="option.img" />
            </figure>
            <div class="card-body prose">
              <h2 class="card-title">{{ option.title }}</h2>
              <p>{{ option.subtitle }}</p>
            </div>
          </div>
        </template>
      </fun-selector>
    </div>

    <div class="flex justify-end">
      <button v-if="userType" class="btn btn-ghost" @click="handleNext">
        {{  $t('register.userType.next', { type: $t(`base.${userType}`)}) }}

        <i class="pi pi-arrow-right ml-2" ></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FunSelector from '@/components/funComponents/FunSelector.vue';

import CompanyImg from '../../assets/company.jpg'
import FunderImg from '../../assets/funder.jpg'

type UserType = 'company' | 'funder';

export default defineComponent({
  name: 'RegisterUserTypeSelector',
  components: {
    FunSelector,
  },
  props: {
    nextStep: {
      type: Function,
    },
  },
  inject: ['getUserType', 'setUserType'],
  computed: {
    userType(): UserType {
      return (this.getUserType as () => UserType)();
    },
    userTypes() {
      return [
        {
          value: 'company',
          img: CompanyImg,
          title: this.$t('register.userType.options.company.title'),
          subtitle: this.$t('register.userType.options.company.subtitle'),
        },
        {
          value: 'funder',
          img: FunderImg,
          title: this.$t('register.userType.options.funder.title'),
          subtitle: this.$t('register.userType.options.funder.subtitle'),
        },
      ];
    },
  },
  methods: {
    handleTypeChange(type: UserType) {
      (this.setUserType as (type: UserType) => void)(type);
    },
    handleNext() {
      this.nextStep && this.nextStep();
    }
  },
});
</script>

<style lang="postcss" scoped>
.user-type-selector {
}

.header { 
  @apply mb-4;
}

.selector {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 mb-4;
}

.user-type {
  @apply card card-compact card-side bg-base-100 border border-2 cursor-pointer overflow-hidden;
}

.user-type-active {
  @apply border-primary;
}

.user-type figure {
  @apply flex-none w-32 rounded-none;
}

.card-body {
  @apply max-w-none;
}
</style>