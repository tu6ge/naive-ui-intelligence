import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'container-class',
    type: 'string',
    default: 'undefined',
    description: '加载条容器的类名',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'container-style',
    type: 'string | object',
    default: 'undefined',
    description: '加载条容器的样式',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'loading-bar-style',
    type: '{ loading?: string | object, error?: string | object }',
    default: 'undefined',
    description: '加载条样式',
    version: '',
    value: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'undefined',
    description: '加载条的挂载位置',
    version: '2.33.4',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
