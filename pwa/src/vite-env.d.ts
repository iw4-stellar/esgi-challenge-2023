/// <reference types="vite/client" />

import type { AxiosInstance } from "axios";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: AxiosInstance
  }
}