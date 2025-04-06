import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    type: "'default' | 'success' | 'info' | 'warning' | 'error'",
    default: "'default'",
    value: '',
    description: '排印类型',
    version: ''
  },
  {
    name: 'strong',
    type: 'boolean',
    default: false,
    value: '',
    description: '粗体',
    version: ''
  },
  {
    name: 'italic',
    type: 'boolean',
    default: false,
    value: '',
    description: '斜体',
    version: ''
  },
  {
    name: 'underline',
    type: 'boolean',
    default: false,
    value: '',
    description: '文字下划线',
    version: ''
  },
  {
    name: 'delete',
    type: 'boolean',
    default: false,
    value: '',
    description: '文字删除线',
    version: ''
  },
  {
    name: 'code',
    type: 'boolean',
    default: false,
    value: '',
    description: '代码模式',
    version: ''
  },
  {
    name: 'depth',
    type: "'1' | '2' | '3' | 1 | 2 | 3",
    default: 'undefined',
    value: '',
    description: '文字深度',
    version: ''
  },
  {
    name: 'tag',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '需要被渲染为什么标签，在 `code` 和 `del` 设定的情况下不生效',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
