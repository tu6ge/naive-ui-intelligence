import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'content',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '水印文本',
    version: '2.25.3，自 2.38.2 支持多行文本'
  },
  {
    name: 'cross',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否跨越边界显示',
    version: '2.25.3'
  },
  {
    name: 'debug',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否显示调试信息',
    version: '2.25.3'
  },
  {
    name: 'font-size',
    type: 'number',
    default: 14,
    value: '',
    description: '字体大小',
    version: '2.25.3'
  },
  {
    name: 'font-family',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '字体族',
    version: '2.25.3'
  },
  {
    name: 'font-style',
    type: "'normal' | 'italic' | `oblique ${number}deg`",
    default: 'normal',
    value: '',
    description: '字体风格',
    version: '2.25.3'
  },
  {
    name: 'font-variant',
    type: 'string',
    default: '',
    value: '',
    description: '字型',
    version: '2.25.3'
  },
  {
    name: 'font-weight',
    type: 'number',
    default: 400,
    value: '',
    description: '字重',
    version: '2.25.3'
  },
  {
    name: 'font-color',
    type: 'string',
    default: 'rgba(128, 128, 128, .3)',
    value: '',
    description: '字体颜色',
    version: '2.25.3'
  },
  {
    name: 'fullscreen',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否展示全屏',
    version: '2.25.3'
  },
  {
    name: 'global-rotate',
    type: 'number',
    default: 0,
    value: '',
    description: '水印整体的旋转',
    version: '2.32.0'
  },
  {
    name: 'line-height',
    type: 'number',
    default: 14,
    value: '',
    description: '行高',
    version: '2.25.3'
  },
  {
    name: 'height',
    type: 'number',
    default: 32,
    value: '',
    description: '高度',
    version: '2.25.3'
  },
  {
    name: 'image',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '图片路径',
    version: '2.25.3'
  },
  {
    name: 'image-height',
    type: 'number',
    default: 'undefined',
    value: '',
    description: '图片高度',
    version: '2.25.3'
  },
  {
    name: 'image-opacity',
    type: 'number',
    default: 1,
    value: '',
    description: '图片不透明度',
    version: '2.25.3'
  },
  {
    name: 'image-width',
    type: 'number',
    default: 'undefined',
    value: '',
    description: '图片宽度',
    version: '2.25.3'
  },
  {
    name: 'rotate',
    type: 'number',
    default: 0,
    value: '',
    description: '旋转角度',
    version: '2.25.3'
  },
  {
    name: 'selectable',
    type: 'boolean',
    default: true,
    value: '',
    description: '被水印覆盖的内容是否可选中',
    version: '2.25.3'
  },
  {
    name: 'text-align',
    type: "'left' | 'center' | 'right'",
    default: 'left',
    value: '',
    description: '在文本有多行的情况下，多行文本的对齐方式',
    version: '2.38.2'
  },
  {
    name: 'width',
    type: 'number',
    default: 32,
    value: '',
    description: '宽度',
    version: '2.25.3'
  },
  {
    name: 'x-gap',
    type: 'number',
    default: 0,
    value: '',
    description: 'x 轴间隔',
    version: '2.25.3'
  },
  {
    name: 'x-offset',
    type: 'number',
    default: 0,
    value: '',
    description: 'x 轴偏移',
    version: '2.25.3'
  },
  {
    name: 'y-gap',
    type: 'number',
    default: 0,
    value: '',
    description: 'y 轴间隔',
    version: '2.25.3'
  },
  {
    name: 'y-offset',
    type: 'number',
    default: 0,
    value: '',
    description: 'y 轴偏移',
    version: '2.25.3'
  },
  {
    name: 'z-index',
    type: 'number',
    default: 10,
    value: '',
    description: 'z 轴高度',
    version: '2.25.3'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
