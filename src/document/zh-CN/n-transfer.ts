import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'clear-text',
    type: 'string',
    default: 'undefined',
    description: '清除按钮的文本',
    version: '2.35.0',
    value: ''
  },
  {
    name: 'default-value',
    type: 'Array<string | number> | null',
    default: 'null',
    description: '非受控模式下的默认值',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'true',
    description: '是否禁用',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'filter',
    type: "(pattern: string, option: TransferOption, from: 'source' | 'target') => boolean",
    default: '一个简单的标签字符串匹配函数',
    description: '搜索时使用的过滤函数',
    version: "2.32.0，'from' 2.32.2",
    value: ''
  },
  {
    name: 'options',
    type: 'TransferOption[]',
    default: '[]',
    description: '配置选项内容，详情见 TransferOption Type',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'render-source-label',
    type: '(props: { option: TransferOption }) => VNodeChild',
    default: 'undefined',
    description: '自定义源标签',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'render-target-label',
    type: '(props: { option: TransferOption }) => VNodeChild',
    default: 'undefined',
    description: '自定义目标标签',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'render-source-list',
    type: '(props: { onCheck: (checkedValueList: Array<string | number>) => void, checkedOptions: TransferOption[], pattern: string }) => VNodeChild',
    default: 'undefined',
    description: '自定义源列表',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'render-target-list',
    type: '(props: { onCheck: (checkedValueList: Array<string | number>) => void, checkedOptions: TransferOption[], pattern: string }) => VNodeChild',
    default: 'undefined',
    description: '自定义目标列表',
    version: '2.33.4',
    value: ''
  },
  {
    name: 'select-all-text',
    type: 'string',
    default: 'undefined',
    description: '全选按钮的文本',
    version: '2.35.0',
    value: ''
  },
  {
    name: 'show-selected',
    type: 'boolean',
    default: 'true',
    description: '是否显示源列表中选中的项',
    version: '2.34.0',
    value: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'source-filterable',
    type: 'boolean',
    default: 'false',
    description: '源项是否可过滤',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'source-filter-placeholder',
    type: 'string',
    default: 'undefined',
    description: '源项搜索框中的占位符',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'source-title',
    type: 'string | (() => VNodeChild)',
    default: 'undefined',
    description: '源项标题',
    version: '2.32.0，2.40.0 支持 render 函数',
    value: ''
  },
  {
    name: 'target-filterable',
    type: 'boolean',
    default: 'false',
    description: '目标项是否可过滤',
    version: '2.32.2',
    value: ''
  },
  {
    name: 'target-filter-placeholder',
    type: 'string',
    default: 'undefined',
    description: '目标项搜索框中的占位符',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'target-title',
    type: 'string | (() => VNodeChild)',
    default: 'undefined',
    description: '目标项标题',
    version: '2.32.0，2.40.0 支持 render 函数',
    value: ''
  },
  {
    name: 'value',
    type: 'Array<string | number> | null',
    default: "''",
    description: '受控模式下的值',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'on-update:value',
    type: '(value: Array<string | number>) => void',
    default: 'undefined',
    description: '值发生改变时的回调',
    version: '2.32.0',
    value: ''
  },
  {
    name: 'virtual-scroll',
    type: 'boolean',
    default: 'false',
    description: '是否启用虚拟滚动',
    version: '2.32.0',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
