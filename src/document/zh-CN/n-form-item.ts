import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'feedback',
    type: 'string',
    default: 'undefined',
    description: '表项的反馈信息。不设为 `undefined` 时，会覆盖规则验证的结果',
    version: '',
    value: '-'
  },
  {
    name: 'feedback-class',
    type: 'string',
    default: 'undefined',
    description: '反馈校验竖向展示定位',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'feedback-style',
    type: 'string | object',
    default: 'undefined',
    description: '反馈校验横向展示定位',
    version: '2.38.2',
    value: '-'
  },
  {
    name: 'first',
    type: 'boolean',
    default: 'false',
    description: '是否只展示首个出错信息',
    version: '',
    value: '-'
  },
  {
    name: 'ignore-path-change',
    type: 'boolean',
    default: 'false',
    description: '通常 `path` 的改变会导致数据来源的变化，所以 naive-ui 会清空验证信息。如果不期望这个行为，可以将其置为 `true`',
    version: '',
    value: '-'
  },
  {
    name: 'label',
    type: 'string',
    default: 'undefined',
    description: '标签信息',
    version: '',
    value: '-'
  },
  {
    name: 'label-align',
    type: "'left' | 'right'",
    default: 'undefined',
    description: '标签的文本对齐方式。如果没有被设定，使用外层表单的 `label-align`',
    version: '',
    value: 'left/right'
  },
  {
    name: 'label-placement',
    type: "'left' | 'top'",
    default: 'undefined',
    description: '如果没有被设定，使用外层表单的 `label-placement`',
    version: '',
    value: 'left/top'
  },
  {
    name: 'label-style',
    type: 'CSSProperties | string',
    default: 'undefined',
    description: '标签的样式',
    version: '',
    value: '-'
  },
  {
    name: 'label-props',
    type: 'LabelHTMLAttributes',
    default: 'undefined',
    description: '标签元素的属性',
    version: '2.24.0',
    value: '-'
  },
  {
    name: 'label-width',
    type: "number | string | 'auto'",
    default: 'undefined',
    description: "如果没有被设定，使用外层表单的 `label-width`，`'auto'` 意味着 label width 会被自动调整",
    version: '',
    value: '-'
  },
  {
    name: 'path',
    type: 'string',
    default: 'undefined',
    description: '将值收集到外层表单 `model` 对象的路径',
    version: '',
    value: '-'
  },
  {
    name: 'rule',
    type: 'FormItemRule | Array<FormItemRule>',
    default: 'undefined',
    description: '验证表项的规则，它会被通过 `rule-path` 从外层表单获取的规则合并来作为表项的验证规则。推荐还是在外层表单设置所有规则',
    version: '',
    value: '-'
  },
  {
    name: 'rule-path',
    type: 'string',
    default: 'undefined',
    description: '从外层表单的 `rules` 对象获取规则的路径。如果没有设定，使用表项的 `path` 代替',
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
    description: '是否展示标签。如果没有被设定，使用外层 `n-form` 的 `show-label`',
    version: '',
    value: '-'
  },
  {
    name: 'show-require-mark',
    type: 'boolean',
    default: '-',
    description: '是否展示必填的星号。如果没有被设定，使用外层 `n-form` 的 `show-require-mark`',
    version: '',
    value: '-'
  },
  {
    name: 'require-mark-placement',
    type: "'left' | 'right' | 'right-hanging'",
    default: "'right'",
    description: '必填的星号的位置。如果没有被设定，使用外层 `n-form` 的 `require-mark-placement`',
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
    name: 'validation-status',
    type: "'error' | 'success' | 'warning'",
    default: 'undefined',
    description: '表单的验证状态。不设为 `undefined`时，会覆盖规则验证的结果',
    version: '',
    value: 'error/success/warning'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'feedback',
    params: '()',
    description: '表项的反馈信息',
    version: '2.24.0'
  },
  {
    name: 'label',
    params: '()',
    description: '标签内容',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots, name: 'form' }

export default document
