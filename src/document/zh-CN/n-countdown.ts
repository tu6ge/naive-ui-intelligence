import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'active',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否处于计时状态',
    version: '2.23.2'
  },
  {
    name: 'duration',
    type: 'number',
    default: 0,
    value: '-',
    description: '倒计时持续时间，单位毫秒，非响应式',
    version: '2.23.2'
  },
  {
    name: 'precision',
    type: '0 | 1 | 2 | 3',
    default: 0,
    value: '0/1/2/3',
    description: '倒计时的秒显示的精度',
    version: '2.23.2'
  },
  {
    name: 'render',
    type: '(props: { hours: number, minutes: number, seconds: number, milliseconds: number }) => VNodeChild',
    default: 'undefined',
    value: '-',
    description: '时间的渲染函数',
    version: '2.23.2'
  },
  {
    name: 'on-finish',
    type: '() => void',
    default: 'undefined',
    value: '-',
    description: '倒计时结束的回调',
    version: '2.23.2'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
