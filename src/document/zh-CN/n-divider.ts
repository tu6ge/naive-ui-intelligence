import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'dashed',
    type: 'boolean',
    default: 'false',
    description: '是否使用虚线分割',
    value: '-',
    version: '-'
  },
  {
    name: 'title-placement',
    type: "'left' | 'right' | 'center'",
    default: "'center'",
    description: '标题的位置',
    value: '-',
    version: '-'
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否垂直分隔',
    value: '-',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
