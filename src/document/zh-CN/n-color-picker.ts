import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'default-show',
    type: 'boolean',
    default: undefined,
    value: '-',
    description: '默认是否展示弹出层',
    version: '-'
  },
  {
    name: 'default-value',
    type: 'string | null',
    default: '和第一个 mode 对应的黑色值',
    value: '-',
    description: '默认的颜色值',
    version: '-'
  },
  {
    name: 'modes',
    type: "Array<'rgb' | 'hex' | 'hsl' | 'hsv'>",
    default: "['rgb', 'hex', 'hsl']",
    value: '-',
    description: '颜色选择器支持颜色的格式，注意一旦你在某个模式下选择了值，颜色选择器值的格式将跟随这个格式',
    version: '-'
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end',
    description: '面板的弹出位置',
    version: '2.25.0'
  },
  {
    name: 'render-label',
    type: '(color: string | null) => VNodeChild',
    default: undefined,
    value: '-',
    description: '触发器的内容',
    version: '2.24.0'
  },
  {
    name: 'show',
    type: 'boolean',
    default: undefined,
    value: '-',
    description: '是否展示面板',
    version: '-'
  },
  {
    name: 'show-alpha',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否可调节 alpha 通道',
    version: '-'
  },
  {
    name: 'show-preview',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否展示颜色预览块',
    version: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    value: 'small/medium/large',
    description: '颜色选择器的尺寸',
    version: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否禁用',
    version: '2.24.5'
  },
  {
    name: 'swatches',
    type: 'string[]',
    default: undefined,
    value: '-',
    description: '色板的值',
    version: '-'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: "'body'",
    value: '-',
    description: '面板的卸载位置，`false` 会待在原地',
    version: '-'
  },
  {
    name: 'value',
    type: 'string | null',
    default: undefined,
    value: '-',
    description: '颜色选择器的值',
    version: '-'
  },
  {
    name: 'on-complete',
    type: '(value: string) => void',
    default: undefined,
    value: '-',
    description: '颜色完成改变后的回调（在鼠标移动时候不会调用）',
    version: '-'
  },
  {
    name: 'on-confirm',
    type: '(value: string) => void',
    default: undefined,
    value: '-',
    description: '点击确定按钮的回调',
    version: '2.29.0'
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: undefined,
    value: '-',
    description: '点击清除按钮的回调',
    version: '2.39.0'
  },
  {
    name: 'on-update:show',
    type: '(value: boolean) => void',
    default: undefined,
    value: '-',
    description: '面板可见状态改变的回调',
    version: '-'
  },
  {
    name: 'on-update:value',
    type: '(value: string) => void',
    default: undefined,
    value: '-',
    description: '颜色改变时的回调',
    version: '-'
  },
  {
    name: 'actions',
    type: "Array<'confirm' | 'clear'> | null",
    default: null,
    value: '-',
    description: '显示按钮',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'label',
    description: '触发器的内容',
    params: '(color: string | null)',
    version: '2.24.0'
  },
  {
    name: 'action',
    description: '菜单操作区域的 slot',
    params: '()',
    version: '2.24.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
