import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content-indented',
    type: 'boolean',
    default: 'false',
    description: '是否启用内容缩进',
    value: '',
    version: ''
  },
  {
    name: 'content',
    type: 'string',
    default: 'undefined',
    description: '内容区域',
    value: '',
    version: ''
  },
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '内容区域类名',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'content-style',
    type: 'string | Object',
    default: 'undefined',
    description: '内容区域样式',
    value: '',
    version: '2.32.2'
  },
  {
    name: 'description',
    type: 'string',
    default: 'undefined',
    description: '描述信息',
    value: '',
    version: ''
  },
  {
    name: 'description-class',
    type: 'string',
    default: 'undefined',
    description: '描述信息区域类名',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'description-style',
    type: 'string | Object',
    default: 'undefined',
    description: '描述信息区域样式',
    value: '',
    version: '2.32.2'
  },
  {
    name: 'title-extra',
    type: 'string',
    default: 'undefined',
    description: '标题的附加信息',
    value: '',
    version: ''
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '标题',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
