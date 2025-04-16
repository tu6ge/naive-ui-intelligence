import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'allow-checking-not-loaded',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否允许级联勾选还没有完全加载的节点。如果你要用这个属性，请记住 `value` 可能是不完整的，并且请注意勾选行为和后端计算逻辑的一致性，尤其是有禁用节点的情况下',
    version: '2.28.1'
  },
  {
    name: 'cascade',
    type: 'boolean',
    default: false,
    value: '',
    description: '使用 checkbox 进行多选时是否级联',
    version: ''
  },
  {
    name: 'checkable',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否使用 checkbox 进行选择',
    version: ''
  },
  {
    name: 'check-strategy',
    type: 'string',
    default: 'all',
    value: '',
    description: '设置勾选策略来指定显示的勾选节点，`all` 表示显示全部选中节点；`parent` 表示只显示父节点（当父节点下所有子节点都选中时）；`child` 表示只显示子节点',
    version: ''
  },
  {
    name: 'children-field',
    type: 'string',
    default: 'children',
    value: '',
    description: '替代 `TreeSelectOption` 中的 children 字段名',
    version: ''
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否可清除',
    version: ''
  },
  {
    name: 'clear-filter-after-select',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
    version: '2.25.3'
  },
  {
    name: 'consistent-menu-width',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否使菜单宽度和输入框一致，打开会禁用虚拟滚动',
    version: ''
  },
  {
    name: 'default-value',
    type: 'string | number | Array<string | number> | null',
    default: null,
    value: '',
    description: '默认选中的 key',
    version: ''
  },
  {
    name: 'default-expand-all',
    type: 'boolean',
    default: false,
    value: '',
    description: '默认展开全部',
    version: ''
  },
  {
    name: 'default-expanded-keys',
    type: 'Array<string | number>',
    default: '[]',
    value: '',
    description: '默认展开节点的 key',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否禁用',
    version: ''
  },
  {
    name: 'ellipsis-tag-popover-props',
    type: 'PopoverProps',
    default: 'undefined',
    value: '',
    description: '选中选项过多省略显示时，预览弹出 `popover` 的属性',
    version: '2.37.0'
  },
  {
    name: 'expanded-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    value: '',
    description: '展开节点的 key',
    version: ''
  },
  {
    name: 'indeterminate-keys',
    type: 'string | number',
    default: 'undefined',
    value: '',
    description: '部分选中选项的 key',
    version: ''
  },
  {
    name: 'filterable',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否可过滤',
    version: ''
  },
  {
    name: 'filter',
    type: '(pattern: string, option: TreeSelectOption) => boolean',
    default: '-',
    value: '',
    description: '过滤器函数',
    version: ''
  },
  {
    name: 'get-children',
    type: '(option: any) => unknown',
    default: 'undefined',
    value: '',
    description: '获取当前选项的子选项',
    version: '2.38.1'
  },
  {
    name: 'key-field',
    type: 'string',
    default: 'key',
    value: '',
    description: '替代 `TreeSelectOption` 中的 key 字段名',
    version: ''
  },
  {
    name: 'label-field',
    type: 'string',
    default: 'label',
    value: '',
    description: '替代 `TreeSelectOption` 中的 label 字段名',
    version: ''
  },
  {
    name: 'disabled-field',
    type: 'string',
    default: 'disabled',
    value: '',
    description: '替代 `TreeSelectOption` 中的 disabled 字段名',
    version: '2.32.2'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否加载中',
    version: '2.28.3'
  },
  {
    name: 'max-tag-count',
    type: 'number | "responsive"',
    default: 'undefined',
    value: '',
    description: "多选时最多直接显示多少选项，设为 'responsive' 会保证最多一行",
    version: ''
  },
  {
    name: 'menu-props',
    type: 'HTMLAttributes',
    default: 'undefined',
    value: '',
    description: '菜单的 DOM 属性',
    version: '2.22.0'
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否支持多选',
    version: ''
  },
  {
    name: 'node-props',
    type: '(info: { option: TreeSelectOption }) => HTMLAttributes',
    default: 'undefined',
    value: '',
    description: '节点的 HTML 属性',
    version: '2.30.7'
  },
  {
    name: 'options',
    type: 'TreeSelectOption[]',
    default: '[]',
    value: '',
    description: '选项',
    version: ''
  },
  {
    name: 'override-default-node-click-behavior',
    type: '(info: { option: TreeSelectOption }) => "toggleExpand" | "toggleSelect" | "toggleCheck" | "default" | "none"',
    default: 'undefined',
    value: '',
    description: '覆盖默认的节点点击行为',
    version: '2.37.0'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '请选择',
    value: '',
    description: '占位信息',
    version: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end',
    description: '选择器的弹出位置.',
    version: '2.25.0'
  },
  {
    name: 'render-label',
    type: '(info: { option: TreeSelectOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    value: '',
    description: '节点内容的渲染函数',
    version: '2.30.7'
  },
  {
    name: 'render-prefix',
    type: '(info: { option: TreeSelectOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    value: '',
    description: '节点前缀的渲染函数',
    version: '2.30.7'
  },
  {
    name: 'render-suffix',
    type: '(info: { option: TreeSelectOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    value: '',
    description: '节点后缀的渲染函数',
    version: '2.30.7'
  },
  {
    name: 'render-switcher-icon',
    type: '() => VNodeChild',
    default: 'undefined',
    value: '',
    description: '节点展开开关的渲染函数',
    version: '2.30.7'
  },
  {
    name: 'render-tag',
    type: '(props: { option: TreeSelectOption, handleClose: () => void }) => VNodeChild',
    default: 'undefined',
    value: '',
    description: '控制标签的渲染',
    version: '2.30.7'
  },
  {
    name: 'separator',
    type: 'string',
    default: "' / '",
    value: '',
    description: '数据分隔符',
    version: ''
  },
  {
    name: 'show-path',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否在选择器中显示选项路径',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    value: '',
    description: '组件尺寸',
    version: 'small/medium/large'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    value: 'success/warning/error',
    description: '验证状态',
    version: '2.27.0'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'body',
    value: '',
    description: '菜单的容器节点，`false` 会待在原地',
    version: ''
  },
  {
    name: 'value',
    type: 'string | number | Array<string | number> | null',
    default: 'undefined',
    value: '',
    description: '选中的 key',
    version: ''
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否使用虚拟滚动',
    version: '2.22.0'
  },
  {
    name: 'width',
    type: 'number | string',
    default: 'undefined',
    value: '',
    description: '组件的宽度',
    version: '2.22.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'header',
    description: '菜单头部区域的 slot',
    params: '()',
    version: '2.40.0'
  },
  {
    name: 'action',
    description: '菜单操作区域的 slot',
    params: '()',
    version: '2.22.0'
  },
  {
    name: 'arrow',
    description: '选择箭头 slot',
    params: '()',
    version: '2.30.4'
  },
  {
    name: 'empty',
    description: '菜单无数据时的 slot',
    params: '()',
    version: '2.22.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
