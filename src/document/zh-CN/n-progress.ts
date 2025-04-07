import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'border-radius',
    type: 'number | string',
    default: 'undefined',
    description: "'line' 类型进度条的圆角半径，不填写则维持高度的一半",
    version: '',
    value: ''
  },
  {
    name: 'circle-gap',
    type: 'number',
    default: '1',
    description: "当类型是 'multiple-circle' 的时候圈之间的距离，假设 viewbox 的尺寸是 100",
    version: '',
    value: ''
  },
  {
    name: 'color',
    type: 'string | string[] | { stops: string[] } | Array<{ stops: string[] }>',
    default: 'undefined',
    description: '进度条颜色，{ stops: string[] } 表示渐变色，stops 数组长度必须为 2，第一个元素为渐变的起始颜色，第二个元素为渐变的终止颜色',
    version: "2.40.2 开始支持 'stops'",
    value: ''
  },
  {
    name: 'fill-border-radius',
    type: 'number | string',
    default: 'undefined',
    description: "'line' 类型进度条填充的圆角半径，不填写则维持 border-radius",
    version: '',
    value: ''
  },
  {
    name: 'gap-degree',
    type: 'number',
    default: '75',
    description: '仪表盘进度条缺口角度，取值范围 0 ~ 360',
    version: '2.25.2',
    value: ''
  },
  {
    name: 'gap-offset-degree',
    type: 'number',
    default: '0',
    description: '仪表盘进度条缺口位置',
    version: '2.25.2',
    value: ''
  },
  {
    name: 'height',
    type: 'number',
    default: 'undefined',
    description: "'line' 类型进度条的高度，不填写则维持默认高度",
    version: '',
    value: ''
  },
  {
    name: 'indicator-placement',
    type: "'inside' | 'outside'",
    default: "'outside'",
    description: "'line' 类型设置指示标位置",
    version: '',
    value: 'inside/outside'
  },
  {
    name: 'indicator-text-color',
    type: 'string',
    default: 'undefined',
    description: '指示标文本颜色',
    version: '',
    value: ''
  },
  {
    name: 'offset-degree',
    type: 'number',
    default: '0',
    description: "进度的偏移角度，只对 'circle' 类型生效",
    version: '2.24.0',
    value: ''
  },
  {
    name: 'percentage',
    type: 'number | number[]',
    default: '0',
    description: '百分比的值',
    version: '',
    value: ''
  },
  {
    name: 'processing',
    type: 'boolean',
    default: 'false',
    description: '处理中状态',
    version: '',
    value: ''
  },
  {
    name: 'rail-color',
    type: 'string | string[]',
    default: 'undefined',
    description: '轨道的颜色',
    version: '',
    value: ''
  },
  {
    name: 'rail-style',
    type: 'string | CSS | Array<string | CSS>',
    default: 'undefined',
    description: '轨道的对象',
    version: '',
    value: ''
  },
  {
    name: 'show-indicator',
    type: 'boolean',
    default: 'true',
    description: '是否显示指示标',
    version: '',
    value: ''
  },
  {
    name: 'status',
    type: "'default' | 'success' | 'error' | 'warning' | 'info'",
    default: "'default'",
    description: '进度条状态',
    version: '',
    value: 'default/success/error/warning/info'
  },
  {
    name: 'stroke-width',
    type: 'number',
    default: '7',
    description: '进度条宽度',
    version: '',
    value: ''
  },
  {
    name: 'type',
    type: "'line' | 'circle' | 'multiple-circle' | 'dashboard'",
    default: "'line'",
    description: '进度条类型',
    version: "'dashboard' 2.25.2",
    value: 'line/circle/multiple-circle/dashboard'
  },
  {
    name: 'unit',
    type: 'string',
    default: "'%'",
    description: '进度条单位',
    version: '',
    value: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = []

export const document: ElDocument = { attributes, events, slots }

export default document
