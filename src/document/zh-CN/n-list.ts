import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: false,
    description: '是否显示边框',
    version: '',
    value: ''
  },
  {
    name: 'clickable',
    type: 'boolean',
    default: false,
    description: '列表项是否有可点击样式',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'hoverable',
    type: 'boolean',
    default: false,
    description: '列表项是否有悬浮样式',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'show-divider',
    type: 'boolean',
    default: true,
    description: '是否显示标项之间的分割线',
    version: '2.32.2',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
