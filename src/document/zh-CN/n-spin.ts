import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: 'Spin 内容的类名',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'content-style',
    type: 'string | Object',
    default: 'undefined',
    description: 'Spin 内容的样式',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'description',
    type: 'string',
    default: 'undefined',
    description: 'Spin 的文字信息',
    value: '',
    version: ''
  },
  {
    name: 'rotate',
    type: 'boolean',
    default: 'true',
    description: '自定义的加载图标是否有旋转动画',
    value: '',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | number",
    default: "'medium'",
    description: 'Spin 的尺寸',
    value: 'small/medium/large',
    version: ''
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'true',
    description: '在填入内容的情况下 Spin 是否激活，直接使用 Spin 时不生效',
    value: '',
    version: ''
  },
  {
    name: 'stroke-width',
    type: 'number',
    default: 'undefined',
    description: 'Spin 边缘的相对宽度，假定 Spin 的外侧半径是 100',
    value: '',
    version: ''
  },
  {
    name: 'stroke',
    type: 'string',
    default: 'undefined',
    description: 'Spin 的颜色',
    value: '',
    version: ''
  },
  {
    name: 'delay',
    type: 'number',
    default: 'undefined',
    description: '延迟显示加载效果的时间, 单位为毫秒（避免闪烁）',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
