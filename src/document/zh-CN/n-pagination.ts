import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'default-page',
    type: 'number',
    default: '1',
    description: '非受控模式下的当前页',
    version: '',
    value: ''
  },
  {
    name: 'default-page-size',
    type: 'number',
    default: '10',
    description: '非受控模式下的分页大小',
    version: '',
    value: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    version: '',
    value: ''
  },
  {
    name: 'display-order',
    type: "Array<'pages' | 'size-picker' | 'quick-jumper'>",
    default: "['pages', 'size-picker', 'quick-jumper']",
    description: '不同部分的展示顺序',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'goto',
    type: '() => VNodeChild',
    default: 'undefined',
    description: '渲染快速跳转的文本内容',
    version: '2.34.3',
    value: ''
  },
  {
    name: 'item-count',
    type: 'number',
    default: 'undefined',
    description: '总条数',
    version: '',
    value: ''
  },
  {
    name: 'next',
    type: '(info: PaginationInfo) => VNodeChild',
    default: 'undefined',
    description: '下一页',
    version: '',
    value: ''
  },
  {
    name: 'prev',
    type: '(info: PaginationInfo) => VNodeChild',
    default: 'undefined',
    description: '上一页',
    version: '',
    value: ''
  },
  {
    name: 'label',
    type: 'PaginationRenderLabel',
    default: 'undefined',
    description: '每一项的内容',
    version: '2.24.0',
    value: ''
  },
  {
    name: 'page-count',
    type: 'number',
    default: '1',
    description: '总页数',
    version: '',
    value: ''
  },
  {
    name: 'page-sizes',
    type: 'Array<number | PaginationSizeOption>',
    default: '[10]',
    description: '每页条数，可自定义',
    version: '',
    value: ''
  },
  {
    name: 'page-size',
    type: 'number',
    default: 'undefined',
    description: '受控模式下的分页大小',
    version: '',
    value: ''
  },
  {
    name: 'page-slot',
    type: 'number',
    default: '9',
    description: '页码显示的个数',
    version: '',
    value: ''
  },
  {
    name: 'page',
    type: 'number',
    default: 'undefined',
    description: '受控模式下的当前页',
    version: '',
    value: ''
  },
  {
    name: 'prefix',
    type: '(info: PaginationInfo) => VNodeChild',
    default: 'undefined',
    description: '分页前缀',
    version: '',
    value: ''
  },
  {
    name: 'select-props',
    type: 'SelectProps',
    default: 'undefined',
    description: '分页大小选择器的属性',
    version: '2.34.3',
    value: ''
  },
  {
    name: 'show-quick-jumper',
    type: 'boolean',
    default: 'false',
    description: '是否显示快速跳转',
    version: '',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '分页按钮的大小',
    version: '2.29.0',
    value: ''
  },
  {
    name: 'simple',
    type: 'boolean',
    default: 'false',
    description: '是否显示为简单分页',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'suffix',
    type: '(info: PaginationInfo) => VNodeChild',
    default: 'undefined',
    description: '分页后缀',
    version: '',
    value: ''
  },
  {
    name: 'show-size-picker',
    type: 'boolean',
    default: 'false',
    description: '是否显示每页条数的选择器',
    version: '',
    value: ''
  },
  {
    name: 'show-quick-jump-dropdown',
    type: 'boolean',
    default: 'true',
    description: '展示快速跳转的下拉菜单。如果页数过多，可能导致分页的数据创建性能消耗较高，可以通过设为 `false` 来提升性能',
    version: '2.37.0',
    value: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: "'body'",
    description: '弹出菜单的容器节点，`false` 会待在原地',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'on-update:page',
    type: '(page: number) => void',
    default: 'undefined',
    description: '当前页发生改变时的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-update:page-size',
    type: '(pageSize: number) => void',
    default: 'undefined',
    description: '当前分页大小发生改变时的回调函数',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
