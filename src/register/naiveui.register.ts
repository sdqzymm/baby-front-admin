import {
  create,
  NAnchor,
  NAnchorLink,
  NButton,
  NCard,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NSpace
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NConfigProvider,
    NCard,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NAnchor,
    NAnchorLink,
    NMenu
  ]
})

export default naive
