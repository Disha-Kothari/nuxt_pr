import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "/home/disha.kothari/practice/front-end/nuxt_pr/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}