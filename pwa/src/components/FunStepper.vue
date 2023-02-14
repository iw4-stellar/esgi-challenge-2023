<template>
  <div class="fun-stepper">
    <div class="steps">
      <div v-for="{ title }, index in steps" class="step" :class="{ 'step-primary': activeStepIndex >= index }">
        {{ title }}
      </div>
    </div>

    <slot :name="activeStep.name" v-bind="{ previousStep, nextStep }" class="step-body"></slot>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import type { Step } from '../../types/fun-stepper'

export default defineComponent({
  name: 'FunStepper',
  props: {
    steps: {
      type: Array<Step>,
      required: true,
    },
  },
  data() {
    return {
      activeStepIndex: 0,
    };
  },
  computed: {
    activeStep() {
      return this.steps[this.activeStepIndex];
    }
  },
  methods: {
    previousStep() {
      this.activeStepIndex = Math.max(0, this.activeStepIndex - 1);
    },
    nextStep() {
      this.activeStepIndex = Math.min(this.activeStepIndex + 1, this.steps.length);
    }
  }
});
</script>

<style lang="postcss" scoped>
.fun-stepper {}

.steps {
  @apply steps-vertical md:steps-horizontal md:w-full mb-4;
}

.steps>.step::before {
  @apply w-1 md:w-full md:h-1;
}

.steps>.step:first-child::before {
  @apply hidden;
}

.fun-stepper>.step-body {}
</style>