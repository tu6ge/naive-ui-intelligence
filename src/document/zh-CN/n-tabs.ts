import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'addable',
    type: 'boolean | { disabled?: boolean }',
    default: 'false',
    description: '是否允许添加标签，只在标签的 `type` 为 `card` 时生效',
    value: '',
    version: ''
  },
  {
    name: 'add-tab-class',
    type: 'string',
    default: 'undefined',
    description: '添加标签标签的类名',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'add-tab-style',
    type: 'string | object',
    default: 'undefined',
    description: '添加标签标签的样式',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'animated',
    type: 'boolean',
    default: 'false',
    description: "标签页切换是否使用动画，当 `placement` 为 `'left'` 或 `'right'` 时不生效",
    value: '',
    version: '2.27.0'
  },
  {
    name: 'bar-width',
    type: 'number',
    default: 'undefined',
    description: '标签条的宽度',
    value: '',
    version: '2.25.0'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否允许关闭标签，只在标签的 `type` 为 `card` 时生效',
    value: '',
    version: ''
  },
  {
    name: 'default-value',
    type: 'string | number',
    default: 'undefined',
    description: '非受控模式下的默认值',
    value: '',
    version: ''
  },
  {
    name: 'justify-content',
    type: "'space-between' | 'space-around' | 'space-evenly' | 'start' | 'center' | 'end'",
    default: 'undefined',
    description: "`flex` 布局下主轴的排列方式，只对 `'line'` 和 `'bar'` 类型生效",
    value: 'space-between/space-around/space-evenly/start/center/end',
    version: '2.29.1'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '标签页的尺寸',
    value: 'small/medium/large',
    version: ''
  },
  {
    name: 'pane-class',
    type: 'string',
    default: 'undefined',
    description: '面板的类名',
    value: '',
    version: ''
  },
  {
    name: 'pane-style',
    type: 'string | object',
    default: 'undefined',
    description: '面板的样式',
    value: '',
    version: ''
  },
  {
    name: 'pane-wrapper-class',
    type: 'string',
    default: 'undefined',
    description: '面板容器的类名',
    value: '',
    version: '2.34.4'
  },
  {
    name: 'pane-wrapper-style',
    type: 'string | object',
    default: 'undefined',
    description: '面板容器的样式',
    value: '',
    version: '2.34.4'
  },
  {
    name: 'placement',
    type: "'left' | 'right' | 'top' | 'bottom'",
    default: "'top'",
    description: "标签的位置，对于 `'segment'` 类型的 `n-tabs` 不生效",
    value: 'left/right/top/bottom',
    version: '2.34.4'
  },
  {
    name: 'tab-class',
    type: 'string',
    default: 'undefined',
    description: '标签的类名',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'tab-style',
    type: 'string | object',
    default: 'undefined',
    description: '标签的样式',
    value: '',
    version: ''
  },
  {
    name: 'tabs-padding',
    type: 'number',
    default: '0',
    description: '全部标签最左和最右的 `padding`',
    value: '',
    version: ''
  },
  {
    name: 'trigger',
    type: "'click' | 'hover'",
    default: "'click'",
    description: '触发 tab 的方式',
    value: 'click/hover',
    version: '2.27.0'
  },
  {
    name: 'type',
    type: "'bar' | 'line' | 'card' | 'segment'",
    default: "'bar'",
    description: '标签类型',
    value: 'bar/line/card/segment',
    version: ''
  },
  {
    name: 'value',
    type: 'string | number',
    default: 'undefined',
    description: '受控模式下的值',
    value: '',
    version: ''
  },
  {
    name: 'on-add',
    type: '() => void',
    default: 'undefined',
    description: '添加标签的回调函数',
    value: '',
    version: ''
  },
  {
    name: 'on-before-leave',
    type: '(name: string | number, oldName: string | number | null) => boolean | Promise<boolean>',
    default: 'undefined',
    description: '切换标签之前的钩子函数，返回 `false` 或 promise resolve `false` 或 promise reject 会阻止切换',
    value: '',
    version: ''
  },
  {
    name: 'on-close',
    type: '(name: string | number) => void',
    default: 'undefined',
    description: '关闭标签的回调函数',
    value: '',
    version: ''
  },
  {
    name: 'on-update:value',
    type: '(value: string | number) => void',
    default: 'undefined',
    description: '选中发生改变时的回调函数',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '标签的内容',
    params: '()',
    version: ''
  },
  {
    name: 'prefix',
    description: '标签的前缀',
    params: '()',
    version: ''
  },
  {
    name: 'suffix',
    description: '标签的后缀',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
