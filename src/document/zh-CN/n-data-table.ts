import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'allow-checking-not-loaded',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否允许级联勾选还没有完全加载的节点。如果你要用这个属性，请记住 checked-row-keys 可能是不完整的',
    version: '2.28.0'
  },
  {
    name: 'bordered',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否显示 border',
    version: '-'
  },
  {
    name: 'bottom-bordered',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否显示 bottom border',
    version: '-'
  },
  {
    name: 'checked-row-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    value: '-',
    description: '被选中的行的 key',
    version: '-'
  },
  {
    name: 'cascade',
    type: 'boolean',
    default: true,
    value: '-',
    description: '在进行树型数据选择的时候是否级联',
    version: '-'
  },
  {
    name: 'children-key',
    type: 'string',
    default: "'children'",
    value: '-',
    description: '树形数据下后代节点在数据中的 key',
    version: '-'
  },
  {
    name: 'columns',
    type: 'Array<DataTableColumn>',
    default: '[]',
    value: '-',
    description: '需要展示的列',
    version: '-'
  },
  {
    name: 'data',
    type: 'Array<object>',
    default: '[]',
    value: '-',
    description: '需要展示的数据',
    version: '-'
  },
  {
    name: 'default-checked-row-keys',
    type: 'Array<string | number>',
    default: '[]',
    value: '-',
    description: '默认选中的 key 值',
    version: '-'
  },
  {
    name: 'default-expanded-row-keys',
    type: 'Array<string | number>',
    default: '[]',
    value: '-',
    description: '默认展开行的 key 值',
    version: '-'
  },
  {
    name: 'default-expand-all',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否默认展开全部可展开的行，不可在异步展开行时使用',
    version: '2.30.4'
  },
  {
    name: 'expanded-row-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    value: '-',
    description: '展开行的 key 值',
    version: '-'
  },
  {
    name: 'filter-icon-popover-props',
    type: 'PopoverProps',
    default: '{ trigger: click, placement: bottom }',
    value: '-',
    description: '过滤按钮的 Popover 属性，属性参考 [Popover props](popover#Popover-Props)',
    version: '2.39.0'
  },
  {
    name: 'flex-height',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否让表格主体的高度自动适应整个表格区域的高度，打开这个选项会让 table-layout 始终为 fixed',
    version: '-'
  },
  {
    name: 'get-csv-cell',
    type: '(value: any, row: object, col: DataTableBaseColumn) => string',
    default: 'undefined',
    value: '-',
    description: '获取 CSV 的单元格数据',
    version: '2.40.2'
  },
  {
    name: 'get-csv-header',
    type: '(cols: Array<DataTableColumn>) => string',
    default: 'undefined',
    value: '-',
    description: '获取 CSV 的 header',
    version: '2.40.2'
  },
  {
    name: 'header-height',
    type: 'number',
    default: 28,
    value: '-',
    description: '在开启 virtual-scroll-header 属性的情况下，表头的高度',
    version: '2.40.0'
  },
  {
    name: 'height-for-row',
    type: '(rowData: object, index: number) => number',
    default: 'undefined',
    value: '-',
    description: '每行高度的配置函数，必须配合 virtual-scroll-x 使用，如果不进行配置，每一行的高度会被设为 min-row-height',
    version: '2.40.0'
  },
  {
    name: 'indent',
    type: 'number',
    default: 16,
    value: '-',
    description: '使用树形数据时行内容的缩进',
    version: '-'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否显示 loading 状态',
    version: '-'
  },
  {
    name: 'max-height',
    type: 'number | string',
    default: 'undefined',
    value: '-',
    description: '表格内容的最大高度，可以是 CSS 属性值',
    version: '-'
  },
  {
    name: 'min-height',
    type: 'number | string',
    default: 'undefined',
    value: '-',
    description: '表格内容的最低高度，可以是 CSS 属性值',
    version: '-'
  },
  {
    name: 'min-row-height',
    type: 'number',
    default: 28,
    value: '-',
    description: '在开启 virtual-scroll 或 virtual-scroll-x 的情况下，每一行的最小高度，所有的行的高度必须比这个值更大',
    version: '2.40.0'
  },
  {
    name: 'paginate-single-page',
    type: 'boolean',
    default: true,
    value: '-',
    description: '当表格数据只有一页时是否显示分页面',
    version: '2.28.0'
  },
  {
    name: 'pagination',
    type: 'false | object',
    default: 'false',
    value: '-',
    description: '属性参考 [Pagination props](pagination#Pagination-Props)',
    version: '-'
  },
  {
    name: 'pagination-behavior-on-filter',
    type: "'first' | 'current'",
    default: 'current',
    value: '-',
    description: '过滤操作后页面的状态，`first` 为回到首页，`current` 为停留在当前页',
    version: '2.28.3'
  },
  {
    name: 'remote',
    type: 'boolean',
    default: false,
    value: '-',
    description: '表格是否自动分页数据，在异步的状况下你可能需要把它设为 true',
    version: '-'
  },
  {
    name: 'render-cell',
    type: '(value: any, rowData: object, column: DataTableBaseColumn) => VNodeChild',
    default: 'undefined',
    value: '-',
    description: '自定义单元格渲染，优先级低于列的 render',
    version: '2.30.5'
  },
  {
    name: 'render-expand-icon',
    type: '({ expanded, rowData }: { expanded: boolean, rowData: object }) => VNodeChild',
    default: 'undefined',
    value: '-',
    description: '自定义渲染展开图标',
    version: '2.32.2'
  },
  {
    name: 'row-class-name',
    type: 'string | (rowData: object, index : number) => string',
    default: 'undefined',
    value: '-',
    description: '每一行上的类名',
    version: '-'
  },
  {
    name: 'row-key',
    type: '(rowData: object) => (number | string)',
    default: 'undefined',
    value: '-',
    description: '通过行数据创建行的 key（如果你不想给每一行加上 key）',
    version: '-'
  },
  {
    name: 'row-props',
    type: '(rowData: object, rowIndex : number) => HTMLAttributes',
    default: 'undefined',
    value: '-',
    description: '自定义行属性',
    version: '-'
  },
  {
    name: 'scroll-x',
    type: 'number | string',
    default: 'undefined',
    value: '-',
    description: '表格内容的横向宽度，如果列被水平固定了，则需要设定它',
    version: '-'
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: 'undefined',
    value: '-',
    description: '属性参考 [Scrollbar props](scrollbar#Scrollbar-Props)，DataTable 中已存在 on-scroll 属性，此处 on-scroll 属性不生效',
    version: '-'
  },
  {
    name: 'single-column',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否不设定行的分割线，当参数为 true 时，则单元格没有下边线',
    version: '-'
  },
  {
    name: 'single-line',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否不设定列的分割线，当参数值为 true 时，则单元格没有右边线',
    version: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    value: '-',
    description: '表格的尺寸',
    version: '-'
  },
  {
    name: 'spin-props',
    type: '{ strokeWidth?: number, stroke?: string }',
    default: 'undefined',
    value: '-',
    description: '表格 spin 的属性',
    version: '2.34.0'
  },
  {
    name: 'sticky-expanded-rows',
    type: 'boolean',
    default: false,
    value: '-',
    description: '展开行是否不随表格横向滚动',
    version: '2.32.2'
  },
  {
    name: 'striped',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否使用斑马线条纹',
    version: '-'
  },
  {
    name: 'summary',
    type: 'DataTableCreateSummary',
    default: 'undefined',
    value: '-',
    description: '表格总结栏的数据，类型见 DataTableCreateSummary Type',
    version: '-'
  },
  {
    name: 'summary-placement',
    type: "'top' | 'bottom'",
    default: "'bottom'",
    value: '-',
    description: '总结栏的位置',
    version: '2.33.3'
  },
  {
    name: 'summary-props',
    type: 'HTMLAttributes',
    default: 'undefined',
    value: '-',
    description: '总结栏的属性',
    version: '-'
  },
  {
    name: 'title',
    type: '(props: DataTableTitleProps) => VNodeChild',
    default: 'undefined',
    value: '-',
    description: '自定义表格的标题',
    version: '-'
  },
  {
    name: 'width-for-row',
    type: '(rowData: object, index: number) => string | number',
    default: 'undefined',
    value: '-',
    description: '设置行宽度的函数，必须配合 virtual-scroll-x 使用',
    version: '2.40.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
