import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'now'> | null",
    default: "['clear', 'now']",
    description: 'Year 类型的 Date Picker 中支持的操作',
    value: '',
    version: ''
  },
  {
    name: 'format',
    type: 'string',
    default: "'yyyy'",
    description: '时间格式化字符串，详情见 format',
    value: '',
    version: ''
  },
  {
    name: 'is-date-disabled',
    type: "(current: number, detail: { type: 'date', year: number, month: number, date: number } | { type: 'month', year: number, month: number } | { type: 'year', year: number } | { type: 'quarter',  year: number, quarter: number } | { type: 'input' }) => boolean",
    default: 'undefined',
    description: '年份禁用的校验函数',
    value: 'detail',
    version: '2.37.1'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'选择年份'",
    description: '没有值时的占位信息',
    value: '',
    version: ''
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: string | null, timestampValue: number | null) => void',
    default: 'undefined',
    description: '受控数据更新时触发的回调函数',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-update:value',
    type: '(value: number | null, formattedValue: string | null) => void',
    default: 'undefined',
    description: '受控数据更新时触发的回调函数',
    value: 'formattedValue',
    version: '2.24.0'
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

export const document: ElDocument = { attributes, events, slots, name: 'date-picker' }

export default document
