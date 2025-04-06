import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'closable',
    type: 'boolean',
    default: false,
    description: '所有 Message 是否显示 close 图标',
    version: '',
    value: ''
  },
  {
    name: 'container-class',
    type: 'string',
    default: 'undefined',
    description: 'Message 容器的类名',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'container-style',
    type: 'string | CSSProperties',
    default: 'undefined',
    description: 'Message 容器的样式',
    version: '',
    value: ''
  },
  {
    name: 'duration',
    type: 'number',
    default: 3000,
    description: '所有 Message 默认的持续时长',
    version: '',
    value: ''
  },
  {
    name: 'keep-alive-on-hover',
    type: 'boolean',
    default: false,
    description: '所有 Message 在悬浮信息上时是否不销毁',
    version: '',
    value: ''
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    description: '限制提示信息显示的个数',
    version: '',
    value: ''
  },
  {
    name: 'placement',
    type: "'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'",
    default: "'top'",
    description: '所有 Message 显示的位置',
    version: '',
    value: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement',
    default: "'body'",
    description: 'Message 容器节点的位置',
    version: '',
    value: ''
  }
]
export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
