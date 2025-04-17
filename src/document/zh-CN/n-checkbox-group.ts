import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '选项组是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'default',
    type: 'Array<string | number>',
    default: 'null',
    description: '选项组非受控模式下的默认值',
    value: '',
    version: ''
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    description: '可被勾选的 checkbox 的最大数量',
    value: '',
    version: ''
  },
  {
    name: 'min',
    type: 'number',
    default: 'undefined',
    description: '可被勾选的 checkbox 的最小数量',
    value: '',
    version: ''
  },
  {
    name: 'value',
    type: 'Array<string | number> | null',
    default: 'undefined',
    description: '选项组受控模式下的值',
    value: '',
    version: ''
  },
  {
    name: 'on-update:value',
    type: "(value: string | number, meta: { actionType: 'check' | 'uncheck', value: string | number }) => void",
    default: 'undefined',
    description: '选项组的值改变时的回调',
    value: '',
    version: '2.32.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
