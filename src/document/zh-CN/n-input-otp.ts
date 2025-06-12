import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'allow-input',
    type: '(char: string, index: number, currentValue: string[]) => boolean',
    default: 'undefined',
    description: '校验当前的输入是否合法，如果返回 `false` 输入框便不会响应此次的输入',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'default-value',
    type: 'string[]',
    default: '[]',
    description: '默认值',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'gap',
    type: 'string | number',
    default: 'undefined',
    description: '不同输入框之间的距离，如果不设定将使用默认值',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'length',
    type: 'number',
    default: '6',
    description: '验证码的长度，根据长度渲染对应个数的输入框',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'mask',
    type: 'boolean',
    default: 'false',
    description: '是否是密码模式',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "''",
    description: '输入的占位内容',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    description: '是否只读',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '输入框尺寸',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    description: '验证状态',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'value',
    type: 'string | null',
    default: 'undefined',
    description: '验证码输入框的值，受控模式',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'on-blur',
    type: '(event: FocusEvent, index: number) => void',
    default: 'undefined',
    description: '从一个输入框被聚焦触发，到没有任何一个输入框被聚焦的回调',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'on-finish',
    type: '(value: string[]) => void',
    default: 'undefined',
    description: '完成输入的回调',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'on-focus',
    type: '(event: FocusEvent, index: number) => void',
    default: 'undefined',
    description: '从没有任何一个输入框被聚焦，到有一个输入框被聚焦触发的回调',
    value: '',
    version: '2.41.1'
  },
  {
    name: 'on-update:value',
    type: "(value: string[], meta: { diff: string, index: number, source: 'input' | 'delete' | 'paste' }) => void",
    default: 'undefined',
    description:
      "输入值时触发的回调，`meta.index` 为变更开始的 index，`meta.diff` 是变更的内容，`meta.source` 为变更的原因，当原因为 `'delete'` 时，`meta.diff` 为 `''`，当原因为 `'paste'` 时，`meta.diff` 最终粘贴进入的内容",
    value: '',
    version: '2.41.1'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
