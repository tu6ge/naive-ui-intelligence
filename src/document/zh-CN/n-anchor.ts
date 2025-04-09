import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'affix',
    type: 'boolean',
    default: false,
    value: '-',
    description: 'Anchor 是否像 Affix 一样展示，如果设定为 `true`，它还会接受 [Affix](https://www.naiveui.com/zh-CN/light/components/affix#Affix-Props) 的 Props',
    version: ''
  },
  {
    name: 'bound',
    type: 'number',
    default: 12,
    value: '-',
    description: '元素开始触发 anchor 的偏移量',
    version: ''
  },
  {
    name: 'ignore-gap',
    type: 'boolean',
    default: false,
    value: '-',
    description: '如果设定为 `true`, 导航将显示在准确的 href 区域',
    version: ''
  },
  {
    name: 'offset-target',
    type: 'string | HTMLElement | Window | Document | (() => HTMLElement)',
    default: 'document',
    value: '-',
    description: '计算偏移位置相对的元素或选择器。如果你滚动的不是整个文档而只是其中的一部分，那你有可能要设定这个',
    version: ''
  },
  {
    name: 'show-rail',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否展示侧面的轨道',
    version: ''
  },
  {
    name: 'show-background',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否展示 link 的背景',
    version: ''
  },
  {
    name: 'type',
    type: "'rail' | 'block'",
    default: 'rail',
    value: 'rail/block',
    description: "Anchor 的风格，`'block'` 为块状风格，`'rail'` 为轨道风格",
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
