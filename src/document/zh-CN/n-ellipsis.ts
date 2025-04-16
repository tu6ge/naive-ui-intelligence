import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'expand-trigger',
    type: "'click'",
    default: 'undefined',
    description: '展开的触发方式',
    version: '2.1.0',
    value: '-'
  },
  {
    name: 'line-clamp',
    type: 'number | string',
    default: 'undefined',
    description: '最大行数',
    version: '2.1.0',
    value: '-'
  },
  {
    name: 'tooltip',
    type: 'boolean | TooltipProps',
    default: 'true',
    description: 'Tooltip 的属性',
    version: '2.1.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '文本省略的内容',
    params: '()',
    version: ''
  },
  {
    name: 'tooltip',
    description: 'tooltip 的内容',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
