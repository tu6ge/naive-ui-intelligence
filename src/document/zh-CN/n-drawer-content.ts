import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'body-class',
    type: 'string',
    default: 'undefined',
    description: '主体 body 的类名',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'body-style',
    type: 'string | Object',
    default: 'undefined',
    description: '主体 body 的样式',
    version: '',
    value: '-'
  },
  {
    name: 'body-content-class',
    type: 'string',
    default: 'undefined',
    description: '主体可滚动内容节点的类名',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'body-content-style',
    type: 'string | Object',
    default: 'undefined',
    description: '主体可滚动内容节点的样式',
    version: '',
    value: '-'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否可关闭',
    version: '',
    value: '-'
  },
  {
    name: 'footer-class',
    type: 'string',
    default: 'undefined',
    description: '主体 footer 的类名',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'footer-style',
    type: 'string | Object',
    default: 'undefined',
    description: '主体 footer 的样式',
    version: '',
    value: '-'
  },
  {
    name: 'header-class',
    type: 'string',
    default: 'undefined',
    description: '主体 header 的类名',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'header-style',
    type: 'string | Object',
    default: 'undefined',
    description: '主体 header 的样式',
    version: '',
    value: '-'
  },
  {
    name: 'native-scrollbar',
    type: 'boolean',
    default: 'true',
    description: '主体部分是否使用原生滚动条',
    version: '',
    value: '-'
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: 'undefined',
    description: '属性参考 Scrollbar props',
    version: '',
    value: '-'
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '主体的标题',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
