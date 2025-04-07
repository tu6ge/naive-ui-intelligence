import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'allow-input',
    type: '(value: string) => false',
    default: undefined,
    description: '校验当前的输入是否合法，如果返回 `false` 输入框便不会响应此次的输入',
    version: '2.30.4',
    value: ''
  },
  {
    name: 'autofocus',
    type: 'boolean',
    default: false,
    description: '是否自动获取焦点',
    version: '',
    value: ''
  },
  {
    name: 'autosize',
    type: 'boolean | { minRows?: number, maxRows?: number }',
    default: false,
    description: '自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如 `{ minRows: 1, maxRows: 3 }`',
    version: '',
    value: ''
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: false,
    description: '是否可清空',
    version: '',
    value: ''
  },
  {
    name: 'default-value',
    type: 'string | [string, string] | null',
    default: null,
    description: '输入框默认值',
    version: '',
    value: ''
  },
  {
    name: 'count-graphemes',
    type: '(value: string) => number',
    default: undefined,
    description: '计算输入的字数。如果设定了，那么原生的 `maxlength` 和 `minlength` 属性将不再被使用',
    version: '2.34.0',
    value: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    description: '是否禁用',
    version: '',
    value: ''
  },
  {
    name: 'input-props',
    type: 'InputHTMLAttributes | TextareaHTMLAttributes',
    default: undefined,
    description:
      'Input 组件内部 input 元素的属性，对 `pair` 类型不生效，[在这里查看原生属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。注意：input-props 不会覆盖内部 input 元素的已经存在的属性（除了 `type`）',
    version: '',
    value: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: undefined,
    description: '是否展示加载图标，设为非 `undefined` 会占据空间',
    version: '',
    value: ''
  },
  {
    name: 'maxlength',
    type: 'number',
    default: undefined,
    description: '最大输入长度',
    version: '',
    value: ''
  },
  {
    name: 'minlength',
    type: 'number',
    default: undefined,
    description: '最小输入长度',
    version: '',
    value: ''
  },
  {
    name: 'pair',
    type: 'boolean',
    default: false,
    description: '是否输入成对的值',
    version: '',
    value: ''
  },
  {
    name: 'passively-activated',
    type: 'boolean',
    default: false,
    description: '是否被动激活输入框',
    version: '',
    value: ''
  },
  {
    name: 'placeholder',
    type: 'string | [string, string]',
    default: undefined,
    description: '文本输入的占位符。如果 `pair` 是 `true`，`placeholder`是一个数组',
    version: '',
    value: ''
  },
  {
    name: 'readonly',
    type: 'boolean',
    default: false,
    description: '是否只读',
    version: '',
    value: ''
  },
  {
    name: 'render-count',
    type: '(props: { value: string }) => void',
    default: undefined,
    description: '字数统计的渲染函数',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: false,
    description: '输入框是否圆角',
    version: '',
    value: ''
  },
  {
    name: 'rows',
    type: 'number',
    default: 3,
    description: '输入框行数，对 type="textarea" 有效',
    version: '',
    value: ''
  },
  {
    name: 'separator',
    type: 'string',
    default: undefined,
    description: '成对输入框中间的分隔符',
    version: '',
    value: ''
  },
  {
    name: 'show-count',
    type: 'boolean',
    default: false,
    description: '是否显示字数统计',
    version: '',
    value: ''
  },
  {
    name: 'show-password-on',
    type: "'click' | 'mousedown'",
    default: undefined,
    description: '显示密码的时机',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '输入框尺寸',
    version: '',
    value: 'tiny/small/medium/large'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: undefined,
    description: '验证状态',
    version: '2.25.0',
    value: 'success/warning/error'
  },
  {
    name: 'type',
    type: "'text' | 'password' | 'textarea'",
    default: "'text'",
    description: '输入框类型',
    version: '',
    value: 'text/password/textarea'
  },
  {
    name: 'value',
    type: 'string | [string, string] | null',
    default: undefined,
    description: '文本输入的值。如果 `pair` 是 `true`，`value` 是一个数组',
    version: '',
    value: ''
  },
  {
    name: 'on-blur',
    type: '() => void',
    default: undefined,
    description: '输入框失去焦点时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-change',
    type: '(value: string | [string, string]) => void',
    default: undefined,
    description: '原生 change 事件触发时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: undefined,
    description: '输入框点击清空按钮时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-focus',
    type: '() => void',
    default: undefined,
    description: '输入框获得焦点时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-input',
    type: '(value: string | [string, string]) => void',
    default: undefined,
    description: '输入框在用户输入时触发',
    version: '',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: string | [string, string]) => void',
    default: undefined,
    description: '输入框值 change 时触发',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
