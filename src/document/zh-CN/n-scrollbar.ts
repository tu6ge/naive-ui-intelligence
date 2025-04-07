import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '内容 div 的类名',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'content-style',
    type: 'string | object',
    default: 'undefined',
    description: '内容 div 的 style',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'size',
    type: 'number',
    default: 'undefined',
    description: '滚动条的大小',
    version: '2.34.4',
    value: ''
  },
  {
    name: 'trigger',
    type: "'hover' | 'none'",
    default: "'hover'",
    description: "显示滚动条的时机，'none' 表示一直显示",
    version: '2.29.1',
    value: 'hover/none'
  },
  {
    name: 'x-scrollable',
    type: 'boolean',
    default: 'false',
    description: '是否可以横向滚动',
    version: '',
    value: ''
  },
  {
    name: 'x-placement',
    type: "'top' | 'bottom'",
    default: "'bottom'",
    description: '横向滚动时滚动条的位置',
    version: '2.40.0',
    value: 'top/bottom'
  },
  {
    name: 'y-placement',
    type: "'left' | 'right'",
    default: "'right'",
    description: '纵向滚动时滚动条的位置',
    version: '2.40.0',
    value: 'left/right'
  },
  {
    name: 'on-scroll',
    type: '(e: Event) => void',
    default: 'undefined',
    description: '滚动的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
