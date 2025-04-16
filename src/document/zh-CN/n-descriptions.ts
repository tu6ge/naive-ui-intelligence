import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: 'false',
    description: '是否显示 border',
    version: '',
    value: '-'
  },
  {
    name: 'column',
    type: 'number',
    default: '3',
    description: '设置的总列数',
    version: '',
    value: '-'
  },
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '内容的类名',
    version: '2.36.0',
    value: '-'
  },
  {
    name: 'content-style',
    type: 'Object | string',
    default: 'undefined',
    description: '内容的样式',
    version: '',
    value: '-'
  },
  {
    name: 'label-align',
    type: "'center' | 'left' | 'right'",
    default: "'left'",
    description: 'label 对齐方式',
    version: '',
    value: '-'
  },
  {
    name: 'label-placement',
    type: "'top' | 'left'",
    default: "'top'",
    description: 'label 显示位置',
    version: '',
    value: '-'
  },
  {
    name: 'label-class',
    type: 'string',
    default: 'undefined',
    description: 'label 的类名',
    version: '2.36.0',
    value: '-'
  },
  {
    name: 'label-style',
    type: 'Object | string',
    default: 'undefined',
    description: 'label 的样式',
    version: '',
    value: '-'
  },
  {
    name: 'separator',
    type: 'string',
    default: "':'",
    description: '分隔符，`label-placement` 为 `left` 并且 `bordered` 为 `false` 时生效',
    version: '',
    value: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸',
    version: '',
    value: 'small/medium/large'
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '标题',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '描述的内容',
    params: '()',
    version: ''
  },
  {
    name: 'header',
    description: 'header 内容',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
