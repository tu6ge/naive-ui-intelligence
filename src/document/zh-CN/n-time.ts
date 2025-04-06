import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'format',
    type: 'string',
    default: 'undefined',
    description: '时间格式化字符串，详情见 [format](https://date-fns.org/v2.23.0/docs/format)',
    value: '',
    version: ''
  },
  {
    name: 'time',
    type: 'number | Date',
    default: 'Date.now()',
    description: '时间',
    value: '',
    version: ''
  },
  {
    name: 'time-zone',
    type: 'string',
    default: 'undefined',
    description: "格式化值时使用的时区，遵循 [iana time zones](https://www.iana.org/time-zones) 格式。你可以使用 `Intl.supportedValuesOf('timeZone')` 来查看支持的时区",
    value: '',
    version: '2.30.0'
  },
  {
    name: 'to',
    type: 'number | Date',
    default: 'Date.now()',
    description: '目标时间',
    value: '',
    version: ''
  },
  {
    name: 'type',
    type: "'relative' | 'date' | 'datetime'",
    default: "'datetime'",
    description: '时间类型',
    value: '',
    version: ''
  },
  {
    name: 'unix',
    type: 'boolean',
    default: 'false',
    description: 'unix 时间戳',
    value: '',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
