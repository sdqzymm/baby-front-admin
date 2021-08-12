interface menuOption {
  label: string
  id?: string | number
  key?: string
  href?: string
  children?: menuOption[]
  disabled?: boolean
  type?: string
  icon?: any
}

export type { menuOption }
