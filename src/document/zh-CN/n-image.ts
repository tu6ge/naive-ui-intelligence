import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'alt',
    type: 'string',
    default: undefined,
    description: '图片说明',
    version: '',
    value: ''
  },
  {
    name: 'fallback-src',
    type: 'string',
    default: undefined,
    description: '图片加载失败时显示的地址',
    version: '',
    value: ''
  },
  {
    name: 'height',
    type: 'string | number',
    default: undefined,
    description: '图片高度',
    version: '',
    value: ''
  },
  {
    name: 'img-props',
    type: 'ImgHTMLAttributes',
    default: undefined,
    description: '组件中 img 元素的属性',
    version: '',
    value: ''
  },
  {
    name: 'lazy',
    type: 'boolean',
    default: false,
    description:
      '是否让图片进入视口再加载，单独使用将设置为[HTMLImageElement.loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) 的属性值；也可配合 `intersection-observer-options` 配置实现懒加载',
    version: '2.30.5',
    value: ''
  },
  {
    name: 'intersection-observer-options',
    type: '{ root?: Element | Document | string | null, rootMargin?: string, threshold?: number | number[]; }',
    default: undefined,
    description: '`lazy=true` 时 intersection observer 观测的配置',
    version: '2.30.5',
    value: ''
  },
  {
    name: 'object-fit',
    type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'",
    default: 'fill',
    description: '图片在容器内的的适应类型',
    version: '',
    value: ''
  },
  {
    name: 'preview-src',
    type: 'string',
    default: undefined,
    description: '预览图片的图片地址',
    version: '',
    value: ''
  },
  {
    name: 'preview-disabled',
    type: 'boolean',
    default: false,
    description: '是否禁用单击图像预览',
    version: '',
    value: ''
  },
  {
    name: 'previewed-img-props',
    type: 'HTMLAttributes',
    default: undefined,
    description: '预览图片时 img 元素的属性',
    version: '2.34.0',
    value: ''
  },
  {
    name: 'render-toolbar',
    type: '(props: { nodes: { prev: VNode, next: VNode, rotateCounterclockwise: VNode, rotateClockwise: VNode, resizeToOriginalSize: VNode, zoomOut: VNode, zoomIn: VNode, download: VNode, close: VNode } }) => VNodeChild',
    default: undefined,
    description: '工具栏的渲染函数',
    version: '2.38.2',
    value: ''
  },
  {
    name: 'show-toolbar',
    type: 'boolean',
    default: true,
    description: '图片放大后是否展示底部工具栏',
    version: '',
    value: ''
  },
  {
    name: 'show-toolbar-tooltip',
    type: 'boolean',
    default: false,
    description: '是否展示工具栏的提示',
    version: '2.24.0',
    value: ''
  },
  {
    name: 'src',
    type: 'string',
    default: undefined,
    description: '图片来源',
    version: '',
    value: ''
  },
  {
    name: 'width',
    type: 'string | number',
    default: undefined,
    description: '图片宽度',
    version: '',
    value: ''
  },
  {
    name: 'on-error',
    type: '(e: Event) => void',
    default: undefined,
    description: '图片加载失败执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-load',
    type: '(e: Event) => void',
    default: undefined,
    description: '图片加载完成执行的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
