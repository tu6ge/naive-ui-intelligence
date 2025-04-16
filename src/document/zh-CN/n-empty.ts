import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'description',
    type: 'string',
    default: "'无数据'",
    description: '描述信息',
    version: '',
    value: '-'
  },
  {
    name: 'show-description',
    type: 'boolean',
    default: 'true',
    description: '是否展示描述信息',
    version: '',
    value: '-'
  },
  {
    name: 'show-icon',
    type: 'boolean',
    default: 'true',
    description: '是否展示图标',
    version: '',
    value: '-'
  },
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large' | 'huge'",
    default: "'medium'",
    description: '尺寸大小',
    version: '2.40.0',
    value: 'tiny/small/medium/large/huge'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '代替 description',
    params: '()',
    version: ''
  },
  {
    name: 'extra',
    description: '扩展的内容',
    params: '()',
    version: ''
  },
  {
    name: 'icon',
    description: '自定义图标',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
