import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'checked',
    type: 'boolean',
    default: 'undefined',
    description: '选中状态',
    version: '',
    value: ''
  },
  {
    name: 'default-checked',
    type: 'boolean',
    default: 'false',
    description: '默认选中的状态',
    version: '',
    value: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '禁用状态',
    version: '',
    value: ''
  },
  {
    name: 'label',
    type: 'string',
    default: 'undefined',
    description: '标签',
    version: '2.28.0',
    value: ''
  },
  {
    name: 'name',
    type: 'string',
    default: 'undefined',
    description: '单选按钮 radio 元素的 name 属性。如果没有设定会使用 `n-radio-group` 的 `name`',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '大小',
    version: '',
    value: 'small/medium/large'
  },
  {
    name: 'value',
    type: 'string | number | boolean',
    default: "'on'",
    description: '选中的值',
    version: '2.33.0',
    value: ''
  },
  {
    name: 'on-update:checked',
    type: '(checked: boolean) => void',
    default: 'undefined',
    description: '发生变化时触发的回调方法',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
