import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'bordered',
    type: 'boolean',
    default: false,
    description: '是否显示边框',
    version: '',
    value: ''
  },
  {
    name: 'inverted',
    type: 'boolean',
    default: false,
    description: '使用反转背景色',
    version: '',
    value: ''
  },
  {
    name: 'position',
    type: "'static' | 'absolute'",
    default: "'static'",
    description:
      'static 模式将会把 CSS `position` 设为 `static`，absolute 模式将会把 CSS `position` 设为 `absolute`，还将 `left`、`right`、`bottom` 设为 `0`。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
