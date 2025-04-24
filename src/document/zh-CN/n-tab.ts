import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否允许关闭标签，只在标签的 `type` 为 `card` 时生效',
    value: '',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'name',
    type: 'string | number',
    default: 'undefined',
    description: '必填，标签的名称',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots, name: 'tabs' }

export default document
