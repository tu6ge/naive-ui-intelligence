import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'expand-on-hover',
    type: 'boolean',
    default: false,
    value: '-',
    description: '悬停时展开',
    version: ''
  },
  {
    name: 'max',
    type: 'number',
    default: undefined,
    value: '-',
    description: '组内头像显示的最大个数',
    version: ''
  },
  {
    name: 'max-style',
    type: 'Object | string',
    default: undefined,
    value: '-',
    description: '溢出标识的样式',
    version: ''
  },
  {
    name: 'options',
    type: 'Array<AvatarOption>',
    default: '[]',
    value: '-',
    description: '头像组的选项',
    version: ''
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: false,
    value: '-',
    description: '组内头像是否垂直排列',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'avatar',
    description: '头像组头像',
    params: '(info: { option: { src: string } })',
    version: ''
  },
  {
    name: 'default',
    description: '头像组内填充的内容',
    params: '()',
    version: ''
  },
  {
    name: 'rest',
    description: '头像组溢出容器',
    params: '(info: { options: Array<{ src: string }>, rest: number })',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots, name: 'avatar' }

export default document
