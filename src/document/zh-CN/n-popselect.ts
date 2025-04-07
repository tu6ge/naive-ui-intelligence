import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'multiple',
    type: 'boolean',
    default: 'false',
    description: '是否为多选',
    version: '',
    value: ''
  },
  {
    name: 'node-props',
    type: '(option: SelectOption | SelectGroupOption) => object',
    default: 'undefined',
    description: '选项的 DOM 属性生成函数',
    version: '2.30.4',
    value: ''
  },
  {
    name: 'options',
    type: 'Array<SelectOption | SelectGroupOption>',
    default: '[]',
    description: '配置选项内容，详情参考 [Select](select#SelectOption-Properties)',
    version: '',
    value: ''
  },
  {
    name: 'scrollable',
    type: 'boolean',
    default: 'false',
    description: '选择菜单是否可滚动',
    version: '',
    value: ''
  },
  {
    name: 'render-label',
    type: '(option: SelectOption | SelectGroupOption) => VNodeChild',
    default: 'undefined',
    description: '控制全部选项的渲染',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '组件尺寸',
    version: '',
    value: 'small/medium/large'
  },
  {
    name: 'value',
    type: 'string | number | Array<string | number> | null',
    default: 'null',
    description: '受控模式下的值',
    version: '',
    value: ''
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: 'false',
    description: '是否启用虚拟滚动',
    version: '2.30.4',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: string | number | Array<string | number> | null, option: SelectBaseOption | null | Array<SelectBaseOption>) => void',
    default: 'undefined',
    description: '值更新的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
