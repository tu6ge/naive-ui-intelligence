import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'cols',
    type: 'number | ResponsiveDescription',
    default: '24',
    description: '显示的栅格数量',
    version: '',
    value: '-'
  },
  {
    name: 'collapsed',
    type: 'boolean',
    default: 'false',
    description: '是否默认折叠',
    version: '',
    value: '-'
  },
  {
    name: 'collapsed-rows',
    type: 'number',
    default: '1',
    description: '默认展示的行数',
    version: '',
    value: '-'
  },
  {
    name: 'layout-shift-disabled',
    type: 'boolean',
    default: 'false',
    description:
      '默认情况下，`n-grid` 会基于窗口宽度和容器宽度计算栅格内容，这会有两个副作用：在进行 SSR 的时候可能会出现内容闪烁；渲染时会出现 Layout Shift，这会略微影响渲染性能。但是如果你不需要响应式功能，你可以通过 `layout-shift-disabled` 规避删格的副作用。需要注意的是，打开这个选项会禁用 `n-grid` 的一切响应式功能和 `n-grid-item` 的 `suffix`、`offset`',
    version: '2.32.2',
    value: '-'
  },
  {
    name: 'responsive',
    type: "'self' | 'screen'",
    default: "'self'",
    description: "'self' 根据自身宽度进行响应式布局，'screen' 根据屏幕断点进行响应式布局",
    version: '',
    value: 'self/screen'
  },
  {
    name: 'item-responsive',
    type: 'boolean',
    default: 'false',
    description: '子元素是否可具有响应式宽度',
    version: '',
    value: '-'
  },
  {
    name: 'x-gap',
    type: 'number | ResponsiveDescription',
    default: '0',
    description: '横向间隔槽',
    version: '',
    value: '-'
  },
  {
    name: 'y-gap',
    type: 'number | ResponsiveDescription',
    default: '0',
    description: '纵向间隔槽',
    version: '',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
