import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'default-value',
    type: 'number | [number, number] | null',
    default: 'null',
    description: '默认值',
    value: '',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'format-tooltip',
    type: '(value: number) => string | number',
    default: 'undefined',
    description: '格式化 tooltip',
    value: '',
    version: ''
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: 'true',
    description: '是否可键盘控制',
    value: '',
    version: '2.33.0'
  },
  {
    name: 'marks',
    type: '{ [markValue: number]: string | (() => VNodeChild) }',
    default: 'undefined',
    description: 'Slider 上的标记',
    value: '',
    version: '2.40.0'
  },
  {
    name: 'max',
    type: 'number',
    default: '100',
    description: '最大值',
    value: '',
    version: ''
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: '最小值',
    value: '',
    version: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: 'undefined',
    description: 'Tooltip 的弹出位置',
    value: '',
    version: '2.25.0'
  },
  {
    name: 'range',
    type: 'boolean',
    default: 'false',
    description: '是否选择范围值',
    value: '',
    version: ''
  },
  {
    name: 'reverse',
    type: 'boolean',
    default: 'false',
    description: '是否倒转轨道',
    value: '',
    version: ''
  },
  {
    name: 'show-tooltip',
    type: 'boolean',
    default: 'false',
    description: '是否一直显示 tooltip，仅对非 range 生效',
    value: '',
    version: '2.24.2'
  },
  {
    name: 'step',
    type: "number | 'mark'",
    default: '1',
    description: '步长',
    value: '',
    version: ''
  },
  {
    name: 'tooltip',
    type: 'boolean',
    default: 'true',
    description: '是否展示 tooltip',
    value: '',
    version: ''
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否启用垂直模式',
    value: '',
    version: ''
  },
  {
    name: 'value',
    type: 'number | [number, number] | null',
    default: 'undefined',
    description: '值',
    value: '',
    version: ''
  },
  {
    name: 'on-update:value',
    type: '(value: number | [number, number]) => void',
    default: 'undefined',
    description: '值更新的回调',
    value: '',
    version: ''
  },
  {
    name: 'on-dragstart',
    type: '() => void',
    default: 'undefined',
    description: '开始拖拽的回调函数',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'on-dragend',
    type: '() => void',
    default: 'undefined',
    description: '拖拽结束的回调函数',
    value: '',
    version: '2.36.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
