import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bottom',
    type: 'number | string',
    default: 'undefined',
    description: '按钮组的 CSS `bottom` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'left',
    type: 'number | string',
    default: 'undefined',
    description: '按钮组的 CSS `left` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'position',
    type: "'relative' | 'absolute' | 'fixed'",
    default: "'fixed'",
    description: '按钮组的定位方式',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'right',
    type: 'number | string',
    default: 'undefined',
    description: '按钮组的 CSS `right` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'shape',
    type: "'circle' | 'square'",
    default: "'circle'",
    description: '按钮组的形状',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'top',
    type: 'number | string',
    default: 'undefined',
    description: '按钮组的 CSS `top` 属性',
    version: '2.38.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
