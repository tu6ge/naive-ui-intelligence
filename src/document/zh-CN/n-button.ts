import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'attr-type',
    type: "'button' | 'submit' | 'reset'",
    default: 'button',
    value: 'button/submit/reset',
    description: '按钮的 DOM 的 `type` 属性',
    version: ''
  },
  {
    name: 'block',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否显示为块级',
    version: ''
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    value: '-',
    description: '按钮是否显示 border',
    version: ''
  },
  {
    name: 'circle',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否为圆形',
    version: ''
  },
  {
    name: 'color',
    type: 'string',
    default: undefined,
    value: '-',
    description: '按钮颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色）',
    version: ''
  },
  {
    name: 'dashed',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮边框是否为虚线',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否禁用',
    version: ''
  },
  {
    name: 'focusable',
    type: 'boolean',
    default: true,
    value: '-',
    description: '按钮是否可以被聚焦',
    version: ''
  },
  {
    name: 'ghost',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否透明',
    version: ''
  },
  {
    name: 'native-focus-behavior',
    type: 'boolean',
    default: '浏览器不是 Safari',
    value: '-',
    description:
      '按钮是否遵循原生的 focus 行为。Safari 原生的 button 无法通过点击被聚焦，所以默认情况下 naive-ui 做了一些处理使它可以被聚焦，如果你不需要这种行为，或者发现你需要让按钮可被拖动，可以开启这个属性',
    version: ''
  },
  {
    name: 'icon-placement',
    type: "'left' | 'right'",
    default: 'left',
    value: 'left/right',
    description: '按钮中图标的位置',
    version: ''
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否支持键盘操作',
    version: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否显示加载状态',
    version: ''
  },
  {
    name: 'quaternary',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否是四级按钮',
    version: ''
  },
  {
    name: 'render-icon',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '按钮图标的渲染函数',
    version: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮是否显示圆角',
    version: ''
  },
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: 'medium',
    value: 'tiny/small/medium/large',
    description: '按钮的尺寸',
    version: ''
  },
  {
    name: 'secondary',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否是次要按钮',
    version: ''
  },
  {
    name: 'strong',
    type: 'boolean',
    default: false,
    value: '-',
    description: '按钮文字是否加粗',
    version: ''
  },
  {
    name: 'tertiary',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否是三级按钮',
    version: ''
  },
  {
    name: 'text',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否显示为文本按钮',
    version: ''
  },
  {
    name: 'text-color',
    type: 'string',
    default: undefined,
    value: '-',
    description: '按钮文字颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色）',
    version: ''
  },
  {
    name: 'type',
    type: "'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error'",
    default: 'default',
    value: 'default/tertiary/primary/success/info/warning/error',
    description: '按钮的类型',
    version: ''
  },
  {
    name: 'tag',
    type: 'string',
    default: 'button',
    value: '-',
    description: '按钮需要被渲染为什么标签',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '按钮的内容',
    params: '()',
    version: ''
  },
  {
    name: 'icon',
    description: '按钮的图标',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
