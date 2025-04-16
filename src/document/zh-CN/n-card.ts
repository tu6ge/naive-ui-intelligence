import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'action',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '操作区域内容，需要是 render 函数',
    version: '2.38.2'
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否显示卡片边框',
    version: '-'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否允许关闭',
    version: '-'
  },
  {
    name: 'content',
    type: 'string | (() => VNodeChild)',
    default: undefined,
    value: '-',
    description: '卡片内容，可以是 render 函数',
    version: '2.38.2'
  },
  {
    name: 'content-class',
    type: 'string',
    default: undefined,
    value: '-',
    description: '卡片内容区域的类名',
    version: '2.36.0'
  },
  {
    name: 'content-style',
    type: 'Object | string',
    default: undefined,
    value: '-',
    description: '卡片内容区域的样式',
    version: '-'
  },
  {
    name: 'cover',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '覆盖内容，需要是 render 函数',
    version: '2.38.2'
  },
  {
    name: 'embedded',
    type: 'boolean',
    default: false,
    value: '-',
    description: '使用更深的背景色展现嵌入效果，只对亮色主题生效',
    version: '-'
  },
  {
    name: 'footer',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '底部内容',
    version: '2.38.2'
  },
  {
    name: 'footer-class',
    type: 'string',
    default: undefined,
    value: '-',
    description: '卡片底部区域的类名',
    version: '2.36.0'
  },
  {
    name: 'footer-style',
    type: 'Object | string',
    default: undefined,
    value: '-',
    description: '卡片底部区域的样式',
    version: '-'
  },
  {
    name: 'header-class',
    type: 'string',
    default: undefined,
    value: '-',
    description: '卡片头部区域的类名',
    version: '2.36.0'
  },
  {
    name: 'header-style',
    type: 'Object | string',
    default: undefined,
    value: '-',
    description: '卡片头部区域的样式',
    version: '-'
  },
  {
    name: 'header-extra',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '头部额外内容，需要是 render 函数',
    version: '2.38.2'
  },
  {
    name: 'header-extra-class',
    type: 'string',
    default: undefined,
    value: '-',
    description: '卡片头部额外内容的类名',
    version: '2.36.0'
  },
  {
    name: 'header-extra-style',
    type: 'Object | string',
    default: undefined,
    value: '-',
    description: '卡片头部额外内容的样式',
    version: '2.25.0'
  },
  {
    name: 'hoverable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '卡片是否可悬浮',
    version: '-'
  },
  {
    name: 'segmented',
    type: 'boolean | { [part in "content" | "footer" | "action"]?: boolean | "soft" }',
    default: false,
    value: '-',
    description: '卡片的分段区域设置',
    version: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | 'huge'",
    default: 'medium',
    value: 'small/medium/large/huge',
    description: '卡片的尺寸',
    version: '-'
  },
  {
    name: 'tag',
    type: 'string',
    default: 'div',
    value: '-',
    description: '卡片组件要渲染为什么标签',
    version: '2.34.3'
  },
  {
    name: 'title',
    type: 'string | (() => VNodeChild)',
    default: undefined,
    value: '-',
    description: '卡片的标题，可以是 render 函数',
    version: '2.38.2 支持 render 函数'
  },
  {
    name: 'on-close',
    type: '() => void',
    default: undefined,
    value: '-',
    description: '点击卡片关闭图标时的回调',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'cover',
    description: '覆盖内容',
    params: '()',
    version: ''
  },
  {
    name: 'header',
    description: '头部内容',
    params: '()',
    version: ''
  },
  {
    name: 'header-extra',
    description: '头部额外内容',
    params: '()',
    version: ''
  },
  {
    name: 'default',
    description: '卡片内容',
    params: '()',
    version: ''
  },
  {
    name: 'footer',
    description: '底部内容',
    params: '()',
    version: ''
  },
  {
    name: 'action',
    description: '操作区域内容',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
