import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'color',
    type: 'string',
    default: undefined,
    description: '图标颜色',
    version: '',
    value: ''
  },
  {
    name: 'depth',
    type: '1 | 2 | 3 | 4 | 5',
    default: undefined,
    description: '图标深度',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: 'number | string',
    default: undefined,
    description: '图标大小（当不指定单位时，默认单位: `px`）',
    version: '',
    value: ''
  },
  {
    name: 'component',
    type: 'Component',
    default: undefined,
    description: '要展示的图标组件',
    version: '2.24.6',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
