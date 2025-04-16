import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: 'true',
    description: '是否有边框',
    value: '',
    version: ''
  },
  {
    name: 'checkable',
    type: 'boolean',
    default: 'false',
    description: '是否可以选择，使用后 type 将不生效',
    value: '',
    version: ''
  },
  {
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: '是否被选中，配合 checkable 一起使用',
    value: '',
    version: ''
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否可关闭',
    value: '',
    version: ''
  },
  {
    name: 'color',
    type: '{ color?: string, borderColor?: string, textColor?: string }',
    default: 'undefined',
    description: '标签颜色，设置该项后 `type` 无效',
    value: '',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'false',
    description: '是否圆角',
    value: '',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸',
    value: '',
    version: 'small/medium/large'
  },
  {
    name: 'strong',
    type: 'boolean',
    default: 'false',
    description: '文字是否加粗',
    value: '',
    version: '2.30.0'
  },
  {
    name: 'trigger-click-on-close',
    type: 'boolean',
    default: 'false',
    description: '关闭时是否触发点击事件',
    value: '',
    version: '2.32.2'
  },
  {
    name: 'type',
    type: "'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'",
    default: "'default'",
    description: '类型',
    value: 'default/primary/info/success/warning/error',
    version: ''
  },
  {
    name: 'on-close',
    type: '(e: MouseEvent) => void',
    default: 'undefined',
    description: '点击关闭时的回调',
    value: '',
    version: ''
  },
  {
    name: 'on-update:checked',
    type: '(value: boolean) => void',
    default: 'undefined',
    description: '选择状态更改时的回调',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'avatar',
    description: '标签中的头像',
    params: '()',
    version: ''
  },
  {
    name: 'default',
    description: '标签内容',
    params: '()',
    version: ''
  },
  {
    name: 'icon',
    description: '标签中的图标',
    params: '()',
    version: '2.30.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
