import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'container-class',
    type: 'string',
    default: 'undefined',
    description: '容器的类名',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'container-style',
    type: 'string | Object',
    default: 'undefined',
    description: '容器的样式',
    version: '2.25.0',
    value: ''
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    description: '限制通知框显示的个数',
    version: '',
    value: ''
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right'",
    default: 'top-right',
    description: '所有通知框显示的位置',
    version: "'top' | 'bottom' 2.29.0",
    value: 'top/bottom/top-right/top-left/bottom-left/bottom-right'
  },
  {
    name: 'scrollable',
    type: 'boolean',
    default: 'true',
    description: "通知是否可滚动，对于 `placement` 为 `'top'` 和 `'bottom'` 不生效",
    version: '',
    value: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement',
    default: "'body'",
    description: 'Notification 容器节点的位置',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
