import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'accordion',
    type: 'boolean',
    default: false,
    description: '是否使用手风琴模式',
    version: '',
    value: ''
  },
  {
    name: 'children-field',
    type: 'string',
    default: "'children'",
    description: 'children 的字段名',
    version: '',
    value: ''
  },
  {
    name: 'collapsed-icon-size',
    type: 'number',
    default: 24,
    description: '菜单折叠时图标的大小，如果未设定则使用 `icon-size` 代替',
    version: '',
    value: ''
  },
  {
    name: 'collapsed-width',
    type: 'number',
    default: 48,
    description: '折叠后菜单的宽度',
    version: '',
    value: ''
  },
  {
    name: 'collapsed',
    type: 'boolean',
    default: false,
    description: '菜单是否折叠，值在菜单为垂直时有用',
    version: '',
    value: ''
  },
  {
    name: 'default-expand-all',
    type: 'boolean',
    default: false,
    description: "是否展开全部菜单，`options` 为异步获取时，`watch-props` 需要设置为 `['defaultExpandedKeys']` 才会生效",
    version: '',
    value: ''
  },
  {
    name: 'default-expanded-keys',
    type: 'Array<string>',
    default: '[]',
    description: '在非受控状态下默认展开的子菜单标识符数组',
    version: '',
    value: ''
  },
  {
    name: 'default-value',
    type: 'string | null',
    default: 'null',
    description: '非受控模式下的默认值',
    version: '',
    value: ''
  },
  {
    name: 'disabled-field',
    type: 'string',
    default: "'disabled'",
    description: 'disabled 的字段名',
    version: '2.33.0',
    value: ''
  },
  {
    name: 'dropdown-placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | `",
    default: "'top'",
    description: "仅在 `mode='horizontal'` 模式下生效",
    version: '',
    value: ''
  },
  {
    name: 'dropdown-props',
    type: 'DropdownProps',
    default: 'undefined',
    description: "菜单折叠或 `mode='horizontal'` 模式时 Dropdown 的 props，请参考 [Dropdown Props](dropdown#Dropdown-Props)",
    version: '',
    value: ''
  },
  {
    name: 'expanded-keys',
    type: 'Array<string>',
    default: 'undefined',
    description: '展开的子菜单标识符数组，如果设定了，菜单的展开将会进入受控状态，`default-expanded-keys` 不会生效',
    version: '',
    value: ''
  },
  {
    name: 'expand-icon',
    type: '(option: MenuOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理菜单展开图标的渲染',
    version: '',
    value: ''
  },
  {
    name: 'icon-size',
    type: 'number',
    default: 20,
    description: '菜单未折叠时图标的大小',
    version: '',
    value: ''
  },
  {
    name: 'indent',
    type: 'number',
    default: 32,
    description: '菜单每级的缩进',
    version: '',
    value: ''
  },
  {
    name: 'inverted',
    type: 'boolean',
    default: false,
    description: '使用反转样式',
    version: '',
    value: ''
  },
  {
    name: 'key-field',
    type: 'string',
    default: "'key'",
    description: 'key 的字段名',
    version: '',
    value: ''
  },
  {
    name: 'label-field',
    type: 'string',
    default: "'label'",
    description: 'label 的字段名',
    version: '',
    value: ''
  },
  {
    name: 'options',
    type: 'Array<MenuOption | MenuDividerOption | MenuGroupOption>',
    default: '[]',
    description: '菜单的数据',
    version: '',
    value: ''
  },
  {
    name: 'node-props',
    type: '(option: MenuOption | MenuGroupOption) => object',
    default: 'undefined',
    description: '节点的 DOM 属性生成函数',
    version: '2.28.3',
    value: ''
  },
  {
    name: 'mode',
    type: "'vertical' | 'horizontal'",
    default: "'vertical'",
    description: '菜单的布局方式',
    version: '',
    value: ''
  },
  {
    name: 'render-extra',
    type: '(option: MenuOption | MenuGroupOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理菜单额外部分渲染',
    version: '',
    value: ''
  },
  {
    name: 'render-icon',
    type: '(option: MenuOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理菜单图标渲染',
    version: '',
    value: ''
  },
  {
    name: 'render-label',
    type: '(option: MenuOption | MenuGroupOption) => VNodeChild',
    default: 'undefined',
    description: '批量处理菜单标签渲染',
    version: '',
    value: ''
  },
  {
    name: 'responsive',
    type: 'boolean',
    default: false,
    description: "是否收起溢出的菜单，仅对 `mode='horizontal'` 的菜单生效",
    version: '2.36.0',
    value: ''
  },
  {
    name: 'root-indent',
    type: 'number',
    default: 32,
    description: '菜单第一级的缩进，如果没有设定，使用 `indent` 代替',
    version: '',
    value: ''
  },
  {
    name: 'value',
    type: 'string | null',
    default: 'undefined',
    description: '菜单当前的选中值',
    version: '',
    value: ''
  },
  {
    name: 'watch-props',
    type: "Array<'defaultValue' | 'defaultExpandedKeys'>",
    default: 'undefined',
    description: '需要检测变更的默认属性，检测后组件状态会更新。注意：`watch-props` 本身不是响应式的',
    version: '',
    value: ''
  },
  {
    name: 'on-update:expanded-keys',
    type: '(keys: string[]) => void',
    default: 'undefined',
    description: '`keys` 是展开菜单项的 `key` 的数组',
    version: '',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(key: string, item: MenuOption) => void',
    default: 'undefined',
    description: '选中菜单的回调，`key` 是选中菜单项的 `key`，`item` 是菜单项原始数据',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
