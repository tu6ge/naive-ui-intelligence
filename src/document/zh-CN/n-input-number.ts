import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'autofocus',
    type: 'boolean',
    default: false,
    description: '是否自动获取焦点',
    version: '2.26.1',
    value: ''
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    description: '是否有边框',
    version: '',
    value: ''
  },
  {
    name: 'button-placement',
    type: "'both' | 'right'",
    default: "'right'",
    description: '加减按钮的位置',
    version: '2.29.1',
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
    type: 'number | null',
    default: null,
    description: '非受控模式下的默认值',
    version: '',
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
    name: 'format',
    type: '(value: number | null) => string',
    default: undefined,
    description: '格式化值的方法，设定后会禁用 `update-value-on-input`',
    version: '2.30.0',
    value: ''
  },
  {
    name: 'input-props',
    type: 'InputHTMLAttributes',
    default: undefined,
    description:
      '组件内部 input 元素的属性，[在这里查看原生属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)。注意：`input-props` 不会覆盖内部 input 元素的已经存在的属性（除了 `type`）',
    version: '2.37.0',
    value: ''
  },
  {
    name: 'keyboard',
    type: '{ ArrowUp?: boolean, ArrowDown?: boolean }',
    default: '{}',
    description: '控制允许的键盘操作，属性值设为 `false` 的时候会禁用对应的键盘操作',
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
    name: 'max',
    type: 'number',
    default: undefined,
    description: '最大值',
    version: '',
    value: ''
  },
  {
    name: 'min',
    type: 'number',
    default: undefined,
    description: '最小值',
    version: '',
    value: ''
  },
  {
    name: 'parse',
    type: '(input: string) => number | null',
    default: undefined,
    description: '解析输入的字符串，设定后会禁用 `update-value-on-input`',
    version: '2.30.0',
    value: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'请输入'",
    description: '提示信息',
    version: '',
    value: ''
  },
  {
    name: 'precision',
    type: 'number',
    default: undefined,
    description: '数值保留的精度值，设定后会禁用 `update-value-on-input`',
    version: '2.30.0',
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
    name: 'round',
    type: 'boolean',
    default: undefined,
    description: '输入框是否圆角',
    version: '2.39.0',
    value: ''
  },
  {
    name: 'show-button',
    type: 'boolean',
    default: true,
    description: '是否有按钮',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '输入框大小',
    version: '',
    value: ''
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: undefined,
    description: '验证状态',
    version: '2.27.0',
    value: ''
  },
  {
    name: 'step',
    type: 'number',
    default: 1,
    description: '每次改变步数，可以为小数',
    version: '',
    value: ''
  },
  {
    name: 'update-value-on-input',
    type: 'boolean',
    default: true,
    description: '在输入的过程中，在输入值合法的情况下，是否改变值',
    version: '',
    value: ''
  },
  {
    name: 'validator',
    type: '(value) => boolean',
    default: undefined,
    description: '设置自定义验证',
    version: '',
    value: ''
  },
  {
    name: 'value',
    type: 'number | null',
    default: undefined,
    description: '受控模式下的值',
    version: '',
    value: ''
  },
  {
    name: 'on-blur',
    type: '(event: FocusEvent) => void',
    default: undefined,
    description: '移除焦点的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: undefined,
    description: '点击清空按钮时触发的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-focus',
    type: '(event: FocusEvent) => void',
    default: undefined,
    description: '获取焦点的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: number | null) => void',
    default: undefined,
    description: '组件值发生变化的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
