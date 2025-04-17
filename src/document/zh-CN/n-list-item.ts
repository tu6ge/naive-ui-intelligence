import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = []

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    params: '()',
    description: '列表项的内容',
    version: ''
  },
  {
    name: 'prefix',
    params: '()',
    description: '列表项的首部内容',
    version: ''
  },
  {
    name: 'suffix',
    params: '()',
    description: '列表项的尾部内容',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
