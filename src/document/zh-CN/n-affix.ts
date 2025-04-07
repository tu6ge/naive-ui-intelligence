import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bottom',
    type: 'number',
    default: 'undefined',
    description: '在触发底部固定后 Affix 的 CSS bottom 属性（如果没设定，会使用 trigger-bottom 代替）',
    value: '-',
    version: ''
  },
  {
    name: 'listen-to',
    type: 'string | HTMLElement | Document | Window | (() => HTMLElement)',
    default: 'document',
    description: '需要监听滚动的元素',
    value: '-',
    version: ''
  },
  {
    name: 'trigger-bottom',
    type: 'number',
    default: 'undefined',
    description: '触发底部固定时，Affix 和目标元素元素的底部距离（如果没设定，会使用 bottom 代替）',
    value: '-',
    version: ''
  },
  {
    name: 'trigger-top',
    type: 'number',
    default: 'undefined',
    description: '触发顶部固定时，Affix 和目标元素元素的顶部距离（如果没设定，会使用 top 代替）',
    value: '-',
    version: ''
  },
  {
    name: 'position',
    type: `'fixed' | 'absolute'`,
    default: `'fixed'`,
    description: 'Affix 的 CSS position',
    value: 'fixed/absolute',
    version: ''
  },
  {
    name: 'top',
    type: 'number',
    default: 'undefined',
    description: '在触发顶部固定后 Affix 的 CSS top 属性（如果没设定，会使用 trigger-top 代替）',
    value: '-',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
