import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'autosize',
    type: 'boolean | { maxRows?: number, minRows?: number }',
    default: false,
    description: '自动换行',
    version: '',
    value: ''
  },
  {
    name: 'options',
    type: 'MentionOption[]',
    default: '[]',
    description: '选项列表',
    version: '',
    value: ''
  },
  {
    name: 'type',
    type: "'text' | 'textarea'",
    default: "'text'",
    description: '输入框类型',
    version: '',
    value: 'text/textarea'
  },
  {
    name: 'separator',
    type: 'string',
    default: "' '",
    description: '切分提及使用的字符，长度必须为 1',
    version: '',
    value: ''
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    description: '是否显示输入框边框',
    version: '',
    value: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    description: '是否设置输入框为禁用状态',
    version: '',
    value: ''
  },
  {
    name: 'default-value',
    type: 'string',
    default: "''",
    description: '输入框的默认值',
    version: '',
    value: ''
  },
  {
    name: 'filter',
    type: '(pattern: string, option: MentionOption) => boolean',
    default: '内置的过滤函数',
    description: '根据 `pattern` 决定显示那些选项的过滤函数',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    description: '选择面板是否显示加载状态',
    version: '',
    value: ''
  },
  {
    name: 'prefix',
    type: 'string | string[]',
    default: "'@'",
    description: '触发提及的前缀，长度必须为 1',
    version: '',
    value: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "''",
    description: '输入框的占位符',
    version: '',
    value: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    description: '选择面板的弹出位置.',
    version: '2.25.0',
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end'
  },
  {
    name: 'render-label',
    type: '(option: MentionOption) => VNodeChild',
    default: 'undefined',
    description: '选项标签渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '输入框的大小',
    version: '',
    value: 'small/medium/large'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    description: '验证状态',
    version: '2.27.0',
    value: 'success/warning/error'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'body',
    description: '菜单的容器节点，`false` 会待在原地',
    version: '',
    value: ''
  },
  {
    name: 'value',
    type: 'string | null',
    default: 'undefined',
    description: '输入框的值',
    version: '',
    value: ''
  },
  {
    name: 'on-update:show',
    type: '(show: boolean) => void',
    default: 'undefined',
    description: '选择面板显示状态发生变化时触发',
    version: '2.34.0',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: string) => void',
    default: 'undefined',
    description: '输入框值发生更新时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-select',
    type: '(option: MentionOption, prefix: string) => void',
    default: 'undefined',
    description: '输入框的选中时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-focus',
    type: '(e: FocusEvent) => void',
    default: 'undefined',
    description: '输入框获得焦点时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-search',
    type: '(pattern: string, prefix: string) => void',
    default: 'undefined',
    description: '输入框搜索时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-blur',
    type: '(e: FocusEvent) => void',
    default: 'undefined',
    description: '输入框失去焦点时触发',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'empty',
    description: '菜单无数据时的 slot',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
