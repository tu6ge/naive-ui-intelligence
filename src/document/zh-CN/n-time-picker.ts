import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'actions',
    type: "Array<'clear' | 'now' | 'confirm'> | null",
    default: "['now', 'confirm']",
    description: 'Time Picker 中支持的操作',
    value: '',
    version: "'clear' 2.37.0"
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '是否可清空',
    value: '',
    version: ''
  },
  {
    name: 'default-value',
    type: 'number | null',
    default: 'null',
    description: '非受控模式下的默认值',
    value: '',
    version: ''
  },
  {
    name: 'default-formatted-value',
    type: 'string | null',
    default: 'undefined',
    description: '非受控模式下的默认格式化后的值',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'format',
    type: 'string',
    default: "'HH:mm:ss'",
    description: '时间格式化字符串，详情见 [format](https://date-fns.org/v2.23.0/docs/format)',
    value: '',
    version: ''
  },
  {
    name: 'formatted-value',
    type: 'string | null',
    default: 'undefined',
    description: '格式化后的值',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'hours',
    type: 'number | number[]',
    default: 'undefined',
    description: '通过数组指定显示的小时。当值为 `number` 时，将被当做时间步进处理',
    value: '',
    version: ''
  },
  {
    name: 'minutes',
    type: 'number | number[]',
    default: 'undefined',
    description: '通过数组指定显示的分钟。当值为 `number` 时，将被当做时间步进处理',
    value: '',
    version: ''
  },
  {
    name: 'seconds',
    type: 'number | number[]',
    default: 'undefined',
    description: '通过数组指定显示的秒。当值为 `number` 时，将被当做时间步进处理',
    value: '',
    version: ''
  },
  {
    name: 'input-readonly',
    type: 'boolean',
    default: 'false',
    description: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
    value: '',
    version: ''
  },
  {
    name: 'is-hour-disabled',
    type: '(hour: number) => boolean',
    default: '() => false',
    description: '用于禁用小时的回调函数',
    value: '',
    version: ''
  },
  {
    name: 'is-minute-disabled',
    type: '(minute: number, hour: number | null) => boolean',
    default: '() => false',
    description: '用于禁用分钟的回调函数，在没有选中值时，`hour` 是 `null`',
    value: '',
    version: ''
  },
  {
    name: 'is-second-disabled',
    type: '(second: number, minute: number | null, hour: number | null) => boolean',
    default: '() => false',
    description: '用于禁用秒钟的回调函数，在没有选中值时，`minute` 和 `hour` 是 `null`',
    value: '',
    version: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'请选择时间'",
    description: '选择框的占位符',
    value: '',
    version: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    description: '时间选择器的面板的弹出位置',
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end',
    version: '2.25.0'
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'undefined',
    description: '是否展示面板',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '选择框的尺寸',
    value: 'small/medium/large',
    version: ''
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    description: '验证状态',
    value: 'success/warning/error',
    version: '2.27.0'
  },
  {
    name: 'time-zone',
    type: 'string',
    default: 'undefined',
    description: "格式化值时使用的时区，遵循 [iana time zones](https://www.iana.org/time-zones) 格式。你可以使用 `Intl.supportedValuesOf('timeZone')` 来查看支持的时区",
    value: '',
    version: '2.30.0'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: "'body'",
    description: '菜单的容器节点，`false` 会待在原地',
    value: '',
    version: ''
  },
  {
    name: 'use-12-hours',
    type: 'boolean',
    default: 'false',
    description: '是否使用 12 小时制的面板',
    value: '',
    version: ''
  },
  {
    name: 'value',
    type: 'number | null',
    default: 'undefined',
    description: '受控模式下的值',
    value: '',
    version: ''
  },
  {
    name: 'value-format',
    type: 'string',
    default: '跟随 format',
    description: '格式化后值的格式',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-blur',
    type: '() => void',
    default: 'undefined',
    description: '选择框失去焦点时的回调',
    value: '',
    version: ''
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: 'undefined',
    description: '清除值时的回调',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'on-confirm',
    type: '(value: number | null, formattedValue: string | null) => void',
    default: 'undefined',
    description: '点击确认按钮时的回调',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'on-focus',
    type: '() => void',
    default: 'undefined',
    description: '选择框获得焦点时的回调',
    value: '',
    version: ''
  },
  {
    name: 'on-update:formatted-value',
    type: '(value: number | null, timestampValue: number | null) => void',
    default: 'undefined',
    description: '格式化的值发生改变时的回调',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-update:show',
    type: '(show: boolean) => void',
    default: 'undefined',
    description: '面板打开、关闭时的回调',
    value: '',
    version: '2.28.3'
  },
  {
    name: 'on-update:value',
    type: '(value: number | null, formattedValue: string | null) => void',
    default: 'undefined',
    description: '值发生改变时的回调',
    value: "'formattedValue'",
    version: '2.24.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '自定义图标',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots, name: 'date-picker' }

export default document
