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

export const slots: DocumentSlot[] = [
  {
    name: 'avatar',
    description: '图片信息',
    params: '()',
    version: ''
  },
  {
    name: 'header',
    description: '头部信息',
    params: '()',
    version: ''
  },
  {
    name: 'default',
    description: '内容',
    params: '()',
    version: ''
  },
  {
    name: 'extra',
    description: '额外信息',
    params: '()',
    version: ''
  },
  {
    name: 'footer',
    description: '底部信息',
    params: '()',
    version: ''
  },
  {
    name: 'subtitle',
    description: '副标题信息',
    params: '()',
    version: ''
  },
  {
    name: 'title',
    description: '标题信息',
    params: '()',
    version: ''
  },
  {
    name: 'back',
    description: '返回图标',
    params: '()',
    version: '2.24.2'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
