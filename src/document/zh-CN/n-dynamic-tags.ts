import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'closable',
    type: 'boolean',
    default: 'true',
    description: '是否可关闭',
    version: '',
    value: '-'
  },
  {
    name: 'color',
    type: '{ color?: string, borderColor?: string, textColor?: string }',
    default: 'undefined',
    description: '标签颜色，设置该项后 `type` 无效',
    version: '',
    value: '-'
  },
  {
    name: 'default-value',
    type: 'string[] | Array<{ label: string, value: string }>',
    default: '[]',
    description: '非受控模式下的默认值',
    version: '',
    value: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    version: '',
    value: '-'
  },
  {
    name: 'input-props',
    type: 'InputProps',
    default: 'undefined',
    description: '内部 `n-input` 组件的属性',
    version: '2.25.0',
    value: '-'
  },
  {
    name: 'input-class',
    type: 'string',
    default: 'undefined',
    description: '自定义输入框的类名',
    version: '2.36.0',
    value: '-'
  },
  {
    name: 'input-style',
    type: 'string | Object',
    default: 'undefined',
    description: '自定义输入框的样式',
    version: '',
    value: '-'
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    description: 'tag 的最大数量',
    version: '',
    value: '-'
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: '是否圆角',
    version: '',
    value: '-'
  },
  {
    name: 'render-tag',
    type: '((tag: string, index: number) => VNodeChild) | ((tag: { label: string, value: string }, index: number) => VNodeChild)',
    default: 'undefined',
    description: '自定义渲染 tag',
    version: '2.27.0',
    value: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸大小',
    version: '',
    value: '-'
  },
  {
    name: 'tag-class',
    type: 'string',
    default: 'undefined',
    description: '自定义标签的类名',
    version: '2.36.0',
    value: '-'
  },
  {
    name: 'tag-style',
    type: 'string | Object',
    default: 'undefined',
    description: '自定义标签的样式',
    version: '',
    value: '-'
  },
  {
    name: 'type',
    type: "'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'",
    default: "'default'",
    description: '标签类型',
    version: '',
    value: '-'
  },
  {
    name: 'value',
    type: 'string[] | Array<{ label: string, value: string }>',
    default: 'undefined',
    description: '受控模式下的值',
    version: '',
    value: '-'
  },
  {
    name: 'on-create',
    type: '((label: string) => string) | ((label: string) => ({ label: string, value: string }))',
    default: 'label => label',
    description: '根据输入的值创造对应的选项',
    version: '2.30.4',
    value: '-'
  },
  {
    name: 'on-update:value',
    type: '((value: string[]) => void) | ((value: DynamicTagsOption[]) => void)',
    default: 'undefined',
    description: '组件值发生变化时的回调',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
