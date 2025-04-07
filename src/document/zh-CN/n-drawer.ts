import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'auto-focus',
    type: 'boolean',
    default: 'true',
    description: '是否自动聚焦 Drawer 第一个可聚焦的元素',
    version: '2.24.2',
    value: '-'
  },
  {
    name: 'block-scroll',
    type: 'boolean',
    default: 'true',
    description: '是否在打开时禁用 body 滚动',
    version: '2.28.3',
    value: '-'
  },
  {
    name: 'close-on-esc',
    type: 'boolean',
    default: 'true',
    description: '是否在摁下 Esc 键的时候关闭 Drawer',
    version: '2.24.2',
    value: '-'
  },
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '抽屉可滚动内容节点的类名',
    version: '2.37.0',
    value: '-'
  },
  {
    name: 'content-style',
    type: 'string | Object',
    default: 'undefined',
    description: '抽屉可滚动内容节点的样式',
    version: '',
    value: '-'
  },
  {
    name: 'default-width',
    type: 'number | string',
    default: '251',
    description: '抽屉的默认宽度，在位置是 left 和 right 时生效',
    version: '2.31.0',
    value: '-'
  },
  {
    name: 'default-height',
    type: 'number | string',
    default: '251',
    description: '抽屉的默认高度，在位置是 top 和 bottom 时生效',
    version: '2.31.0',
    value: '-'
  },
  {
    name: 'display-directive',
    type: "'if' | 'show'",
    default: "'if'",
    description: "n-drawer 在控制内容是否渲染时使用的指令，'if' 对应 v-if，'show' 对应 v-show",
    version: '',
    value: 'if/show'
  },
  {
    name: 'height',
    type: 'number | string',
    default: 'undefined',
    description: '抽屉的高度，在位置是 top 和 bottom 时生效',
    version: '',
    value: '-'
  },
  {
    name: 'mask-closable',
    type: 'boolean',
    default: 'true',
    description: '点击遮罩时是否发出 update:show 事件',
    version: '',
    value: '-'
  },
  {
    name: 'max-width',
    type: 'number',
    default: 'undefined',
    description: '拖动时的最大宽度',
    version: '2.35.0',
    value: '-'
  },
  {
    name: 'max-height',
    type: 'number',
    default: 'undefined',
    description: '拖动时的最大高度',
    version: '2.35.0',
    value: '-'
  },
  {
    name: 'min-width',
    type: 'number',
    default: 'undefined',
    description: '拖动时的最小宽度',
    version: '2.35.0',
    value: '-'
  },
  {
    name: 'min-height',
    type: 'number',
    default: 'undefined',
    description: '拖动时的最小高度',
    version: '2.35.0',
    value: '-'
  },
  {
    name: 'native-scrollbar',
    type: 'boolean',
    default: 'true',
    description: '是否使用原生滚动',
    version: '',
    value: '-'
  },
  {
    name: 'placement',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: "'right'",
    description: '抽屉展示的位置',
    version: '',
    value: 'top/right/bottom/left'
  },
  {
    name: 'resizable',
    type: 'boolean',
    default: 'false',
    description: '抽屉是否可以调整宽度、高度',
    version: '2.31.0',
    value: '-'
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: 'undefined',
    description: '属性参考 Scrollbar props',
    version: '',
    value: '-'
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'false',
    description: '是否展示抽屉',
    version: '',
    value: '-'
  },
  {
    name: 'show-mask',
    type: 'boolean | "transparent"',
    default: 'true',
    description: '是否显示遮罩，如果设为 "transparent" 会展示透明遮罩，如果设为 false 会禁用 trap-focus',
    version: '2.28.3',
    value: '-'
  },
  {
    name: 'to',
    type: 'string | HTMLElement',
    default: "'body'",
    description: '抽屉出现的区域',
    version: '',
    value: '-'
  },
  {
    name: 'trap-focus',
    type: 'boolean',
    default: 'true',
    description: '是否将焦点锁定在 Drawer 内部',
    version: '2.24.2',
    value: '-'
  },
  {
    name: 'width',
    type: 'number | string',
    default: 'undefined',
    description: '抽屉的宽度，在位置是 left 和 right 时生效',
    version: '',
    value: '-'
  },
  {
    name: 'z-index',
    type: 'number',
    default: 'undefined',
    description: '抽屉的 z-index',
    version: '2.24.0',
    value: '-'
  },
  {
    name: 'on-after-enter',
    type: '() => void',
    default: 'undefined',
    description: 'Drawer 出现后的回调',
    version: '2.28.0',
    value: '-'
  },
  {
    name: 'on-after-leave',
    type: '() => void',
    default: 'undefined',
    description: 'Drawer 关闭后的回调',
    version: '2.28.0',
    value: '-'
  },
  {
    name: 'on-esc',
    type: '() => void',
    default: 'undefined',
    description: '焦点在 Drawer 内部时按下 Esc 键的回调',
    version: '2.24.2',
    value: '-'
  },
  {
    name: 'on-mask-click',
    type: '(e: MouseEvent) => void',
    default: 'undefined',
    description: '点击遮罩的回调',
    version: '',
    value: '-'
  },
  {
    name: 'on-update:height',
    type: '(height: number) => void',
    default: 'undefined',
    description: '抽屉高度改变时执行的回调函数',
    version: '2.31.0',
    value: '-'
  },
  {
    name: 'on-update:show',
    type: '(show: boolean) => void',
    default: 'undefined',
    description: '抽屉显示状态改变时执行的回调函数',
    version: '',
    value: '-'
  },
  {
    name: 'on-update:width',
    type: '(width: number) => void',
    default: 'undefined',
    description: '抽屉宽度改变时执行的回调函数',
    version: '2.31.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
