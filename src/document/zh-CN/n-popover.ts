import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'negative-button-props',
    type: 'ButtonProps',
    default: 'undefined',
    description: '取消按钮的属性',
    version: '2.27.0',
    value: ''
  },
  {
    name: 'negative-text',
    type: 'string | null',
    default: "'取消'",
    description: '取消按钮文字',
    version: '2.28.0',
    value: ''
  },
  {
    name: 'positive-button-props',
    type: 'ButtonProps',
    default: 'undefined',
    description: '确定按钮的属性',
    version: '2.27.0',
    value: ''
  },
  {
    name: 'positive-text',
    type: 'string | null',
    default: "'确认'",
    description: '确定按钮文字',
    version: '2.28.0',
    value: ''
  },
  {
    name: 'show-icon',
    type: 'boolean',
    default: 'true',
    description: '是否显示图标',
    version: '',
    value: ''
  },
  {
    name: 'on-positive-click',
    type: '() => boolean | Promise<boolean> | any',
    default: 'undefined',
    description: '点击确定的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-negative-click',
    type: '() => boolean | Promise<boolean> | any',
    default: 'undefined',
    description: '点击取消的回调函数',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
