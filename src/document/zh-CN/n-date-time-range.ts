import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'confirm'> | null",
    default: "['clear', 'confirm']",
    description: 'DateTimeRange 类型的 Date Picker 中支持的用户操作',
    value: '',
    version: ''
  },
  {
    name: 'bind-calendar-months',
    type: 'boolean',
    default: 'false',
    description: '面板月份是否连续',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'default-calendar-start-time',
    type: 'number',
    default: 'undefined',
    description: '面板日历默认开始的月份时间戳',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'default-calendar-end-time',
    type: 'number',
    default: 'undefined',
    description: '面板日历默认结束的月份时间戳',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'default-time',
    type: 'string | Array<string | undefined>',
    default: 'undefined',
    description: '默认时间，格式为 `HH:mm:ss`',
    value: '',
    version: '2.22.0'
  },
  {
    name: 'end-placeholder',
    type: 'string',
    default: "'结束日期时间'",
    description: 'DateTimeRange 中 end 选框的提示信息',
    value: '',
    version: ''
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
    type: "(current: number, phase: 'start' | 'end', value: [number, number] | null) => boolean",
    default: 'undefined',
    description: '日期禁用的校验函数',
    value: '',
    version: ''
  },
  {
    name: 'is-time-disabled',
    type: "(current: number, phase: 'start' | 'end', value: [number, number]) => { isHourDisabled?: (hour: number) => boolean, isMinuteDisabled?: (minute: number, hour: number | null) => boolean, isSecondDisabled?: (second: number, minute: number | null, hour: number | null) => boolean }",
    default: 'undefined',
    description: '时间禁用的校验函数，校验函数中的 `null` 表示当前没有选中值',
    value: '',
    version: ''
  },
  {
    name: 'separator',
    type: 'string',
    default: '内置图标',
    description: 'start 选框与 end 选框之间的分隔符',
    value: '',
    version: ''
  },
  {
    name: 'start-placeholder',
    type: 'string',
    default: "'开始日期时间'",
    description: 'DateTimeRange 中 start 选框的提示信息',
    value: '',
    version: ''
  },
  {
    name: 'time-picker-props',
    type: 'TimePickerProps | [TimePickerProps, TimePickerProps]',
    default: 'undefined',
    description: '面板中时间选择器的属性',
    value: '',
    version: '2.27.0'
  },
  {
    name: 'update-value-on-close',
    type: 'boolean',
    default: 'false',
    description: '关闭面板时是否更新值',
    value: '',
    version: ''
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: [string, string] | null, timestampValue: [number, number] | null) => void',
    default: 'undefined',
    description: '数据更新时触发的回调函数',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-update:value',
    type: '(value: [number, number] | null, formattedValue: [string, string] | null) => void',
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
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
