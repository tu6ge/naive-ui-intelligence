import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'auto-espace',
    type: 'boolean',
    default: true,
    description:
      '自动转义。默认情况下，`patterns` 中的元素会被转化为正则表达式进行匹配，这个过程中需要进行自动转义，正则表达式最终匹配的是元素的字面内容，例如 `\\(` 匹配的就是 `\\(`。如果你需要 `n-highlight` 组件去匹配使用 `patterns` 中元素本身构造的正则表达式，例如 `\\(` 匹配的是 `(`，则可以设为 `false`。如果你看不懂这些，不要改这个设置。',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'case-sensitive',
    type: 'boolean',
    default: false,
    description: '区分大小写',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'highlight-class',
    type: 'string',
    default: undefined,
    description: '高亮内容的类名',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'highlight-style',
    type: 'Object | string',
    default: undefined,
    description: '高亮内容的样式',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'highlight-tag',
    type: 'string',
    default: 'mark',
    description: '高亮内容的 HTML 元素类型',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'patterns',
    type: 'string[]',
    default: undefined,
    description: '需要高亮的文本内容',
    version: '2.40.0',
    value: ''
  },
  {
    name: 'text',
    type: 'string',
    default: undefined,
    description: '文本',
    version: '2.40.0',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
