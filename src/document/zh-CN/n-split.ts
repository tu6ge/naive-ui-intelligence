import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'default-size',
    type: 'string | number',
    default: '0.5',
    description: 'Split 的默认分割大小，为 `number` 类型时应该为 0 ~ 1 之间的值，为 `string` 类型时应该为 `${number}px` 格式',
    value: '',
    version: '2.36.0, `string` 2.38.2'
  },
  {
    name: 'direction',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: 'Split 的分割方向',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'max',
    type: 'string | number',
    default: '1',
    description: 'Split 的分割最大阈值，为 `number` 类型时应该为 0 ~ 1 之间的值，为 `string` 类型时应该为 `${number}px` 格式',
    value: '',
    version: '2.36.0, `string` 2.38.2'
  },
  {
    name: 'min',
    type: 'string | number',
    default: '0',
    description: 'Split 的分割最小阈值，为 `number` 类型时应该为 0 ~ 1 之间的值，为 `string` 类型时应该为 `${number}px` 格式',
    value: '',
    version: '2.36.0, `string` 2.38.2'
  },
  {
    name: 'pane1-class',
    type: 'string',
    default: 'undefined',
    description: '第一个面板的类名',
    value: '',
    version: '2.38.2'
  },
  {
    name: 'pane1-style',
    type: 'Object | string',
    default: 'undefined',
    description: '第一个面板的样式',
    value: '',
    version: '2.38.2'
  },
  {
    name: 'pane2-class',
    type: 'string',
    default: 'undefined',
    description: '第二个面板的类名',
    value: '',
    version: '2.38.2'
  },
  {
    name: 'pane2-style',
    type: 'Object | string',
    default: 'undefined',
    description: '第二个面板的样式',
    value: '',
    version: '2.38.2'
  },
  {
    name: 'resize-trigger-size',
    type: 'number',
    default: '3',
    description: 'Split 的分隔条大小',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'size',
    type: 'string | number',
    default: 'undefined',
    description: 'Split 的受控分割大小，为 `number` 类型时应该为 0 ~ 1 之间的值，为 `string` 类型时应该为 `${number}px` 格式',
    value: '',
    version: '2.38.0, `string` 2.38.2'
  },
  {
    name: 'watch-props',
    type: "Array<'defaultSize'>",
    default: 'undefined',
    description: '需要检测变更的默认属性，检测后组件状态会更新。注意：`watch-props` 本身不是响应式的',
    value: '',
    version: '2.38.0'
  },
  {
    name: 'on-drag-start',
    type: '(e: Event) => void',
    default: 'undefined',
    description: '开始拖拽的回调函数',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'on-drag-move',
    type: '(e: Event) => void',
    default: 'undefined',
    description: '拖拽中的回调函数',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'on-drag-end',
    type: '(e: Event) => void',
    default: 'undefined',
    description: '结束拖拽的回调函数',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'on-update:size',
    type: '(value: string | number) => void',
    default: 'undefined',
    description: '组件 `size` 属性变化时触发的回调，如果 `props.value` 或 `props.defaultValue` 是 `string`， 则 `value` 为 `string`',
    value: '',
    version: '2.38.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
