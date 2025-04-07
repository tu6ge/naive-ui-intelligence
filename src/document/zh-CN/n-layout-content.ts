import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content-class',
    type: 'string',
    default: undefined,
    description: '可滚动内容节点的类名',
    version: '2.36.0',
    value: ''
  },
  {
    name: 'content-style',
    type: 'string | Object',
    default: undefined,
    description: '可滚动内容节点的样式',
    version: '',
    value: ''
  },
  {
    name: 'embedded',
    type: 'boolean',
    default: false,
    description: '使用更深的背景色展现嵌入效果，只对亮色主题生效',
    version: '',
    value: ''
  },
  {
    name: 'has-sider',
    type: 'boolean',
    default: false,
    description: '组件内部是否有边栏，如果有的话必须设为 `true`',
    version: '',
    value: ''
  },
  {
    name: 'native-scrollbar',
    type: 'boolean',
    default: true,
    description: '是否在自身使用原生滚动条。如果设定为 `false`，`Layout` 将会对内容使用 `naive-ui` 风格的滚动条',
    version: '',
    value: ''
  },
  {
    name: 'position',
    type: "'static' | 'absolute'",
    default: "'static'",
    description:
      'static 模式将会把 CSS `position` 设为 `static`，absolute 模式将会把 CSS `position` 设为 `absolute`，还将 `left`、`right`、`top`、`bottom` 设为 `0`。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示',
    version: '',
    value: ''
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: undefined,
    description: '属性参考 [Scrollbar props](scrollbar#Scrollbar-Props)',
    version: '',
    value: ''
  },
  {
    name: 'sider-placement',
    type: "'left' | 'right'",
    default: 'left',
    description: '组件折叠侧边栏在哪一侧',
    version: '',
    value: 'left/right'
  },
  {
    name: 'on-scroll',
    type: '(e: Event) => void',
    default: undefined,
    description: '内容的滚动事件回调函数',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
