import {
  create,
  NButton,
  NCard,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
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
    NLayoutSider
  ]
})

export default naive
