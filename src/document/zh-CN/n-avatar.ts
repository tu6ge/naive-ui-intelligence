import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: false,
    value: '-',
    description: '头像是否带边框',
    version: ''
  },
  {
    name: 'color',
    type: 'string',
    default: undefined,
    value: '-',
    description: '头像的背景色',
    version: ''
  },
  {
    name: 'fallback-src',
    type: 'string',
    default: undefined,
    value: '-',
    description: '头像加载失败时显示的图片的地址',
    version: ''
  },
  {
    name: 'img-props',
    type: 'ImgHTMLAttributes',
    default: undefined,
    value: '-',
    description: '组件中 img 元素的属性',
    version: ''
  },
  {
    name: 'intersection-observer-options',
    type: '{ root?: Element | Document | string | null, rootMargin?: string, threshold?: number | number[] }',
    default: undefined,
    value: '-',
    description: 'lazy=true 时 intersection observer 观测的配置',
    version: ''
  },
  {
    name: 'lazy',
    type: 'boolean',
    default: false,
    value: '-',
    description:
      '是否让图片进入视口再加载，单独使用将设置为[HTMLImageElement.loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading) 的属性值；也可配合 intersection-observer-options 配置实现懒加载',
    version: ''
  },
  {
    name: 'object-fit',
    type: "'fill' | 'contain' | 'cover' | 'none' | 'scale-down'",
    default: 'fill',
    value: 'fill/contain/cover/none/scale-down',
    description: '头像的图片在容器内的的适应类型',
    version: ''
  },
  {
    name: 'render-fallback',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '加载失败的渲染函数',
    version: ''
  },
  {
    name: 'render-placeholder',
    type: '() => VNodeChild',
    default: undefined,
    value: '-',
    description: '占位的渲染函数',
    version: ''
  },
  {
    name: 'round',
    type: 'boolean',
    default: false,
    value: '-',
    description: '头像是否圆形',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large' | number",
    default: 'medium',
    value: 'small/medium/large',
    description: '头像的尺寸',
    version: ''
  },
  {
    name: 'src',
    type: 'string',
    default: undefined,
    value: '-',
    description: '头像的地址',
    version: ''
  },
  {
    name: 'on-error',
    type: '(e: Event) => void',
    default: undefined,
    value: '-',
    description: '头像的图片加载失败执行的回调',
    version: ''
  }
]
export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '头像内填充的内容',
    params: '()',
    version: ''
  },
  {
    name: 'fallback',
    description: '加载失败的内容',
    params: '()',
    version: '2.33.4'
  },
  {
    name: 'placeholder',
    description: '图像没有完成加载时候的占位',
    params: '()',
    version: '2.31.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
