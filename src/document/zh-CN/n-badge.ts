import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    type: 'string',
    default: undefined,
    value: '-',
    description: '标记的颜色',
    version: ''
  },
  {
    name: 'dot',
    type: 'boolean',
    default: false,
    value: '-',
    description: '标记是否显示为点',
    version: ''
  },
  {
    name: 'max',
    type: 'number',
    default: undefined,
    value: '-',
    description: '标记最大数来处理溢出情况',
    version: ''
  },
  {
    name: 'offset',
    type: '[string | number, string | number]',
    default: undefined,
    value: '-',
    description: '距默认位置左侧、上方的偏移量',
    version: ''
  },
  {
    name: 'processing',
    type: 'boolean',
    default: false,
    value: '-',
    description: '标记显示进度',
    version: ''
  },
  {
    name: 'show-zero',
    type: 'boolean',
    default: false,
    value: '-',
    description: '标记为 0 时是否显示',
    version: ''
  },
  {
    name: 'show',
    type: 'boolean',
    default: true,
    value: '-',
    description: '标记受控显示',
    version: ''
  },
  {
    name: 'type',
    type: "'default' | 'success' | 'error' | 'warning' | 'info'",
    default: 'default',
    value: 'default/success/error/warning/info',
    description: '标记显示类型',
    version: ''
  },
  {
    name: 'value',
    type: 'string | number',
    default: undefined,
    value: '-',
    description: '标记数量',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
