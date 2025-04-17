import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'offset',
    type: 'number | ResponsiveDescription',
    default: '0',
    description: '栅格左侧的间隔格数',
    value: '',
    version: ''
  },
  {
    name: 'span',
    type: 'number | ResponsiveDescription',
    default: '1',
    description: '栅格占据的列数，为 0 的时候会隐藏',
    value: '',
    version: ''
  },
  {
    name: 'suffix',
    type: 'boolean',
    default: 'false',
    description: '栅格后缀',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
