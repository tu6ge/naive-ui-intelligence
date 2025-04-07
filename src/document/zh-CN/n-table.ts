import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bottom-bordered',
    type: 'boolean',
    default: 'true',
    description: '表格底部是否有边框，在 `bordered` 为 `true` 时该参数无效',
    value: '',
    version: ''
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: 'true',
    description: '是否显示边框',
    value: '',
    version: ''
  },
  {
    name: 'single-column',
    type: 'boolean',
    default: 'false',
    description: '是否不设定行的分割线，当参数为`true`时，则单元格没有下边线',
    value: '',
    version: ''
  },
  {
    name: 'single-line',
    type: 'boolean',
    default: 'true',
    description: '是否不设定列的分割线，当参数值为 `true` 时，则单元格没有右边线',
    value: '',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '表格尺寸大小',
    value: '',
    version: 'small/medium/large'
  },
  {
    name: 'striped',
    type: 'boolean',
    default: 'false',
    description: '是否使用斑马线条纹',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
