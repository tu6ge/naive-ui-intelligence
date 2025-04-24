import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'now' | 'confirm'> | null",
    default: "['clear', 'now', 'confirm']",
    description: 'DateTime 类型的 Date Picker 中支持的操作',
    value: '',
    version: ''
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
    name: 'default-time',
    type: 'string',
    default: 'undefined',
    description: '默认时间，格式为 `HH:mm:ss`',
    value: '',
    version: '2.22.0'
  },
  {
    name: 'format',
    type: 'string',
    default: "'yyyy-MM-dd HH:mm:ss'",
    description: '时间格式化字符串，详情见 format',
    value: '',
    version: ''
  },
  {
    name: 'is-date-disabled',
    type: "(current: number, detail: { type: 'date', year: number, month: number, date: number } | { type: 'month', year: number, month: number } | { type: 'year', year: number } | { type: 'quarter',  year: number, quarter: number } | { type: 'input' }) => boolean",
    default: 'undefined',
    description: '日期禁用的校验函数',
    value: 'detail',
    version: '2.37.1'
  },
  {
    name: 'is-time-disabled',
    type: '(current: number) => { isHourDisabled: boolean, isMinuteDisabled: boolean, isSecondDisabled: boolean }',
    default: 'undefined',
    description: '时间禁用的校验函数',
    value: '',
    version: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'选择日期时间'",
    description: '提示信息',
    value: '',
    version: ''
  },
  {
    name: 'time-picker-props',
    type: 'TimePickerProps',
    default: 'undefined',
    description: '面板中时间选择器的属性',
    value: '',
    version: '2.27.0'
  },
  {
    name: 'update-value-on-close',
    type: 'boolean',
    default: 'false',
    description: '关闭面板时更新值',
    value: '',
    version: ''
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: string | null, timestampValue: number | null) => void',
    default: 'undefined',
    description: '数据更新时触发的回调函数',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-update:value',
    type: '(value: number | null, formattedValue: string | null) => void',
    default: 'undefined',
    description: '数据更新时触发的回调函数',
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
    name: 'confirm',
    params: '(props: { onConfirm: () => void, disabled: boolean, text: string })',
    description: '面板的确认按钮',
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
