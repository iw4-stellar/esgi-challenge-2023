export type FunFormValue = string | number

export type FunFormValues = {
  [key: string]: string | number
}

export type FunFormSubmitStatus = boolean

export type FunFormErrors = {
  [key: string]: string
}

export interface FunFormData {
  values: FunFormValues
  errors: FunFormErrors
  isSubmitting: FunFormSubmitStatus
}

export type FunFormValueGetter = (name: string) => FunFormValue

export type FunFormValueSetter = (name: string, value: FunFormValue) => undefined

export type FunFormSubmitStatusSetter = (isSubmitting: boolean) => undefined