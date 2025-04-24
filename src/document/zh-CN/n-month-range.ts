import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'confirm'> | null",
    default: "['clear', 'confirm']",
    description: 'MonthRange 类型的 Date Picker 中支持的用户操作',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'end-placeholder',
    type: 'string',
    default: "'结束月份'",
    description: 'MonthRange 中 end 选框的提示信息',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'format',
    type: 'string',
    default: "'yyyy-MM-dd'",
    description: '时间格式化字符串，详情见 format',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'close-on-select',
    type: 'boolean',
    default: 'false',
    description: '用户选择时间范围后是否自动关闭面板',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'separator',
    type: 'string',
    default: '内置图标',
    description: 'start 选框与 end 选框之间的分隔符',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'start-placeholder',
    type: 'string',
    default: "'开始月份'",
    description: 'MonthRange 中 start 选框的提示信息',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'update-value-on-close',
    type: 'boolean',
    default: 'false',
    description: '关闭面板时是否更新值',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: [string, string] | null, timestampValue: [number, number] | null) => void',
    default: 'undefined',
    description: '数据更新时触发的回调函数',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'on-update:value',
    type: '(value: [number, number] | null, formattedValue: [string, string] | null) => void',
    default: 'undefined',
    description: '数据更新时触发的回调函数',
    value: '',
    version: '2.28.3'
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

export const document: ElDocument = { attributes, events, slots, name: 'date-picker' }

export default document
