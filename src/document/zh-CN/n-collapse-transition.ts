import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'appear',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否在首次出现时播放动画',
    version: '-'
  },
  {
    name: 'show',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否展示内容',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
