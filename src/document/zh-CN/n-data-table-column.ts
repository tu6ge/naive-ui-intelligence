import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'align',
    type: `'left' | 'right' | 'center'`,
    default: `'left'`,
    description: '列内的文本排列',
    value: 'left/right/center',
    version: ''
  },
  {
    name: 'allowExport',
    type: 'boolean',
    default: 'true',
    description: '这一列是否可以导出',
    value: '',
    version: '2.40.0'
  },
  {
    name: 'titleAlign',
    type: `'left' | 'right' | 'center'`,
    default: `'null'`,
    description: '表头列对齐方式，若不设置该项，则使用列内的文本排列',
    value: 'left/right/center',
    version: '2.34.4'
  },
  {
    name: 'cellProps',
    type: '(rowData: object, rowIndex: number) => object',
    default: 'undefined',
    description: '该列单元格的 HTML 属性',
    value: '',
    version: '2.27.0'
  },
  {
    name: 'children',
    type: 'DataTableColumn[]',
    default: 'undefined',
    description: '成组列头的子节点',
    value: '',
    version: ''
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: '列的类名',
    value: '',
    version: ''
  },
  {
    name: 'colSpan',
    type: '(rowData: object, rowIndex: number) => number',
    default: 'undefined',
    description: '该列单元格的的 col span',
    value: '',
    version: ''
  },
  {
    name: 'defaultFilterOptionValue',
    type: 'string | number | null',
    default: 'null',
    description: '非受控状态下默认的过滤器选项值（过滤器单选时生效）',
    value: '',
    version: ''
  },
  {
    name: 'defaultFilterOptionValues',
    type: 'Array<string | number>',
    default: '[]',
    description: '非受控状态下默认的过滤器选项值（过滤器多选时生效）',
    value: '',
    version: ''
  },
  {
    name: 'defaultSortOrder',
    type: `'descend' | 'ascend' | false`,
    default: 'false',
    description: '非受控状态下表格默认的排序方式',
    value: 'descend/ascend',
    version: ''
  },
  {
    name: 'disabled',
    type: '(rowData: object, rowIndex: number) => boolean',
    default: 'undefined',
    description: '是否禁用',
    value: '',
    version: ''
  },
  {
    name: 'ellipsis',
    type: 'boolean | EllipsisProps',
    default: 'false',
    description: '文本溢出的设置',
    value: '',
    version: ''
  },
  {
    name: 'ellipsis-component',
    type: `'ellipsis' | 'performant-ellipsis'`,
    default: `'ellipsis'`,
    description: '渲染文本溢出时使用的组件',
    value: 'ellipsis/performant-ellipsis',
    version: '2.35.0'
  },
  {
    name: 'expandable',
    type: '(rowData: object) => boolean',
    default: 'undefined',
    description: '行是否可展开，仅在 type 为 expand 时生效',
    value: '',
    version: ''
  },
  {
    name: 'filter',
    type: `boolean | (optionValue: string | number, rowData: object) => boolean | 'default'`,
    default: 'undefined',
    description: '这一列的过滤方法',
    value: '',
    version: ''
  },
  {
    name: 'name',
    type: 'string | number',
    default: '随机字符串',
    description: '名称',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []
// z
export const document: ElDocument = { attributes, events, slots, name: 'data-table' }

export default document
