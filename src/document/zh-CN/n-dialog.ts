import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'action-class',
    type: 'string',
    default: 'undefined',
    description: '操作区域的类名',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'action-style',
    type: 'Object | string',
    default: 'undefined',
    description: '操作区域的样式',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: 'false',
    description: '是否显示 `border`',
    version: '',
    value: '-'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'true',
    description: '是否显示 `close` 图标',
    version: '',
    value: '-'
  },
  {
    name: 'content',
    type: 'string | (() => VNodeChild)',
    default: 'undefined',
    description: '对话框内容，可以是渲染函数',
    version: '',
    value: '-'
  },
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '内容的类名',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'content-style',
    type: 'Object | string',
    default: 'undefined',
    description: '内容的样式',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'icon-placement',
    type: "'left' | 'top'",
    default: "'left'",
    description: '图标放置的位置',
    version: '',
    value: 'left/top'
  },
  {
    name: 'icon',
    type: '() => VNodeChild',
    default: 'undefined',
    description: '需要是渲染函数',
    version: '',
    value: '-'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '是否显示 `loading` 状态',
    version: '',
    value: '-'
  },
  {
    name: 'negative-button-props',
    type: 'ButtonProps',
    default: 'undefined',
    description: '取消按钮的属性',
    version: '2.27.0',
    value: '-'
  },
  {
    name: 'negative-text',
    type: 'string',
    default: 'undefined',
    description: '取消按钮的文字，不填对应的按钮不会出现',
    version: '',
    value: '-'
  },
  {
    name: 'positive-button-props',
    type: 'ButtonProps',
    default: 'undefined',
    description: '确认按钮的属性',
    version: '2.27.0',
    value: '-'
  },
  {
    name: 'positive-text',
    type: 'string',
    default: 'undefined',
    description: '确认按钮的文字，不填对应的按钮不会出现',
    version: '',
    value: '-'
  },
  {
    name: 'show-icon',
    type: 'boolean',
    default: 'true',
    description: '是否显示 `icon`',
    version: '',
    value: '-'
  },
  {
    name: 'title',
    type: 'string | (() => VNodeChild)',
    default: 'undefined',
    description: '对话框标题，可以是渲染函数',
    version: '',
    value: '-'
  },
  {
    name: 'title-class',
    type: 'string',
    default: 'undefined',
    description: '标题的类名',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'title-style',
    type: 'Object | string',
    default: 'undefined',
    description: '标题的样式',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'type',
    type: "'error' | 'success' | 'warning' | 'info'",
    default: "'warning'",
    description: '对话框类型',
    version: '',
    value: 'error/success/warning/info'
  },
  {
    name: 'on-close',
    type: '() => void',
    default: 'undefined',
    description: '点击关闭时执行的回调函数',
    version: '',
    value: '-'
  },
  {
    name: 'on-negative-click',
    type: '(e: MouseEvent) => void',
    default: 'undefined',
    description: '执行 `negative` 时执行的回调函数',
    version: '',
    value: '-'
  },
  {
    name: 'on-positive-click',
    type: '(e: MouseEvent) => void',
    default: 'undefined',
    description: '执行 `positive` 时执行的回调函数',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'action',
    description: '`action` 内容',
    params: '()',
    version: ''
  },
  {
    name: 'default',
    description: '对话框内容',
    params: '()',
    version: ''
  },
  {
    name: 'header',
    description: '`header` 内容',
    params: '()',
    version: ''
  },
  {
    name: 'icon',
    description: '`icon` 内容',
    params: '()',
    version: ''
  },
  {
    name: 'close',
    description: '`close` 内容',
    params: '()',
    version: '2.36.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
