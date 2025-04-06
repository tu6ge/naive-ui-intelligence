import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'font-size',
    type: 'number',
    default: 14,
    description: '文字大小',
    version: '',
    value: ''
  },
  {
    name: 'hljs',
    type: 'Object',
    default: 'undefined',
    description: '如果你想局部设定 `hljs` ，可以通过这个属性传给组件',
    version: '',
    value: ''
  },
  {
    name: 'language',
    type: 'string',
    default: 'undefined',
    description: '日志在 `highlightjs` 中的语言',
    version: '',
    value: ''
  },
  {
    name: 'line-height',
    type: 'number',
    default: 1.25,
    description: '行高',
    version: '',
    value: ''
  },
  {
    name: 'lines',
    type: 'Array<string>',
    default: 'undefined',
    description: '按行显示日志内容，在同时存在 `log` 参数时，该参数无效',
    version: '',
    value: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    description: '是否显示加载中',
    version: '',
    value: ''
  },
  {
    name: 'log',
    type: 'string',
    default: 'undefined',
    description: '日志的内容',
    version: '',
    value: ''
  },
  {
    name: 'rows',
    type: 'number',
    default: 15,
    description: '日志的尺寸',
    version: '',
    value: ''
  },
  {
    name: 'trim',
    type: 'boolean',
    default: false,
    description: '是否显示 `trim` 后的日志',
    version: '',
    value: ''
  },
  {
    name: 'on-require-more',
    type: "(from: 'top' | 'bottom') => void",
    default: 'undefined',
    description: '滚动加载日志的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-reach-top',
    type: '() => void',
    default: 'undefined',
    description: '滚动到顶部的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-reach-bottom',
    type: '() => void',
    default: 'undefined',
    description: '滚动到底部的回调函数',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
