import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bottom',
    type: 'number | string',
    default: '40',
    description: '按钮的 CSS `bottom` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'height',
    type: 'number | string',
    default: '40',
    description: '按钮的 CSS `height` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'left',
    type: 'number | string',
    default: 'undefined',
    description: '按钮的 CSS `left` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'menu-trigger',
    type: "'click' | 'hover'",
    default: 'undefined',
    description: '触发菜单显示的方式',
    version: '2.38.0',
    value: 'click/hover'
  },
  {
    name: 'position',
    type: "'relative' | 'absolute' | 'fixed'",
    default: "'fixed'",
    description: '按钮组的定位方式',
    version: '2.38.0',
    value: 'relative/absolute/fixed'
  },
  {
    name: 'right',
    type: 'number | string',
    default: 'undefined',
    description: '按钮的 CSS `right` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'shape',
    type: "'circle' | 'square'",
    default: "'circle'",
    description: '按钮的形状',
    version: '2.38.0',
    value: 'circle/square'
  },
  {
    name: 'show-menu',
    type: 'boolean',
    default: 'undefined',
    description: '是否打开菜单',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'top',
    type: 'number | string',
    default: 'undefined',
    description: '按钮的 CSS `top` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'type',
    type: "'default' | 'primary'",
    default: "'default'",
    description: '按钮的类型',
    version: '2.38.0',
    value: 'default/primary'
  },
  {
    name: 'width',
    type: 'number | string',
    default: 'undefined',
    description: '按钮的 CSS `width` 属性',
    version: '2.38.0',
    value: '-'
  },
  {
    name: 'on-update:show-menu',
    type: '(value: boolean) => void',
    default: 'undefined',
    description: '菜单打开或者关闭的回调',
    version: '2.38.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
