import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'accordion',
    type: 'boolean',
    default: 'false',
    description: '是否使用手风琴展开模式',
    version: '2.31.0',
    value: ''
  },
  {
    name: 'allow-checking-not-loaded',
    type: 'boolean',
    default: 'false',
    description: '是否允许级联勾选还没有完全加载的节点。如果你要用这个属性，请记住 `checked-keys` 可能是不完整的，并且请注意勾选行为和后端计算逻辑的一致性，尤其是有禁用节点的情况下',
    version: '2.28.1',
    value: ''
  },
  {
    name: 'allow-drop',
    type: "(info: { dropPosition: DropPosition, node: TreeOption, phase: 'drag' | 'drop' }) => boolean",
    default: '一个不允许 drop 在叶节点内部的函数',
    description: '是否允许 drop',
    version: '',
    value: ''
  },
  {
    name: 'animated',
    type: 'boolean',
    default: 'true',
    description: '是否有展开动画',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'block-line',
    type: 'boolean',
    default: 'false',
    description: '节点整行撑开',
    version: '',
    value: ''
  },
  {
    name: 'block-node',
    type: 'boolean',
    default: 'false',
    description: '节点名称整行撑开',
    version: '',
    value: ''
  },
  {
    name: 'cancelable',
    type: 'boolean',
    default: 'true',
    description: '选中之后是否允许取消',
    version: '',
    value: ''
  },
  {
    name: 'cascade',
    type: 'boolean',
    default: 'false',
    description: '是否关联选项',
    version: '',
    value: ''
  },
  {
    name: 'check-strategy',
    type: 'string',
    default: "'all'",
    description: '设置勾选策略来指定勾选回调返回的值，`all` 表示回调函数值为全部选中节点；`parent` 表示回调函数值为父节点（当父节点下所有子节点都选中时）；`child` 表示回调函数值为子节点',
    version: '',
    value: ''
  },
  {
    name: 'checkable',
    type: 'boolean',
    default: 'false',
    description: '是否显示选择框',
    version: '',
    value: ''
  },
  {
    name: 'checkbox-placement',
    type: "'left' | 'right'",
    default: "'left'",
    description: '复选框的位置',
    version: '2.28.3',
    value: ''
  },
  {
    name: 'children-field',
    type: 'string',
    default: "'children'",
    description: '替代 `TreeOption` 中的 children 字段名',
    version: '',
    value: ''
  },
  {
    name: 'checked-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    description: '如果设定则 `checked` 状态受控',
    version: '',
    value: ''
  },
  {
    name: 'check-on-click',
    type: 'boolean | ((node: TreeOption) => boolean)',
    default: 'false',
    description: '是否允许点击节点进行勾选，仅在 `checkable` 为 `true` 时生效',
    version: '2.31.0',
    value: ''
  },
  {
    name: 'data',
    type: 'Array<TreeOption>',
    default: '[]',
    description: '树的节点数据。重新设置 `data` 会将一些非受控状态清空，如果你需要在使用中改动 `data`，最好以受控的方式控制树',
    version: '',
    value: ''
  },
  {
    name: 'default-checked-keys',
    type: 'Array<string | number>',
    default: '[]',
    description: '默认选中的多选项',
    version: '',
    value: ''
  },
  {
    name: 'default-expand-all',
    type: 'boolean',
    default: 'false',
    description: '展开全部选项',
    version: '',
    value: ''
  },
  {
    name: 'default-expanded-keys',
    type: 'Array<string | number>',
    default: '[]',
    description: '默认展开项',
    version: '',
    value: ''
  },
  {
    name: 'default-selected-keys',
    type: 'Array<string | number>',
    default: '[]',
    description: '默认选中的节点',
    version: '',
    value: ''
  },
  {
    name: 'draggable',
    type: 'boolean',
    default: 'false',
    description: '是否可拖拽',
    version: '',
    value: ''
  },
  {
    name: 'expand-on-dragenter',
    type: 'boolean',
    default: 'true',
    description: '是否在拖入后展开节点',
    version: '',
    value: ''
  },
  {
    name: 'expand-on-click',
    type: 'boolean',
    default: 'false',
    description: '是否在点击节点后展开或收缩节点',
    version: '2.29.1',
    value: ''
  },
  {
    name: 'expanded-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    description: '如果设定则展开受控',
    version: '',
    value: ''
  },
  {
    name: 'filter',
    type: '(pattern: string, node: TreeOption) => boolean',
    default: '一个简单的字符串过滤算法',
    description: '基于 pattern 指定过滤节点的函数',
    version: '',
    value: ''
  },
  {
    name: 'get-children',
    type: '(option: any) => unknown',
    default: 'undefined',
    description: '获取当前选项的子选项',
    version: '2.34.3',
    value: ''
  },
  {
    name: 'indeterminate-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    description: '部分选中选项的 key',
    version: '',
    value: ''
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: 'true',
    description: '是否支持键盘操作',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'key-field',
    type: 'string',
    default: "'key'",
    description: '替代 `TreeOption` 中的 key 字段名',
    version: '',
    value: ''
  },
  {
    name: 'label-field',
    type: 'string',
    default: "'label'",
    description: '替代 `TreeOption` 中的 label 字段名',
    version: '',
    value: ''
  },
  {
    name: 'disabled-field',
    type: 'string',
    default: "'disabled'",
    description: '替代 `TreeOption` 中的 disabled 字段名',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'node-props',
    type: '(info: { option: TreeOption }) => HTMLAttributes',
    default: 'undefined',
    description: '节点的 HTML 属性',
    version: '2.25.0',
    value: ''
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: 'false',
    description: '是否允许节点多选',
    version: '',
    value: ''
  },
  {
    name: 'on-load',
    type: '(node: TreeOption) => Promise<unknown>',
    default: 'undefined',
    description: '异步加载数据的回调函数，如果没有加载到数据你应该让 Promise resolve `false` 或者 reject 这个 Promise，否则加载动画不会停止',
    version: '非 void Promise 2.34.3',
    value: ''
  },
  {
    name: 'override-default-node-click-behavior',
    type: "(info: { option: TreeOption }) => 'toggleExpand' | 'toggleSelect' | 'toggleCheck' | 'default' | 'none'",
    default: 'undefined',
    description: '覆盖默认的节点点击行为',
    version: '2.37.0',
    value: ''
  },
  {
    name: 'pattern',
    type: 'string',
    default: "''",
    description: '默认搜索的内容',
    version: '',
    value: ''
  },
  {
    name: 'render-label',
    type: '(info: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    description: '节点内容的渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'render-prefix',
    type: '(info: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    description: '节点前缀的渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'render-suffix',
    type: '(info: { option: TreeOption, checked: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    description: '节点后缀的渲染函数',
    version: '',
    value: ''
  },
  {
    name: 'render-switcher-icon',
    type: '(props: { option: TreeOption, expanded: boolean, selected: boolean }) => VNodeChild',
    default: 'undefined',
    description: '节点展开开关的渲染函数',
    version: '2.24.0, `props` 2.34.0',
    value: ''
  },
  {
    name: 'scrollbar-props',
    type: 'ScrollbarProps',
    default: 'undefined',
    description: '属性参考 [Scrollbar props](https://www.naiveui.com/zh-CN/light/components/scrollbar#Scrollbar-Props)',
    version: '',
    value: ''
  },
  {
    name: 'selectable',
    type: 'boolean',
    default: 'true',
    description: '节点是否可以被选中',
    version: '',
    value: ''
  },
  {
    name: 'selected-keys',
    type: 'Array<string | number>',
    default: 'undefined',
    description: '如果设定则 `selected` 状态受控',
    version: '',
    value: ''
  },
  {
    name: 'show-irrelevant-nodes',
    type: 'boolean',
    default: 'true',
    description: '是否在搜索状态显示和搜索无关的节点',
    version: '2.28.1',
    value: ''
  },
  {
    name: 'show-line',
    type: 'boolean',
    default: 'false',
    description: '是否显示连接线',
    version: '2.35.0',
    value: ''
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: 'false',
    description: '是否启用虚拟滚动，启用前你需要设定好树的高度样式',
    version: '',
    value: ''
  },
  {
    name: 'watch-props',
    type: "Array<'defaultCheckedKeys' | 'defaultSelectedKeys' | 'defaultExpandedKeys'>",
    default: 'undefined',
    description: '需要检测变更的默认属性，检测后组件状态会更新。注意：`watch-props` 本身不是响应式的',
    version: '',
    value: ''
  },
  {
    name: 'on-dragend',
    type: '(data: { node: TreeOption, event: DragEvent }) => void',
    default: 'undefined',
    description: '节点完成拖拽动作后的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-dragenter',
    type: '(data: { node: TreeOption, event: DragEvent }) => void',
    default: 'undefined',
    description: '节点拖拽中的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-dragleave',
    type: '(data: { node: TreeOption, event: DragEvent }) => void',
    default: 'undefined',
    description: '拖拽一个节点，该节点离开其它节点后的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-dragstart',
    type: '(data: { node: TreeOption, event: DragEvent }) => void',
    default: 'undefined',
    description: '开始拖拽某一个节点的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-drop',
    type: "(data: { node: TreeOption, dragNode: TreeOption, dropPosition: 'before' | 'inside' | 'after', event: DragEvent }) => void",
    default: 'undefined',
    description: '节点完成拖拽动作后的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-update:checked-keys',
    type: "(keys: Array<string | number>, option: Array<TreeOption | null>, meta: { node: TreeOption | null, action: 'check' | 'uncheck' }) => void",
    default: 'undefined',
    description: '节点勾选项发生变化时的回调函数',
    version: 'meta 2.34.0',
    value: ''
  },
  {
    name: 'on-update:indeterminate-keys',
    type: '(keys: Array<string | number>, option: Array<TreeOption | null>) => void',
    default: 'undefined',
    description: '节点部分勾选项发生变化时的回调函数',
    version: '',
    value: ''
  },
  {
    name: 'on-update:expanded-keys',
    type: "(keys: Array<string | number>, option: Array<TreeOption | null>, meta: { node: TreeOption | null, action: 'expand' | 'collapse' | 'filter' }) => void",
    default: 'undefined',
    description: '节点展开项发生变化时的回调函数',
    version: 'meta 2.34.0',
    value: ''
  },
  {
    name: 'on-update:selected-keys',
    type: "(keys: Array<string | number>, option: Array<TreeOption | null>, meta: { node: TreeOption | null, action: 'select' | 'unselect' }) => void",
    default: 'undefined',
    description: '节点选中项发生变化时的回调函数',
    version: 'meta 2.34.0',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
