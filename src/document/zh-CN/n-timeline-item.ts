import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    type: 'string',
    default: 'undefined',
    description: '选项的颜色',
    value: '',
    version: ''
  },
  {
    name: 'content',
    type: 'string',
    default: 'undefined',
    description: '选项内容',
    value: '',
    version: ''
  },
  {
    name: 'line-type',
    type: "'default' | 'dashed'",
    default: "'default'",
    description: '线的类型',
    value: 'default/dashed',
    version: '2.26.1'
  },
  {
    name: 'time',
    type: 'string',
    default: 'undefined',
    description: '选项时间',
    value: '',
    version: ''
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '选项标题',
    value: '',
    version: ''
  },
  {
    name: 'type',
    type: "'default' | 'success' | 'info' | 'warning' | 'error'",
    default: "'default'",
    description: '选项类型',
    value: 'default/success/info/warning/error',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: '时间线选项内容',
    version: ''
  },
  {
    name: 'icon',
    params: '()',
    description: '时间线选项自定义图标',
    version: ''
  },
  {
    name: 'footer',
    params: '()',
    description: '时间线选项底部内容',
    version: ''
  },
  {
    name: 'header',
    params: '()',
    description: '时间线选项头部内容',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
