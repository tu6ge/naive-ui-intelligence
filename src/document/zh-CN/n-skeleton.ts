import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'text',
    type: 'boolean',
    default: 'false',
    description: '文本骨架',
    value: '',
    version: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: '圆角骨架',
    value: '',
    version: ''
  },
  {
    name: 'circle',
    type: 'boolean',
    default: 'false',
    description: '圆形骨架',
    value: '',
    version: ''
  },
  {
    name: 'height',
    type: 'string | number',
    default: 'undefined',
    description: '骨架高度',
    value: '',
    version: ''
  },
  {
    name: 'width',
    type: 'string | number',
    default: 'undefined',
    description: '骨架宽度',
    value: '',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: 'undefined',
    description: '骨架大小',
    value: '',
    version: ''
  },
  {
    name: 'repeat',
    type: 'string | number',
    default: '1',
    description: '重复次数',
    value: '',
    version: ''
  },
  {
    name: 'animated',
    type: 'boolean',
    default: 'true',
    description: '是否启用动画',
    value: '',
    version: ''
  },
  {
    name: 'sharp',
    type: 'boolean',
    default: 'true',
    description: '是否显示为直角骨架',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
