import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'checked-value',
    type: 'string | boolean | number',
    default: 'true',
    description: '选中时对应的值',
    value: '',
    version: ''
  },
  {
    name: 'default-value',
    type: 'boolean',
    default: 'false',
    description: '非受控模式下的默认值',
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
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '是否加载',
    value: '',
    version: ''
  },
  {
    name: 'rail-style',
    type: '(info: { focused: boolean, checked: boolean }) => (CSSProperties | string)',
    default: 'undefined',
    description: '创建轨道样式的函数',
    value: '',
    version: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: 'true',
    description: '是否为圆形按钮',
    value: '',
    version: ''
  },
  {
    name: 'rubber-band',
    type: 'boolean',
    default: 'true',
    description: '按钮是否有橡皮筋效果',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '开关大小',
    value: 'small/medium/large',
    version: ''
  },
  {
    name: 'unchecked-value',
    type: 'string | boolean | number',
    default: 'false',
    description: '未选中时对应的值',
    value: '',
    version: ''
  },
  {
    name: 'value',
    type: 'string | number | boolean | undefined',
    default: 'undefined',
    description: '受控模式下的值',
    value: '',
    version: ''
  },
  {
    name: 'on-update:value',
    type: '(value: boolean) => void',
    default: 'undefined',
    description: '组件值发生变化的回调',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'checked',
    description: '开关激活时的内容',
    params: '()',
    version: ''
  },
  {
    name: 'checked-icon',
    description: '开关按钮选中时的图标',
    params: '()',
    version: '2.25.3'
  },
  {
    name: 'icon',
    description: '开关按钮的图标',
    params: '()',
    version: '2.25.3'
  },
  {
    name: 'unchecked',
    description: '开关关闭时的内容',
    params: '()',
    version: ''
  },
  {
    name: 'unchecked-icon',
    description: '开关按钮未选中时的图标',
    params: '()',
    version: '2.25.3'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
