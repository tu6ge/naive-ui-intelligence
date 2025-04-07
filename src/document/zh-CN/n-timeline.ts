import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'horizontal',
    type: 'boolean',
    default: "'false'",
    description: '水平的',
    value: '',
    version: ''
  },
  {
    name: 'icon-size',
    type: 'number',
    default: 'undefined',
    description: '图标大小',
    value: '',
    version: ''
  },
  {
    name: 'item-placement',
    type: "'left' | 'right'",
    default: "'left'",
    description: '方向',
    value: 'left/right',
    version: ''
  },
  {
    name: 'size',
    type: "'medium' | 'large'",
    default: "'medium'",
    description: '大小',
    value: 'medium/large',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
