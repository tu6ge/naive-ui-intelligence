import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'active',
    type: 'boolean',
    default: 'true',
    description: '是否开始动画',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'duration',
    type: 'number',
    default: '3000',
    description: '动画持续时间',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'from',
    type: 'number',
    default: '0',
    description: '数值动画起始值',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'locale',
    type: 'string',
    default: '跟随 config provider',
    description: '国际化的语言',
    version: '2.24.2',
    value: ''
  },
  {
    name: 'precision',
    type: 'number',
    default: '0',
    description: '精度，保留小数点后几位',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'show-separator',
    type: 'boolean',
    default: 'false',
    description: '是否显示分隔符',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'to',
    type: 'number',
    default: 'undefined',
    description: '目标值',
    version: '2.23.2',
    value: ''
  },
  {
    name: 'on-finish',
    type: '() => void',
    default: 'undefined',
    description: '动画结束的回调',
    version: '2.31.0',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
