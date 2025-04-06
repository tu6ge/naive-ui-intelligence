import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bottom',
    type: 'number | string',
    default: 40,
    value: '-',
    description: 'BackTop 距离页面底部的高度',
    version: ''
  },
  {
    name: 'listen-to',
    type: 'string | HTMLElement',
    default: undefined,
    value: '-',
    description: '监听滚动的元素，如果为 `undefined` 会监听距离最近的一个可滚动的祖先节点',
    version: ''
  },
  {
    name: 'right',
    type: 'number | string',
    default: 40,
    value: '-',
    description: 'BackTop 距离页面右侧的宽度',
    version: ''
  },
  {
    name: 'show',
    type: 'boolean',
    default: undefined,
    value: '-',
    description: '是否显示 BackTop（受控）',
    version: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement',
    default: 'body',
    value: '-',
    description: 'BackTop 渲染的容器节点',
    version: ''
  },
  {
    name: 'visibility-height',
    type: 'number',
    default: 180,
    value: '-',
    description: '滚动时触发显示回到顶部的高度',
    version: ''
  },
  {
    name: 'on-update:show',
    type: '(value: boolean) => void',
    default: undefined,
    value: '-',
    description: 'BackTop 的 show 改变时触发事件',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
