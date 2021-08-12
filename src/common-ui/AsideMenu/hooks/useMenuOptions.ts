import { watchEffect, Component, h } from 'vue'
import { NIcon } from 'naive-ui'
import { menuOption } from '../types'

export const useMenuOptions = (menuOptions: menuOption[]) => {
  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const recur = (menuOption: menuOption) => {
    menuOption.key = menuOption.id + ''
    if (menuOption.icon) {
      menuOption.icon = renderIcon(
        require(`@vicons/ionicons5/${menuOption.icon}.js`).default
      )
    }
    if (menuOption.children) {
      menuOption.children.forEach((menu) => {
        recur(menu)
      })
    }
  }

  watchEffect(() => {
    menuOptions.forEach((menuOption) => {
      recur(menuOption)
    })
  })
}
