import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'distance',
    type: 'number',
    default: 0,
    description: '触发加载的距离阈值',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'scrollbar-props',
    type: 'Object',
    default: undefined,
    description: '属性参考 [Scrollbar props](scrollbar#Scrollbar-Props)',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'on-load',
    type: '() => Promise<void> | void',
    default: undefined,
    description: '滚动到底部时的回调函数',
    version: '2.38.2',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
