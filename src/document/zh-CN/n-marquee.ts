import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'auto-fill',
    type: 'boolean',
    default: false,
    description: '是否重复的用内容铺满容器的空白',
    version: '2.40.2',
    value: ''
  },
  {
    name: 'speed',
    type: 'number',
    default: 48,
    description: '移动的速度，单位是像素每秒',
    version: '2.40.2',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
