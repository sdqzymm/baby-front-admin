import type { menuOption } from '@/common-ui/AsideMenu/types'

export const menuOptions: menuOption[] = [
  {
    label: '且听风吟',
    id: '1',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  {
    label: '1973年的弹珠玩具',
    id: '2',
    disabled: true,
    children: [
      {
        label: '鼠',
        id: '3'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    id: '4',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    id: 'dance-dance-dance',
    icon: 'PersonOutline',
    children: [
      {
        type: 'group',
        label: '人物',
        id: '5',
        children: [
          {
            label: '叙事者',
            id: '6',
            icon: 'PersonOutline'
          },
          {
            label: '羊男',
            id: '7'
          }
        ]
      },
      {
        label: '饮品',
        id: '8',
        children: [
          {
            label: '威士忌',
            id: '9',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
          }
        ]
      },
      {
        label: '食物',
        id: '10',
        children: [
          {
            label: '三明治',
            id: '11'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        id: '12'
      }
    ]
  }
]
