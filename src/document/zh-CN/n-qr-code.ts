import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'background-color',
    type: 'string',
    default: "'#FFF'",
    description: '二维码背景颜色，值需要采用 `hex` 格式',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'color',
    type: 'string',
    default: "'#000'",
    description: '二维码颜色，值需要采用 `hex` 格式',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'error-correction-level',
    type: "'L' | 'M' | 'Q' | 'H'",
    default: "'M'",
    description: '二维码纠错级别',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'icon-background-color',
    type: 'string',
    default: "'#FFF'",
    description: '图标背景颜色',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'icon-border-radius',
    type: 'number',
    default: '4',
    description: '图标背景圆角大小',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'icon-size',
    type: 'number',
    default: '40',
    description: '图标大小',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'icon-src',
    type: 'string',
    default: 'undefined',
    description: '图标地址',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'padding',
    type: 'number | string',
    default: '12',
    description: '二维码填充大小',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'value',
    type: 'string',
    default: "''",
    description: '文本信息',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'size',
    type: 'number',
    default: '100',
    description: '二维码大小',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'type',
    type: "'canvas' | 'svg'",
    default: "'canvas'",
    description: '自定义二维码渲染类型',
    version: '2.38.2',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
