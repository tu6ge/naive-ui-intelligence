import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'checked',
    type: 'boolean',
    default: false,
    value: '-',
    description: '受控状态下是否选中',
    version: '-'
  },
  {
    name: 'checked-value',
    type: 'string | boolean | number',
    default: true,
    value: '-',
    description: '选中时对应的值',
    version: '-'
  },
  {
    name: 'default-checked',
    type: 'boolean',
    default: false,
    value: '-',
    description: '非受控模式下默认是否选中',
    version: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否禁用',
    version: '-'
  },
  {
    name: 'focusable',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否可被 focus',
    version: '-'
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否部分选中',
    version: '-'
  },
  {
    name: 'label',
    type: 'string',
    default: undefined,
    value: '-',
    description: 'Checkbox 的标签',
    version: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: 'medium',
    value: '-',
    description: '组件尺寸',
    version: '-'
  },
  {
    name: 'unchecked-value',
    type: 'string | boolean | number',
    default: false,
    value: '-',
    description: '未选中时对应的值',
    version: '-'
  },
  {
    name: 'value',
    type: 'string | number',
    default: undefined,
    value: '-',
    description: 'Checkbox 在 checkbox group 中使用的值',
    version: '-'
  },
  {
    name: 'on-update:checked',
    type: '(checked: boolean) => void',
    default: undefined,
    value: '-',
    description: '当 checked 改变时触发的回调函数',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
