import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'description',
    type: 'string',
    default: 'undefined',
    description: '节点描述',
    value: '',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否可点击',
    value: '',
    version: '2.29.1'
  },
  {
    name: 'status',
    type: "'process' | 'finish' | 'error' | 'wait'",
    default: 'undefined',
    description: '节点状态',
    value: 'process/finish/error/wait',
    version: ''
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '节点标题',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: '步骤节点内容',
    version: ''
  },
  {
    name: 'icon',
    params: '()',
    description: '步骤节点图标',
    version: '2.26.1'
  },
  {
    name: 'title',
    params: '()',
    description: '步骤节点标题',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
