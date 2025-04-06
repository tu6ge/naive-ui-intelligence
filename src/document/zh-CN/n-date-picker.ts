import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'calendar-day-format',
    type: 'string',
    default: 'undefined',
    description: '选择面板内部星期几的格式',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'calendar-header-year-format',
    type: 'string',
    default: 'undefined',
    description: '选择面板内部年的格式',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'calendar-header-month-format',
    type: 'string',
    default: 'undefined',
    description: '选择面板内部月的格式',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'calendar-header-month-before-year',
    type: 'string',
    default: 'undefined',
    description: '选择面板内部月是否显示在年的前面',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'calendar-header-month-year-separator',
    type: 'string',
    default: "' '",
    description: '选择面板内部年和月的分隔字符',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '是否支持清除',
    version: '',
    value: '-'
  },
  {
    name: 'date-format',
    type: 'string',
    default: 'undefined',
    description: '选择面板内部日期输入框的日期格式',
    version: '2.40.2',
    value: '-'
  },
  {
    name: 'default-value',
    type: 'number | [number, number] | null',
    default: 'undefined',
    description: '默认被选中的日期的时间戳',
    version: '',
    value: '-'
  },
  {
    name: 'default-formatted-value',
    type: 'string | [string, string] | null',
    default: 'undefined',
    description: 'Date Picker 格式化后的值',
    version: '',
    value: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    version: '',
    value: '-'
  },
  {
    name: 'first-day-of-week',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
    default: 'undefined',
    description: '日历上一周的开始，0 代表周一',
    version: '',
    value: '-'
  },
  {
    name: 'formatted-value',
    type: 'string | [string, string] | null',
    default: 'undefined',
    description: '格式化之后的值',
    version: '2.24.0',
    value: '-'
  },
  {
    name: 'input-readonly',
    type: 'boolean',
    default: 'false',
    description: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
    version: '',
    value: '-'
  },
  {
    name: 'month-format',
    type: 'string',
    default: "'M'",
    description: '设置面板中月份的显示方式，详情见 format',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'panel',
    type: 'boolean',
    default: 'false',
    description: '是否只使用面板',
    version: '2.29.1',
    value: '-'
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    description: '面板的弹出位置',
    version: '2.25.0',
    value: '-'
  },
  {
    name: 'quarter-format',
    type: 'string',
    default: "'Q'Q",
    description: '设置面板中季度的显示方式，详情见 format',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'shortcuts',
    type: 'Record<string, number | (() => number)> | Record<string, [number, number] | (() => [number, number])>',
    default: 'undefined',
    description: '自定义快捷按钮',
    version: '',
    value: '-'
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'undefined',
    description: '是否展示面板',
    version: '2.28.3',
    value: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸',
    version: '',
    value: '-'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    description: '验证状态',
    version: '2.27.0',
    value: '-'
  },
  {
    name: 'time-picker-format',
    type: 'string | undefined',
    default: 'undefined',
    description: '日期面板内时间的显示方式，详情见 format',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'body',
    description: '面板的容器节点，false 会待在原地',
    version: '',
    value: '-'
  },
  {
    name: 'type',
    type: "'date' | 'datetime' | 'daterange' | 'datetimerange' | 'month' | 'monthrange' | 'year' | 'yearrange' | 'quarter' | 'quarterrange' | 'week'",
    default: "'date'",
    description: 'Date Picker 的类型',
    version: "'quarter' v2.22.0, 'monthrange' 2.28.3",
    value: '-'
  },
  {
    name: 'value',
    type: 'number | [number, number] | null',
    default: 'undefined',
    description: 'Date Picker 的值',
    version: '',
    value: '-'
  },
  {
    name: 'value-format',
    type: 'string',
    default: '跟随 format 属性',
    description: '绑定值的格式，详情见 format',
    version: '',
    value: '-'
  },
  {
    name: 'year-format',
    type: 'string',
    default: "'y'",
    description: '设置面板中年的显示方式，详情见 format',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'year-range',
    type: '[number, number]',
    default: '[1901, 2100]',
    description: '设置面板中的年份选择范围',
    version: '2.40.0',
    value: '-'
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: 'undefined',
    description: '用户 clear 时执行的回调',
    version: '2.28.3',
    value: '-'
  },
  {
    name: 'on-confirm',
    type: '(value: number | [number, number] | null, formattedValue: string | [string, string] | null) => void',
    default: 'undefined',
    description: '用户 confirm 时执行的回调',
    version: '2.28.3',
    value: '-'
  },
  {
    name: 'on-blur',
    type: '() => void',
    default: 'undefined',
    description: '用户 blur 时执行的回调',
    version: '',
    value: '-'
  },
  {
    name: 'on-focus',
    type: '() => void',
    default: 'undefined',
    description: '用户 focus 时执行的回调',
    version: '',
    value: '-'
  },
  {
    name: 'on-next-month',
    type: '() => void',
    default: 'undefined',
    description: '点击下一个月时的回调',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'on-prev-month',
    type: '() => void',
    default: 'undefined',
    description: '点击上一个月时的回调',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'on-next-year',
    type: '() => void',
    default: 'undefined',
    description: '点击下一年时的回调',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'on-prev-year',
    type: '() => void',
    default: 'undefined',
    description: '点击上一年时的回调',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'on-update:show',
    type: '(show: boolean) => void',
    default: 'undefined',
    description: '面板打开、关闭时的回调',
    version: '2.28.3',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
