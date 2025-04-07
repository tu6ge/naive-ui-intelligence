import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'align',
    type: 'string',
    default: 'undefined',
    description: '垂直排列方式，参考 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'inline',
    type: 'boolean',
    default: 'false',
    description: '是否为行内元素',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'justify',
    type: 'string',
    default: "'start'",
    description: '水平排列方式，参考 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | number | [number, number]",
    default: "'medium'",
    description: '为数字时，是水平和垂直间距；为数组时，是 [水平间距, 垂直间距]',
    version: '2.37.0',
    value: 'small/medium/large'
  },
  {
    name: 'vertical',
    type: 'boolean',
    default: 'false',
    description: '是否垂直布局',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'wrap',
    type: 'boolean',
    default: 'true',
    description: '是否超出换行',
    version: '2.37.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
