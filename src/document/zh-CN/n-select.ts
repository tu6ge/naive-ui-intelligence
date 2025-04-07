import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'consistent-menu-width',
    type: 'boolean',
    default: 'true',
    description: '菜单宽度是否和选择触发器一致，设为 `false` 会使 `virtual-scroll` 失效',
    version: '',
    value: ''
  },
  {
    name: 'children-field',
    type: 'string',
    default: "'children'",
    description: '选项组 children 的字段名',
    version: '2.29.1',
    value: ''
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '是否可清空',
    version: '',
    value: ''
  },
  {
    name: 'clear-filter-after-select',
    type: 'boolean',
    default: 'true',
    description: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
    version: '2.25.2',
    value: ''
  },
  {
    name: 'default-value',
    type: 'Array<string | number> | string | number | null',
    default: 'null',
    description: '非受控模式下的默认值',
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
    name: 'ellipsis-tag-popover-props',
    type: 'PopoverProps',
    default: 'undefined',
    description: '选中选项过多省略显示时，预览弹出 `popover` 的属性',
    version: '2.37.0',
    value: ''
  },
  {
    name: 'fallback-option',
    type: 'false | (value: string | number) => SelectOption',
    default: "value => ({ label: '' + value, value })",
    description:
      '在传入的选项中没有对应当前值的选项时，这个值应该对应的选项。如果设为 `false`，不会为找不到对应选项的值生成回退选项也不会显示它，未在选项中的值会被视为不合法，操作过程中会被组件清除掉',
    version: '',
    value: ''
  },
  {
    name: 'filterable',
    type: 'boolean',
    default: 'false',
    description: '是否可以过滤',
    version: '',
    value: ''
  },
  {
    name: 'filter',
    type: '(pattern: string, option: object) => boolean',
    default: '一个简单的字符串搜索算法',
    description: '过滤器函数',
    version: '',
    value: ''
  },
  {
    name: 'ignore-composition',
    type: 'boolean',
    default: 'true',
    description: '忽略输入法 Composition 状态，默认情况下 `filter` 在输入法输入的过程中不会触发',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'input-props',
    type: 'InputHTMLAttributes',
    default: 'undefined',
    description: '触发器中 input 元素的属性，只在可过滤时有意义',
    version: '',
    value: ''
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: 'true',
    description: '是否支持键盘操作',
    version: '2.34.4',
    value: ''
  },
  {
    name: 'label-field',
    type: 'string',
    default: "'label'",
    description: '选项 label 的字段名',
    version: '2.29.1',
    value: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: '是否为加载状态',
    version: '',
    value: ''
  },
  {
    name: 'max-tag-count',
    type: "number | 'responsive'",
    default: 'undefined',
    description: '多选标签的最大显示数量，`responsive` 会将所有标签保持在一行',
    version: '',
    value: ''
  },
  {
    name: 'menu-props',
    type: 'HTMLAttributes',
    default: 'undefined',
    description: '菜单的 DOM 属性',
    version: '',
    value: ''
  },
  {
    name: 'menu-size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '菜单的尺寸',
    version: '2.40.0',
    value: 'tiny/small/medium/large'
  },
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
    version: '2.32.2',
    value: ''
  },
  {
    name: 'options',
    type: 'Array<SelectOption | SelectGroupOption>',
    default: '[]',
    description: '配置选项内容，详情见 SelectOption Properties',
    version: '',
    value: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: "'请选择' (i18n)",
    description: '提示信息',
    version: '',
    value: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: "'bottom-start'",
    description: '菜单的弹出位置',
    version: '2.25.0',
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end'
  },
  {
    name: 'remote',
    type: 'boolean',
    default: 'false',
    description: '是否要异步获取选项。注意如果设定了，那么 `filter` 和 `tag` 都不会对 `options` 生效。这个时候你在全权控制 `options`',
    version: '',
    value: ''
  },
  {
    name: 'render-label',
    type: '(option: SelectOption | SelectGroupOption, selected: boolean) => VNodeChild',
    default: 'undefined',
    description: '选项标签渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'render-option',
    type: '(info: { node: VNode, option: SelectOption | SelectGroupOption, selected: boolean }) => VNodeChild',
    default: 'undefined',
    description: '选项的渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'render-tag',
    type: '(props: { option: SelectBaseOption, handleClose: () => void }) => VNodeChild',
    default: 'undefined',
    description: '控制标签的渲染',
    version: '',
    value: ''
  },
  {
    name: 'reset-menu-on-options-change',
    type: 'boolean',
    default: 'true',
    description: '是否在选项变化时重置菜单状态，例如滚动状态',
    version: '2.24.2',
    value: ''
  },
  {
    name: 'show',
    type: 'boolean',
    default: 'undefined',
    description: '是否展示菜单',
    version: '',
    value: ''
  },
  {
    name: 'show-arrow',
    type: 'boolean',
    default: 'true',
    description: '是否展示箭头',
    version: '',
    value: ''
  },
  {
    name: 'show-checkmark',
    type: 'boolean',
    default: 'true',
    description: '是否展示对勾',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'show-on-focus',
    type: 'boolean',
    default: 'false',
    description: '聚焦时是否展示菜单',
    version: '2.34.3',
    value: ''
  },
  {
    name: 'size',
    type: "'tiny' | 'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '组件尺寸',
    version: '',
    value: 'tiny/small/medium/large'
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: 'undefined',
    description: '验证状态',
    version: '2.27.0',
    value: 'success/warning/error'
  },
  {
    name: 'tag',
    type: 'boolean',
    default: 'false',
    description: '是否可以创建新的选项，需要和 `filterable` 一起使用',
    version: '',
    value: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: "'body'",
    description: '菜单的容器节点，`false` 会待在原地',
    version: '',
    value: ''
  },
  {
    name: 'value',
    type: 'Array<string | number> | string | number | null',
    default: 'undefined',
    description: '受控模式下的值',
    version: '',
    value: ''
  },
  {
    name: 'value-field',
    type: 'string',
    default: "'value'",
    description: '选项 value 的字段名',
    version: '2.29.1',
    value: ''
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: 'true',
    description: '是否启用虚拟滚动',
    version: '',
    value: ''
  },
  {
    name: 'on-blur',
    type: '() => void',
    default: 'undefined',
    description: '`blur` 时执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-clear',
    type: '() => void',
    default: 'undefined',
    description: '`clear` 时执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-create',
    type: '(label: string) => SelectOption',
    default: 'label => ({ label, value: label })',
    description: '在输入内容时如何创建一个选项。注意 `filter` 对这个生成的选项同样会生效。同时确保这个选项和其他选项的 `value` 不要有重复，应该和 `tag` 属性一起被使用',
    version: '',
    value: ''
  },
  {
    name: 'on-focus',
    type: '() => void',
    default: 'undefined',
    description: '`focus` 时执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-scroll',
    type: '(e: ScrollEvent) => void',
    default: 'undefined',
    description: '滚动时执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-search',
    type: '(value: string) => void',
    default: 'undefined',
    description: '搜索时执行的回调',
    version: '',
    value: ''
  },
  {
    name: 'on-update:show',
    type: '(show: boolean) => void',
    default: 'undefined',
    description: '菜单打开状态变化的回调',
    version: '2.24.2',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: Array | string | number | null, option: SelectBaseOption | null | SelectBaseOption[]) => void',
    default: 'undefined',
    description: '值更新时执行的回调',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
