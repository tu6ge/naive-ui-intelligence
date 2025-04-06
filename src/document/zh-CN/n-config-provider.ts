import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'abstract',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否不存在 DOM 包裹',
    version: '-'
  },
  {
    name: 'breakpoints',
    type: '{ [k: string]: number }',
    default: '{ xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 }',
    value: '-',
    description: '屏幕响应式断点，对 `n-grid` 生效。这个属性不是响应式的，你需要在组件第一次挂载时就设定好',
    version: '-'
  },
  {
    name: 'cls-prefix',
    type: 'string',
    default: 'undefined',
    value: '-',
    description: '内部所有组件的类的前缀。（从 `2.40.0` 开始）如果不设置 `n-config-provider` 的类前缀 `cls-prefix`，则默认继承父级的类前缀。注意，该属性不是响应式的。',
    version: '-'
  },
  {
    name: 'date-locale',
    type: 'DateLocale | null',
    default: 'undefined',
    value: '-',
    description: '对后代组件生效的日期语言对象，为 `null` 时会使用默认 `dateEnUS`，为 `undefined` 时会继承上级 `n-config-provider`',
    version: '-'
  },
  {
    name: 'inline-theme-disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否禁用 inline css 主题变量，如果你不会频繁调整主题变量，并且需要 SSR 或者想让 devtools 看起来更干净，可以打开这个选项。注意，这个属性不是响应式的',
    version: '2.26.0'
  },
  {
    name: 'katex',
    type: 'object',
    default: 'undefined',
    value: '-',
    description: '公式组件需要的 katex 对象',
    version: '2.34.0'
  },
  {
    name: 'locale',
    type: 'Locale | null',
    default: 'undefined',
    value: '-',
    description: '对后代组件生效的语言对象，为 `null` 时会使用默认 `enUS`，为 `undefined` 时会继承上级 `n-config-provider`',
    version: '-'
  },
  {
    name: 'namespace',
    type: 'string',
    default: 'undefined',
    value: '-',
    description: '`n-config-provider` 内部组件被卸载于其他位置的 DOM 的类名',
    version: '-'
  },
  {
    name: 'preflight-style-disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否禁用默认样式，如果你禁用了它，便可以完全控制全局样式。你也可以使用 `n-global-style` 去挂载全局样式（推荐，样式是响应式的）',
    version: '2.29.0'
  },
  {
    name: 'style-mount-target',
    type: 'ParentNode',
    default: 'undefined',
    value: '-',
    description: '组件样式的挂载位置。注意，该属性不是响应式的。',
    version: '2.40.0'
  },
  {
    name: 'tag',
    type: 'string',
    default: "'div'",
    value: '-',
    description: '`n-config-provider` 被渲染成的元素',
    version: '-'
  },
  {
    name: 'theme',
    type: 'Theme | null',
    default: 'undefined',
    value: '-',
    description: '对后代组件生效的主题对象，为 `null` 时会使用默认亮色，为 `undefined` 时会继承上级 `n-config-provider`。',
    version: '-'
  },
  {
    name: 'theme-overrides',
    type: 'ThemeOverrides | null',
    default: 'undefined',
    value: '-',
    description: '对后代组件生效的主题变量覆盖，为 `null` 时会清除全部覆盖变量，为 `undefined` 时会继承上级 `n-config-provider`。',
    version: '-'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
