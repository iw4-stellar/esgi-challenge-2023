export interface Step {
  title: string;
  name: string;
  isActive?: boolean;
}


export interface Stepper {
  steps: Step[];
  activeStep: number;

  previous: () => void
  next: () => void
}
