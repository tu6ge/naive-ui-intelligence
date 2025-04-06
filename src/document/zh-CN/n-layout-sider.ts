import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: false,
    description: '是否显示边框',
    version: '',
    value: ''
  },
  {
    name: 'collapse-mode',
    type: "'transform' | 'width'",
    default: "'transform'",
    description: "如果设定为 'width'，Sider 的内容宽度将会被实际改变；如果设定为 'transform'，边栏将只会移动它的位置而不会改变宽度",
    version: '',
    value: ''
  },
  {
    name: 'collapsed',
    type: 'boolean',
    default: 'undefined',
    description: "边栏是否折叠。只在 position 为 'static' 时生效",
    version: '',
    value: ''
  },
  {
    name: 'collapsed-trigger-class',
    type: 'string',
    default: 'undefined',
    description: '折叠时触发器类名',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'collapsed-trigger-style',
    type: 'string | Object',
    default: 'undefined',
    description: '折叠时触发器样式',
    version: '',
    value: ''
  },
  {
    name: 'collapsed-width',
    type: 'number',
    default: 48,
    description: '折叠宽度',
    version: '',
    value: ''
  },
  {
    name: 'content-class',
    type: 'string',
    default: 'undefined',
    description: '可滚动内容节点的类名',
    version: '',
    value: ''
  },
  {
    name: 'content-style',
    type: 'string | Object',
    default: 'undefined',
    description: '可滚动内容节点的样式',
    version: '',
    value: ''
  },
  {
    name: 'default-collapsed',
    type: 'boolean',
    default: false,
    description: '非受控模式下的默认折叠状态',
    version: '',
    value: ''
  },
  {
    name: 'inverted',
    type: 'boolean',
    default: false,
    description: '使用反转背景色',
    version: '',
    value: ''
  },
  {
    name: 'native-scrollbar',
    type: 'boolean',
    default: true,
    description: '是否在自身使用原生滚动条。如果设定为 false，Sider 将会对内容使用 naive-ui 风格的滚动条',
    version: '',
    value: ''
  },
  {
    name: 'position',
    type: "'static' | 'absolute'",
    default: "'static'",
    description:
      'static 模式将会把 CSS `position` 设为 `static`，absolute 模式将会把 CSS `position` 设为 `absolute`，还将 `left`、`top`、`bottom` 设为 `0`。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示',
    version: '',
    value: ''
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: 'undefined',
    description: '属性参考 Scrollbar props',
    version: '',
    value: ''
  },
  {
    name: 'show-collapsed-content',
    type: 'boolean',
    default: true,
    description: '是否在 sider 折叠后展示内部内容',
    version: '',
    value: ''
  },
  {
    name: 'show-trigger',
    type: "'boolean' | 'bar' | 'arrow-circle'",
    default: false,
    description: '内置的触发按钮是否展示',
    version: '',
    value: ''
  },
  {
    name: 'trigger-class',
    type: 'string',
    default: 'undefined',
    description: '触发器类名',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'trigger-style',
    type: 'string | Object',
    default: 'undefined',
    description: '触发器样式',
    version: '',
    value: ''
  },
  {
    name: 'width',
    type: 'number | string',
    default: 272,
    description: '宽度的 CSS 值，为数字时会添加 px',
    version: '',
    value: ''
  },
  {
    name: 'on-after-enter',
    type: '() => void',
    default: 'undefined',
    description: '完成展开后的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-after-leave',
    type: '() => void',
    default: 'undefined',
    description: '完成折叠后的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-scroll',
    type: '(e: Event) => void',
    default: 'undefined',
    description: '内容的滚动事件回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-update:collapsed',
    type: '(collapsed: boolean) => void',
    default: 'undefined',
    description: '折叠状态发生改变时的回调函数',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
