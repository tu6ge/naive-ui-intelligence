import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'align',
    type: "'start' | 'end' | 'center' | 'baseline' | 'stretch'",
    default: 'undefined',
    description: '垂直排列方式',
    value: '',
    version: 'start/end/center/baseline/stretch'
  },
  {
    name: 'inline',
    type: 'boolean',
    default: 'false',
    description: '是否为行内元素',
    value: '',
    version: ''
  },
  {
    name: 'wrap-item',
    type: 'boolean',
    default: 'true',
    description: '是否存在包裹子元素的容器，`false` 值只会对支持 flex gap 的浏览器生效',
    value: '',
    version: '2.30.5'
  },
  {
    name: 'item-class',
    type: 'string',
    default: 'undefined',
    description: '节点类名，当 `wrap-item` 为 `true` 时有效',
    value: '',
    version: '2.36.0'
  },
  {
    name: 'item-style',
    type: 'string | object',
    default: 'undefined',
    description: '节点样式，当 `wrap-item` 为 `true` 时有效',
    value: '',
    version: ''
  },
  {
    name: 'justify',
    type: "'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'",
    default: "'start'",
    description: '水平排列方式',
    value: 'start/end/center/space-around/space-between/space-evenly',
    version: "'space-evenly' 2.28.3"
  },
  {
    name: 'reverse',
    type: 'boolean',
    default: 'false',
    description: '是否反向排列内部元素',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | number | [number, number]",
    default: "'medium'",
    description: '为数字时，是水平和垂直间距；为数组时，是 [水平间距, 垂直间距]',
    value: 'small/medium/large',
    version: ''
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否垂直布局',
    value: '',
    version: ''
  },
  {
    name: 'wrap',
    type: 'boolean',
    default: 'true',
    description: '是否超出换行',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
