import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'gradient',
    type: 'string | { from: string, to: string, deg: number | string }',
    default: 'undefined',
    description: '文字渐变色参数',
    version: '',
    value: '-'
  },
  {
    name: 'size',
    type: 'number | string',
    default: 'undefined',
    description: '文字大小（当不指定单位时，默认单位: `px`）',
    version: '',
    value: '-'
  },
  {
    name: 'type',
    type: "'primary' | 'info' | 'success' | 'warning' | 'error'",
    default: "'primary'",
    description: '渐变文字的类型',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
