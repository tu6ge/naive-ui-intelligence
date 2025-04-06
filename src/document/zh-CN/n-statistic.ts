import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    type: 'string',
    default: 'undefined',
    description: '展示的 `label` 信息',
    value: '',
    version: ''
  },
  {
    name: 'tabular-nums',
    type: 'boolean',
    default: 'false',
    description: '是否让数字等宽',
    value: '',
    version: '2.23.2'
  },
  {
    name: 'value',
    type: 'string | number',
    default: 'undefined',
    description: '统计数据的值',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
