/// <reference types="vite/client" />
import type { AxiosInstance } from "axios";
import Funded from '../types'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: AxiosInstance
  }
}