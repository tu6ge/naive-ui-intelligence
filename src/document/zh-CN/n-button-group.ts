import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: undefined,
    value: 'tiny/small/medium/large',
    description: '在组内的按钮的尺寸。如果设定，内部的按钮尺寸将不生效',
    version: ''
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: false,
    value: '-',
    description: '组内按钮的排列方式',
    version: ''
  }
]
export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots, name: 'button' }

export default document
