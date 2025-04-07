import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    value: '-',
    description: 'alert 是否显示边框',
    version: ''
  },
  {
    name: 'closable',
    type: 'boolean',
    default: false,
    value: '-',
    description: 'alert 信息是否可以关掉',
    version: ''
  },
  {
    name: 'show-icon',
    type: 'boolean',
    default: true,
    value: '-',
    description: 'alert 是否展示 icon',
    version: ''
  },
  {
    name: 'title',
    type: 'string',
    default: undefined,
    value: '-',
    description: 'alert 的 title 信息',
    version: ''
  },
  {
    name: 'type',
    type: "'default' | 'info' | 'success' | 'warning' | 'error'",
    default: 'default',
    value: 'default/info/success/warning/error',
    description: 'alert 的类型',
    version: ''
  },
  {
    name: 'on-after-leave',
    type: 'Function',
    default: undefined,
    value: '-',
    description: 'alert 消失时执行的回调函数',
    version: ''
  },
  {
    name: 'on-close',
    type: '() => boolean | Promise<boolean> | any',
    default: '() => true',
    value: '-',
    description: '点击 close icon 时执行的回调函数',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
