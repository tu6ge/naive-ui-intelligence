import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'render-toolbar',
    type: '(props: { nodes: { prev: VNode, next: VNode, rotateCounterclockwise: VNode, rotateClockwise: VNode, resizeToOriginalSize: VNode, zoomOut: VNode, zoomIn: VNode, download: VNode, close: VNode } }) => VNodeChild',
    default: 'undefined',
    description: '工具栏的渲染函数',
    value: '',
    version: '2.38.2'
  },
  {
    name: 'show-toolbar',
    type: 'boolean',
    default: 'true',
    description: '图片放大后是否展示底部工具栏',
    value: '',
    version: ''
  },
  {
    name: 'show-toolbar-tooltip',
    type: 'boolean',
    default: 'false',
    description: '是否展示工具栏的提示',
    value: '',
    version: '2.24.0'
  },
  {
    name: 'on-preview-prev',
    type: '() => void',
    default: 'undefined',
    description: '点击上一张的回调',
    value: '',
    version: ''
  },
  {
    name: 'on-preview-next',
    type: '() => void',
    default: 'undefined',
    description: '点击下一张的回调',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots, name: 'image' }

export default document
