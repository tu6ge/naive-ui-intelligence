import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'description',
    type: 'string',
    default: 'undefined',
    description: '描述信息',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | 'huge'",
    default: "'medium'",
    description: '大小',
    version: '',
    value: 'small/medium/large/huge'
  },
  {
    name: 'status',
    type: "'info' | 'success' | 'warning' | 'error' | '404' | '403' | '500' | '418'",
    default: "'info'",
    description: '状态',
    version: '',
    value: 'info/success/warning/error/404/403/500/418'
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '标题',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '结果页内容信息',
    params: '()',
    version: ''
  },
  {
    name: 'footer',
    description: '结果页底部信息',
    params: '()',
    version: ''
  },
  {
    name: 'icon',
    description: '自定义图标内容区域',
    params: '()',
    version: '2.24.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
