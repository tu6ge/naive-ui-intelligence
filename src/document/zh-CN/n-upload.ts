import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'abstract',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否不存在 DOM 包裹，不支持 `image-card` 类型的 Upload',
    version: ''
  },
  {
    name: 'accept',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '接受的文件类型，参考 <n-a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank">accept</n-a>',
    version: ''
  },
  {
    name: 'action',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '请求提交的地址',
    version: ''
  },
  {
    name: 'create-thumbnail-url',
    type: '(file: File | null, fileInfo: UploadSettledFileInfo) => (Promise<string> | string | undefined)',
    default: 'undefined',
    value: '',
    description: '自定义文件缩略图，如果返回了 `undefined`，会使用默认的缩略图展示逻辑',
    version: '2.34.0'
  },
  {
    name: 'custom-request',
    type: '(options: UploadCustomRequestOptions) => void',
    default: 'undefined',
    value: '',
    description: '自定义上传方法，类型参考 UploadCustomRequestOptions',
    version: ''
  },
  {
    name: 'data',
    type: 'Object | ({ file: UploadFileInfo }) => Object',
    default: 'undefined',
    value: '',
    description: '提交表单需要附加的数据',
    version: ''
  },
  {
    name: 'default-file-list',
    type: 'Array<UploadFileInfo>',
    default: '[]',
    value: '',
    description: '非受控状态下默认的文件列表',
    version: ''
  },
  {
    name: 'default-upload',
    type: 'boolean',
    default: true,
    value: '',
    description: '选择文件时候是否默认上传',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否禁用',
    version: ''
  },
  {
    name: 'directory',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否支持目录上传（在文件选框中只能选择目录）',
    version: '2.28.3'
  },
  {
    name: 'directory-dnd',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否支持目录拖拽上传（如果不设定会默认跟随 `directory`）',
    version: '2.28.3'
  },
  {
    name: 'file-list-class',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '文件列表区域的类名',
    version: '2.36.0'
  },
  {
    name: 'file-list-style',
    type: 'Object',
    default: 'undefined',
    value: '',
    description: '文件列表区域的样式',
    version: ''
  },
  {
    name: 'file-list',
    type: 'Array<UploadFileInfo>',
    default: 'undefined',
    value: '',
    description: '文件列表，如果传入组件会处于受控状态',
    version: ''
  },
  {
    name: 'headers',
    type: 'Object | ({ file: UploadFileInfo }) => Object',
    default: 'undefined',
    value: '',
    description: 'HTTP 请求需要附加的 Headers',
    version: ''
  },
  {
    name: 'image-group-props',
    type: 'ImageGroupProps',
    default: 'undefined',
    value: '',
    description: 'Upload 中预览图片组件的属性，参考 [ImageGroup Props](https://www.naiveui.com/zh-CN/light/components/image#ImageGroup-Props)',
    version: '2.24.0'
  },
  {
    name: 'input-props',
    type: 'InputHTMLAttributes',
    default: 'undefined',
    value: '',
    description: 'file input 元素的属性',
    version: '2.24.2'
  },
  {
    name: 'is-error-state',
    type: '(xhr: XMLHttpRequest) => boolean',
    default: 'undefined',
    value: '',
    description: '判断请求是否为异常状态',
    version: '2.29.1'
  },
  {
    name: 'list-type',
    type: 'string',
    default: "'text'",
    value: '',
    description: '文件列表的内建样式，`text`、`image` 和 `image-card`',
    version: ''
  },
  {
    name: 'max',
    type: 'number',
    default: 'undefined',
    value: '',
    description: '限制上传文件数量',
    version: ''
  },
  {
    name: 'method',
    type: 'string',
    default: "'POST'",
    value: '',
    description: 'HTTP 请求的方法',
    version: ''
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否支持多个文件',
    version: ''
  },
  {
    name: 'name',
    type: 'string',
    default: "'file'",
    value: '',
    description: '文件在提交表单中的字段名',
    version: ''
  },
  {
    name: 'render-icon',
    type: '(file: UploadSettledFileInfo) => VNodeChild',
    default: 'undefined',
    value: '',
    description: '文件图标的渲染函数，仅在 `list-type="image"` 和 `list-type="image-card"` 时生效',
    version: '2.34.0'
  },
  {
    name: 'response-type',
    type: "'' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text'",
    default: "''",
    value: 'arraybuffer/blob/document/json/text',
    description: '`n-upload` 使用的 `XMLHttpRequest` 的 `responseType`',
    version: '2.33.3'
  },
  {
    name: 'should-use-thumbnail-url',
    type: '(file: UploadSettledFileInfo) => boolean',
    default: '只对图片类文件返回 `true` 的函数',
    value: '',
    description: '是否要对文件使用预览图的判定函数，只在 `list-type="image"` 或 `list-type="image-card"` 时生效',
    version: '2.34.0'
  },
  {
    name: 'show-cancel-button',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否显示取消按钮（在 pending、uploading、error 的时候展示），点击取消按钮会触发 `on-remove` 回调',
    version: ''
  },
  {
    name: 'show-download-button',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否显示下载按钮（在 finished 后展示）',
    version: ''
  },
  {
    name: 'show-remove-button',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否显示删除按钮（在 finished 后时候展示），点击删除按钮会触发 `on-remove` 回调',
    version: ''
  },
  {
    name: 'show-retry-button',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否显示重新上传按钮（在 error 时展示）',
    version: ''
  },
  {
    name: 'show-file-list',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否显示文件列表',
    version: ''
  },
  {
    name: 'show-preview-button',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否允许显示预览按钮（在 `list-type` 为 `image-card` 时生效）',
    version: ''
  },
  {
    name: 'show-trigger',
    type: 'boolean',
    default: true,
    value: '',
    description: '是否显示触发元素',
    version: '2.21.5'
  },
  {
    name: 'trigger-class',
    type: 'string',
    default: 'undefined',
    value: '',
    description: '触发器区域的类名',
    version: '2.36.0'
  },
  {
    name: 'trigger-style',
    type: 'Object | string',
    default: 'undefined',
    value: '',
    description: '触发器区域的样式',
    version: '2.29.1'
  },
  {
    name: 'with-credentials',
    type: 'boolean',
    default: false,
    value: '',
    description: '是否携带 Cookie',
    version: ''
  },
  {
    name: 'on-change',
    type: '(options: { file: UploadFileInfo, fileList: Array<UploadFileInfo>, event?: Event }) => void',
    default: 'undefined',
    value: '',
    description: '组件状态变化的回调，组件的任何文件状态变化都会触发回调',
    version: ''
  },
  {
    name: 'on-error',
    type: '(options: { file: UploadFileInfo, event?: ProgressEvent }) => UploadFileInfo | void',
    default: 'undefined',
    value: '',
    description: '文件上传失败的回调',
    version: '2.24.0'
  },
  {
    name: 'on-finish',
    type: '(options: { file: UploadFileInfo, event?: ProgressEvent }) => UploadFileInfo | undefined',
    default: '({ file }) => file',
    value: '',
    description: '文件上传结束的回调，可以修改传入的 UploadFileInfo 或者返回一个新的 UploadFileInfo。注意：file 将会下一次事件循环中被置为 null',
    version: ''
  },
  {
    name: 'on-before-upload',
    type: '(options: { file: UploadFileInfo, fileList: UploadFileInfo[] }) => (Promise<boolean | void> | boolean | void)',
    default: 'undefined',
    value: '',
    description: '文件上传之前的回调，返回 `false`、`Promise resolve false`、`Promise rejected` 时会取消本次上传',
    version: ''
  },
  {
    name: 'on-download',
    type: '(file: FileInfo) => Promise<boolean> | boolean | any',
    default: 'undefined',
    value: '',
    description: '点击文件下载按钮的回调函数，返回 `false`、`Promise resolve false`、`Promise rejected` 时会取消本次下载',
    version: ''
  },
  {
    name: 'on-preview',
    type: '(file: FileInfo, detail: { event: MouseEvent }) => void',
    default: 'undefined',
    value: '',
    description: '点击文件链接或预览按钮的回调函数，你可以通过 `preventDefault` 来取消默认的链接打开行为',
    version: '2.39.0'
  },
  {
    name: 'on-remove',
    type: '(options: { file: UploadFileInfo, fileList: Array<UploadFileInfo>, index: number }) => Promise<boolean> | boolean | any',
    default: '() => true',
    value: '',
    description: '文件删除回调，返回 `false`、`Promise resolve false`、`Promise rejected` 时会取消本次删除',
    version: '2.38.2'
  },
  {
    name: 'on-retry',
    type: '(options: { file: UploadFileInfo }) => (Promise<boolean | void> | boolean | void)',
    default: 'undefined',
    value: '',
    description: '点击重试的回调函数，返回 `false`、`Promise resolve false`、`Promise rejected` 时会取消本次重试',
    version: '2.40.0'
  },
  {
    name: 'on-update:file-list',
    type: '(fileList: UploadFileInfo[]) => void',
    default: 'undefined',
    value: '',
    description: '当 file-list 改变时触发的回调函数',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
