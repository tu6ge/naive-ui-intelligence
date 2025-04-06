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
    description: '是否允许级联勾选还没有完全加载的节点。如果你要用这个属性，请记住 `value` 可能是不完整的，并且请注意勾选行为和后端计算逻辑的一致性，尤其是有禁用节点的情况下',
    version: '2.28.1'
  },
  {
    name: 'cascade',
    type: 'boolean',
    default: true,
    value: '-',
    description: '在多选时是否关联选项',
    version: '-'
  },
  {
    name: 'check-strategy',
    type: 'string',
    default: "'all'",
    value: '-',
    description: '设置勾选策略来指定显示的勾选节点，`all` 表示显示全部选中节点；`parent` 表示只显示父节点（当父节点下所有子节点都选中时，对于单选无效）；`child` 表示只显示子节点',
    version: '-'
  },
  {
    name: 'children-field',
    type: 'string',
    default: "'children'",
    value: '-',
    description: '替代 `CascaderOption` 中的 children 字段名',
    version: '-'
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '值是否可清除',
    version: '-'
  },
  {
    name: 'clear-filter-after-select',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
    version: '2.25.3'
  },
  {
    name: 'default-value',
    type: 'string | number | Array<number | string> | null',
    default: null,
    value: '-',
    description: '级联菜单默认选中的数据',
    version: '-'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否禁用',
    version: '-'
  },
  {
    name: 'disabled-field',
    type: 'string',
    default: "'disabled'",
    value: '-',
    description: '替代 `CascaderOption` 中的 disabled 字段名',
    version: '2.32.2'
  },
  {
    name: 'ellipsis-tag-popover-props',
    type: 'PopoverProps',
    default: undefined,
    value: '-',
    description: '选中选项过多省略显示时，预览弹出 `popover` 的属性',
    version: '2.37.0'
  },
  {
    name: 'expand-trigger',
    type: "'click' | 'hover'",
    default: 'click',
    value: '-',
    description: '在 `remote` 被设定时 hover 不生效',
    version: '-'
  },
  {
    name: 'filterable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '`remote` 被设定时不生效',
    version: '-'
  },
  {
    name: 'filter',
    type: '(pattern: string, option: CascaderOption, path: CascaderOption[]) => boolean',
    default: '一个基于字符串的过滤算法',
    value: '-',
    description: '过滤选项的函数',
    version: '-'
  },
  {
    name: 'filter-menu-props',
    type: 'HTMLAttributes',
    default: undefined,
    value: '-',
    description: '可过滤菜单的 DOM 属性',
    version: '2.27.0'
  },
  {
    name: 'get-column-style',
    type: '(detail: { level: number }) => string | object',
    default: undefined,
    value: '-',
    description: '获取列样式的函数，`level` 从 `0` 开始',
    version: '2.38.2'
  },
  {
    name: 'value-field',
    type: 'string',
    default: "'value'",
    value: '-',
    description: '替代 `CascaderOption` 中的 value 字段名',
    version: '-'
  },
  {
    name: 'label-field',
    type: 'string',
    default: "'label'",
    value: '-',
    description: '替代 `CascaderOption` 中的 label 字段名',
    version: '-'
  },
  {
    name: 'max-tag-count',
    type: 'number | "responsive"',
    default: undefined,
    value: '-',
    description: '多选标签的最大显示数量，`responsive` 会将所有标签保持在一行',
    version: '-'
  },
  {
    name: 'menu-props',
    type: 'HTMLAttributes',
    default: undefined,
    value: '-',
    description: '菜单的 DOM 属性',
    version: '2.27.0'
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否支持多选',
    version: '-'
  },
  {
    name: 'options',
    type: 'CascaderOption[]',
    default: '[]',
    value: '-',
    description: '填充的 options 数据',
    version: '-'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'请选择'",
    value: '-',
    description: '提示信息',
    version: '-'
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    value: '-',
    description: '弹出位置',
    version: '2.25.0'
  },
  {
    name: 'remote',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否远程获取数据',
    version: '-'
  },
  {
    name: 'render-prefix',
    type: '(info: { option: CascaderOption, node: VNode | null, checked: boolean }) => VNodeChild',
    default: undefined,
    value: '-',
    description: '节点前缀的渲染函数',
    version: '2.38.2'
  },
  {
    name: 'render-label',
    type: '(option: CascaderOption, checked: boolean) => VNodeChild',
    default: undefined,
    value: '-',
    description: 'Cascader 菜单选项标签渲染函数',
    version: '2.24.0'
  },
  {
    name: 'render-suffix',
    type: '(info: { option: CascaderOption, checked: boolean }) => VNodeChild',
    default: undefined,
    value: '-',
    description: '节点后缀的渲染函数',
    version: '2.38.2'
  },
  {
    name: 'separator',
    type: 'string',
    default: "' / '",
    value: '-',
    description: '数据分隔符',
    version: '-'
  },
  {
    name: 'show',
    type: 'boolean',
    default: undefined,
    value: '-',
    description: '是否打开菜单',
    version: '-'
  },
  {
    name: 'show-path',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否在选择器中显示选项路径',
    version: '-'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    value: '-',
    description: '尺寸',
    version: '-'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: undefined,
    value: '-',
    description: '验证状态',
    version: '2.27.0'
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'body',
    value: '-',
    description: '菜单的容器节点，`false` 会待在原地',
    version: '-'
  },
  {
    name: 'value',
    type: 'string | number | Array<number | string> | null',
    default: undefined,
    value: '-',
    description: '级联选择的数据受控',
    version: '-'
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否支持虚拟滚动',
    version: '-'
  },
  {
    name: 'on-blur',
    type: '() => void',
    default: undefined,
    value: '-',
    description: '用户 blur 时执行的回调',
    version: '-'
  },
  {
    name: 'on-focus',
    type: '() => void',
    default: undefined,
    value: '-',
    description: '用户 focus 时执行的回调',
    version: '-'
  },
  {
    name: 'on-load',
    type: '(option: CascaderOption) => Promise<void>',
    default: undefined,
    value: '-',
    description: '在点击未加载完成节点时的回调，在返回的 promise 中设定 `option.children`，在返回的 promise resolve 或 reject 之后完成加载',
    version: '-'
  },
  {
    name: 'on-update:show',
    type: '(value: boolean) => void',
    default: undefined,
    value: '-',
    description: '菜单打开关闭的回调',
    version: '-'
  },
  {
    name: 'on-update:value',
    type: '(value: string | number | Array<string | number> | null, option: CascaderOption | Array<CascaderOption | null> | null, pathValues: Array<CascaderOption | null> | Array<CascaderOption[] | null> | null) => void',
    default: undefined,
    value: '-',
    description: '值改变时执行的回调',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
