import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'create-button-props',
    type: 'ButtonProps',
    default: 'undefined',
    description: '新建项按钮的属性',
    version: '2.25.0',
    value: '-'
  },
  {
    name: 'default-value',
    type: 'unknown[]',
    default: '[]',
    description: '非受控模式下的默认值',
    version: '',
    value: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用，对自定义内容无效',
    version: '2.34.4',
    value: '-'
  },
  {
    name: 'item-class',
    type: 'string',
    default: 'undefined',
    description: '动态录入中每项的类名',
    version: '2.36.0',
    value: '-'
  },
  {
    name: 'item-style',
    type: 'string | Object',
    default: 'undefined',
    description: '动态录入中每项的样式',
    version: '',
    value: '-'
  },
  {
    name: 'key-field',
    type: 'string',
    default: 'undefined',
    description: '每一项的 key 值，会被用于列表渲染中',
    version: '',
    value: '-'
  },
  {
    name: 'min',
    type: 'number',
    default: '0',
    description: '最少有几项内容',
    version: '',
    value: '-'
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    description: '最多有几项内容',
    version: '',
    value: '-'
  },
  {
    name: 'preset',
    type: "'input' | 'pair'",
    default: "'input'",
    description: '动态录入使用的预设，在不设定 `$slots.default` 的时候生效',
    version: '',
    value: 'input/pair'
  },
  {
    name: 'show-sort-button',
    type: 'boolean',
    default: 'false',
    description: '是否显示排序按钮',
    version: '2.25.0',
    value: '-'
  },
  {
    name: 'value',
    type: 'unknown[]',
    default: 'undefined',
    description: '受控模式下的值',
    version: '',
    value: '-'
  },
  {
    name: 'on-create',
    type: '(index: number) => void',
    default: 'undefined',
    description: '点击添加按钮时的回调，如果设定则返回值会被用作新添加的初始值。其中 `index` 是创建内容将要被放置到的位置对应的数组索引，从 1（第二项）开始计算',
    version: '',
    value: '-'
  },
  {
    name: 'on-remove',
    type: '(index: number) => void',
    default: 'undefined',
    description: '点击第 index 项删除按钮的回调',
    version: '',
    value: '-'
  },
  {
    name: 'on-update:value',
    type: '(value: any) => void',
    default: 'undefined',
    description: '组件值发生变化的回调',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
