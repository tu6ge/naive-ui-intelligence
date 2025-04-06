import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'code',
    type: 'string',
    default: '',
    value: '-',
    description: '传入的 code 字符串',
    version: '-'
  },
  {
    name: 'inline',
    type: 'boolean',
    default: false,
    value: '-',
    description: '使用行内样式',
    version: '-'
  },
  {
    name: 'hljs',
    type: 'Object',
    default: undefined,
    value: '-',
    description: '如果你想局部设定 hljs，可以通过这个属性传给组件',
    version: '-'
  },
  {
    name: 'language',
    type: 'string',
    default: undefined,
    value: '-',
    description: '代码在 highlightjs 中的语言',
    version: '-'
  },
  {
    name: 'show-line-numbers',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否显示行号，在 `inline` 或 `word-wrap` 的情况下不生效',
    version: '2.32.0'
  },
  {
    name: 'trim',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否显示 trim 后的代码',
    version: '-'
  },
  {
    name: 'word-wrap',
    type: 'boolean',
    default: false,
    value: '-',
    description: '代码过长时是否自动换行',
    version: '2.24.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
