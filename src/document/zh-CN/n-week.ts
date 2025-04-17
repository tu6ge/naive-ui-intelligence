import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'now'> | null",
    default: "['clear', 'now']",
    description: 'Week 类型的 Date Picker 中支持的操作',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'default-calendar-start-time',
    type: 'number',
    default: 'undefined',
    description: '面板日历默认开始的月份时间戳',
    value: '',
    version: '2.38.1'
  },
  {
    name: 'format',
    type: 'string',
    default: "中文为 'YYYY-w'，随语言变化",
    description: '时间格式化字符串，详情见 format',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "中文为 '选择周'，随语言变化",
    description: '没有值时的占位信息',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: string | null, timestampValue: number | null) => void',
    default: 'undefined',
    description: '受控数据更新时触发的回调函数',
    value: '',
    version: '2.37.0'
  },
  {
    name: 'on-update:value',
    type: '(value: number | null, formattedValue: string | null) => void',
    default: 'undefined',
    description: '受控数据更新时触发的回调函数',
    value: '',
    version: '2.37.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'clear',
    params: '(props: { onClear: () => void, text: string })',
    description: '面板的清除按钮',
    version: '2.40.0'
  },
  {
    name: 'now',
    params: '(props: { onNow: () => void, text: string })',
    description: '面板的此刻按钮',
    version: '2.40.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
