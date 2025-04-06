import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'current',
    type: 'number',
    default: 'undefined',
    description: '当前选中在第几步',
    value: '',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium'",
    default: "'medium'",
    description: '步骤条大小',
    value: '',
    version: ''
  },
  {
    name: 'status',
    type: "'process' | 'finish' | 'error' | 'wait'",
    default: "'process'",
    description: '步骤条状态',
    value: '',
    version: ''
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '步骤条方向',
    value: '',
    version: ''
  },
  {
    name: 'on-update:current',
    type: '(index: number) => void',
    default: 'undefined',
    description: '更新当前第几步的回调，设定后可点击切换步骤',
    value: '',
    version: '2.29.1'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
