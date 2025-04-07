import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'animated',
    type: 'boolean',
    default: 'true',
    description: '弹出弹窗时使用动画',
    version: '',
    value: '-'
  },
  {
    name: 'inverted',
    type: 'boolean',
    default: 'false',
    description: '使用反转样式',
    version: '',
    value: '-'
  },
  {
    name: 'children-field',
    type: 'string',
    default: "'children'",
    description: 'children 的字段名',
    version: '',
    value: '-'
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: 'true',
    description: '是否支持键盘操作（注意和其他内容键盘操作可能的冲突）',
    version: '',
    value: '-'
  },
  {
    name: 'key-field',
    type: 'string',
    default: "'key'",
    description: 'key 的字段名',
    version: '',
    value: '-'
  },
  {
    name: 'label-field',
    type: 'string',
    default: "'label'",
    description: 'label 的字段名',
    version: '',
    value: '-'
  },
  {
    name: 'node-props',
    type: '(option: DropdownOption | DropdownGroupOption) => HTMLAttributes',
    default: 'undefined',
    description: '批量处理下拉菜单选项的 HTML 属性',
    version: '2.29.1',
    value: '-'
  },
  {
    name: 'menu-props',
    type: '(option: DropdownOption | undefined, options: (DropdownOption | DropdownGroupOption)[]) => HTMLAttributes',
    default: 'undefined',
    description: '批量处理下拉菜单的 HTML 属性',
    version: '2.31.0',
    value: '-'
  },
  {
    name: 'options',
    type: 'Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>',
    default: '[]',
    description: '下拉菜单传入的 options',
    version: '',
    value: '-'
  },
  {
    name: 'render-icon',
    type: '(option: DropdownOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理下拉菜单图标渲染',
    version: '',
    value: '-'
  },
  {
    name: 'render-label',
    type: '(option: DropdownOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理下拉菜单标签渲染',
    version: '',
    value: '-'
  },
  {
    name: 'render-option',
    type: '(props: { node: VNode, option: DropdownOption | DropdownGroupOption }) => VNodeChild',
    default: 'undefined',
    description: '批量处理下拉菜单渲染',
    version: '2.29.1',
    value: '-'
  },
  {
    name: 'size',
    type: "'small'|'medium'|'large'|'huge'",
    default: "'medium'",
    description: '下拉菜单的尺寸大小',
    version: '',
    value: 'small/medium/large/huge'
  },
  {
    name: 'on-clickoutside',
    type: '(e: MouseEvent) => void',
    default: 'undefined',
    description: 'clickoutside 的时候触发的回调函数',
    version: '',
    value: '-'
  },
  {
    name: 'on-select',
    type: '(key: string | number, option: DropdownOption) => void',
    default: 'undefined',
    description: 'select 选中时触发的回调函数',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
