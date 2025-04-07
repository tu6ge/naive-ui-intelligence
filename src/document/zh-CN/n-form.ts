import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用',
    version: '',
    value: '-'
  },
  {
    name: 'inline',
    type: 'boolean',
    default: 'false',
    description: '是否展示为行内表单',
    version: '',
    value: '-'
  },
  {
    name: 'label-width',
    type: "number | string | 'auto'",
    default: 'undefined',
    description: "标签的宽度，在 `label-placement` 是 'left' 的时候可能会有用，'auto' 意味着 label width 会被自动调整",
    version: '',
    value: '-'
  },
  {
    name: 'label-align',
    type: "'left' | 'right'",
    default: '-',
    description: '标签的文本对齐方式',
    version: '',
    value: 'left/right'
  },
  {
    name: 'label-placement',
    type: "'left' | 'top'",
    default: "'top'",
    description: '标签显示的位置',
    version: '',
    value: 'left/top'
  },
  {
    name: 'model',
    type: 'Object',
    default: '{}',
    description: '获取表项中收集到的值的对象',
    version: '',
    value: '-'
  },
  {
    name: 'rules',
    type: 'type FormRules = { [itemValidatePath: string]: FormItemRule | Array<FormItemRule> | FormRules }',
    default: '{}',
    description: '验证表项的规则',
    version: '',
    value: '-'
  },
  {
    name: 'show-feedback',
    type: 'boolean',
    default: 'true',
    description: '是否展示校验反馈',
    version: '',
    value: '-'
  },
  {
    name: 'show-label',
    type: 'boolean',
    default: 'true',
    description: '是否展示标签',
    version: '',
    value: '-'
  },
  {
    name: 'show-require-mark',
    type: 'boolean',
    default: '-',
    description: '是否展示必填的星号',
    version: '',
    value: '-'
  },
  {
    name: 'require-mark-placement',
    type: "'left' | 'right' | 'right-hanging'",
    default: "'right'",
    description: '必填星号的位置',
    version: '2.24.0',
    value: 'left/right/right-hanging'
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: '尺寸',
    version: '',
    value: 'small/medium/large'
  },
  {
    name: 'validate-messages',
    type: 'FormValidateMessages',
    default: 'undefined',
    description: 'async-validator 的默认验证信息',
    version: '2.27.0',
    value: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
