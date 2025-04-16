import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'default-value',
    type: 'number',
    default: null,
    value: '-',
    description: '默认被选中的日期的时间戳',
    version: '-'
  },
  {
    name: 'is-date-disabled',
    type: '(timestamp: number) => boolean',
    default: undefined,
    value: '-',
    description: '日期禁用的校验函数',
    version: '-'
  },
  {
    name: 'value',
    type: 'number | null',
    default: undefined,
    value: '-',
    description: '被选中的日期的时间戳',
    version: '-'
  },
  {
    name: 'on-panel-change',
    type: '(info: { year: number, month: number })',
    default: undefined,
    value: '-',
    description: '面板内容切换的回调',
    version: '2.24.0'
  },
  {
    name: 'on-update:value',
    type: '(timestamp: number, info: { year: number, month: number, date: number }) => void',
    default: undefined,
    value: '-',
    description: '选中日期的回调，`month` 从 1 开始',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '每个日期中渲染的内容',
    params: '(props: { year: number, month: number, date: number })',
    version: ''
  },
  {
    name: 'header',
    description: '日历的标题，`month` 从 1 开始',
    params: '(props: { year: number, month: number })',
    version: '2.29.1'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
