import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'extra',
    type: 'string',
    default: 'undefined',
    description: '额外的文本信息，当使用 `extra` 插槽时该参数无效',
    version: '',
    value: ''
  },
  {
    name: 'subtitle',
    type: 'string',
    default: 'undefined',
    description: '副标题',
    version: '',
    value: ''
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '主标题',
    version: '',
    value: ''
  },
  {
    name: 'on-back',
    type: '() => void',
    default: 'undefined',
    description: '点击返回按钮的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
