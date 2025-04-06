import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'allow-half',
    type: 'boolean',
    default: 'false',
    description: '允许只激活一半图标',
    version: '',
    value: ''
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '是否可清空，在点击当前值对应的图标后值会被设为 `null`',
    version: '2.33.0',
    value: ''
  },
  {
    name: 'color',
    type: 'string',
    default: 'undefined',
    description: '已激活图标颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色）',
    version: '',
    value: ''
  },
  {
    name: 'count',
    type: 'number',
    default: '5',
    description: '图标个数',
    version: '',
    value: ''
  },
  {
    name: 'default-value',
    type: 'number | null',
    default: 'null',
    description: '默认已激活图标个数，2.33.0 前默认值为 `0`',
    version: '2.33.0 开始支持 `null`',
    value: ''
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    description: '只读，交互失效',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | number",
    default: "'medium'",
    description: '图标尺寸',
    version: '',
    value: ''
  },
  {
    name: 'value',
    type: 'number | null',
    default: 'undefined',
    description: '已激活图标个数',
    version: '',
    value: ''
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: 'undefined',
    description: '清除当前值的回调',
    version: '2.33.0',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: number) => void',
    default: 'undefined',
    description: '激活图标个数改变时触发',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
