import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import { menuOption } from '../types'

export const useRenderMenuLabel = (option: menuOption) => {
  if ('href' in option) {
    return h('a', { href: option.href, target: '_blank' }, option.label)
  }
  return option.label
}

export const useRenderMenuIcon = (option: menuOption) => {
  if (!option.icon) return h(NIcon, null, { default: () => h(BookmarkOutline) })
  return option.icon()
}

export const useRenderExpandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
