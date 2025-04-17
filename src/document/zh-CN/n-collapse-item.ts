import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用展开',
    value: '',
    version: '2.32.2'
  },
  {
    name: 'display-directive',
    type: `'if' | 'show'`,
    default: 'undefined',
    description: "自身在控制内容是否渲染时使用的指令，'if' 对应 `v-if`，'show' 对应 `v-show`。在设定为 `undefined` 的时候跟随外层的 `n-collapse`",
    value: '',
    version: ''
  },
  {
    name: 'name',
    type: 'string | number',
    default: '随机字符串',
    description: '名称',
    value: '',
    version: ''
  },
  {
    name: 'title',
    type: 'string',
    default: 'undefined',
    description: '标题',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'arrow',
    params: '(props: { collapsed: boolean })',
    description: '折叠面板节点头部的自定义图标',
    version: '-'
  },
  {
    name: 'default',
    params: '()',
    description: '折叠面板节点的内容',
    version: '-'
  },
  {
    name: 'header',
    params: '(props: { collapsed: boolean })',
    description: '折叠面板节点头部的内容',
    version: '-'
  },
  {
    name: 'header-extra',
    params: '(props: { collapsed: boolean })',
    description: '折叠面板节点头部的额外内容',
    version: '-'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
