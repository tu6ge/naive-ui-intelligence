import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'accordion',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否只允许展开一个面板',
    version: '-'
  },
  {
    name: 'arrow-placement',
    type: "'left' | 'right'",
    default: 'left',
    value: 'left/right',
    description: '箭头位置',
    version: '-'
  },
  {
    name: 'default-expanded-names',
    type: 'string | number | Array<string | number> | null',
    default: null,
    value: '-',
    description: '非受控模式下展开的面板 `name`。`accordion` 模式时不为数组',
    version: '-'
  },
  {
    name: 'display-directive',
    type: "'if' | 'show'",
    default: 'if',
    value: 'if/show',
    description: '内部 `n-collapse-item` 在控制内容是否渲染时使用的指令，`if` 对应 `v-if`，`show` 对应 `v-show`',
    version: '-'
  },
  {
    name: 'expanded-names',
    type: 'string | number | Array<string | number> | null',
    default: undefined,
    value: '-',
    description: '受控模式下展开的面板的 `name`，`accordion` 模式时不为数组',
    version: '-'
  },
  {
    name: 'trigger-areas',
    type: "Array<'main' | 'arrow' | 'extra'>",
    default: "['main', 'arrow', 'extra']",
    value: '-',
    description: '触发展开的区域，如果不想让某些区域触发展开，可以使用此属性',
    version: '2.37.1'
  },
  {
    name: 'on-item-header-click',
    type: '(data: { name: string | number, expanded: boolean, event: MouseEvent }) => void',
    default: undefined,
    value: '-',
    description: '点击标题时触发的回调函数',
    version: '-'
  },
  {
    name: 'on-update:expanded-names',
    type: '(expandedNames: Array<string | number> | string | number | null) => void',
    default: undefined,
    value: '-',
    description: '展开内容改变时触发的回调函数',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'arrow',
    description: '折叠面板的自定义图标',
    params: '(props: { collapsed: boolean })',
    version: ''
  },
  {
    name: 'default',
    description: '折叠面板的内容',
    params: '()',
    version: ''
  },
  {
    name: 'header-extra',
    description: '折叠面板节点头部的额外内容',
    params: '(props: { collapsed: boolean })',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
