import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '内容的类名',
    value: '',
    version: ''
  },
  {
    name: 'content-style',
    type: 'Object | string',
    default: 'undefined',
    description: '内容的样式',
    value: '',
    version: ''
  },
  {
    name: 'label',
    type: 'string',
    default: 'undefined',
    description: '显示的 label 值',
    value: '',
    version: ''
  },
  {
    name: 'label-class',
    type: 'string',
    default: 'undefined',
    description: 'label 的类名',
    value: '',
    version: ''
  },
  {
    name: 'label-style',
    type: 'Object | string',
    default: 'undefined',
    description: 'label 的样式',
    value: '',
    version: ''
  },
  {
    name: 'span',
    type: 'number',
    default: '1',
    description: '所占的单元格数',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: '描述项的内容',
    version: ''
  },
  {
    name: 'label',
    params: '()',
    description: '描述项的 label 信息',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
