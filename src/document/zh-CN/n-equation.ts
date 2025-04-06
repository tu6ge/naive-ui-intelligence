import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'katex',
    type: 'object',
    default: 'undefined',
    description: 'Katex',
    version: '2.34.0',
    value: '-'
  },
  {
    name: 'katex-options',
    type: 'object',
    default: 'undefined',
    description: 'Katex 公式的配置',
    version: '2.34.0',
    value: '-'
  },
  {
    name: 'value',
    type: 'string',
    default: 'undefined',
    description: 'Latex 格式的公式表达式',
    version: '2.34.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
