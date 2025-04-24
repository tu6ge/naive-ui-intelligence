import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'border-radius',
    type: 'number',
    default: 6,
    description: '边框圆角大小',
    version: '2.25.0',
    value: ''
  },
  {
    name: 'color',
    type: 'string',
    default: undefined,
    description: '颜色',
    version: '2.25.0',
    value: ''
  },
  {
    name: 'icon-color',
    type: 'string',
    default: undefined,
    description: '图标颜色',
    version: '2.25.0',
    value: ''
  },
  {
    name: 'size',
    type: 'number',
    default: 24,
    description: '尺寸',
    version: '2.25.0',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots, name: 'icon' }

export default document
