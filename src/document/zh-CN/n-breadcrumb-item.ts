import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'clickable',
    type: 'boolean',
    default: 'true',
    description: '是否可点击',
    value: '-',
    version: '2.30.0'
  },
  {
    name: 'href',
    type: 'string',
    default: 'undefined',
    description: '链接地址',
    value: '-',
    version: ''
  },
  {
    name: 'separator',
    type: 'string',
    default: "'/'",
    description: '面包屑子项之间的分隔符',
    value: '-',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: 'BreadcrumbItem 默认填充的内容',
    version: '-'
  },
  {
    name: 'separator',
    params: '()',
    description: '分隔符填充的内容',
    version: '-'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
