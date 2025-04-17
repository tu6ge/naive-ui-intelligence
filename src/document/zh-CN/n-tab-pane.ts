import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '是否允许关闭标签，只在标签的 `type` 为 `card` 时生效',
    value: '',
    version: ''
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
    name: 'display-directive',
    type: "'if' | 'show' | 'show:lazy'",
    default: "'if'",
    description: '选择性渲染使用的指令，`if` 对应 `v-if`，`show` 对应 `v-show`，使用 `show` 的时候标签页状态切换后不会被重置，使用 `show:lazy` 的时候显示效果跟 `show` 一致，不过内容会进行延迟加载',
    value: 'if/show/show:lazy',
    version: ''
  },
  {
    name: 'name',
    type: 'string | number',
    default: 'undefined',
    description: '必填，标签的名称',
    value: '',
    version: ''
  },
  {
    name: 'tab',
    type: 'string | VNode | () => VNodeChild',
    default: 'undefined',
    description: '标签的 `tab`',
    value: '',
    version: ''
  },
  {
    name: 'tab-props',
    type: 'Object',
    default: 'undefined',
    description: '标签 `tab` 的 DOM 属性',
    value: '',
    version: '2.24.2'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: '标签项的内容',
    version: ''
  },
  {
    name: 'tab',
    params: '()',
    description: '标签项 `tab` 的内容',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
