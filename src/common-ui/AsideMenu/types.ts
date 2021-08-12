import type { VNode } from 'vue'

interface menuOption {
  label: string
  id?: string | number
  key?: string
  href?: string
  children?: menuOption[]
  disabled?: boolean
  type?: string
  icon?: string | (() => VNode)
}

export type { menuOption }
