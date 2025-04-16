import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'autoplay',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否自动播放',
    version: '-'
  },
  {
    name: 'centered-slides',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否居中显示当前页轮播图',
    version: '2.24.0'
  },
  {
    name: 'current-index',
    type: 'number',
    default: undefined,
    value: '-',
    description: '当前显示页',
    version: '2.24.0'
  },
  {
    name: 'default-index',
    type: 'number',
    default: 0,
    value: '-',
    description: '默认显示页',
    version: '2.24.0'
  },
  {
    name: 'direction',
    type: "'horizontal' | 'vertical'",
    default: 'horizontal',
    value: 'horizontal/vertical',
    description: '轮播图显示的方向',
    version: '-'
  },
  {
    name: 'dot-placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: 'bottom',
    value: 'top/bottom/left/right',
    description: '轮播指示点位置',
    version: '2.24.0'
  },
  {
    name: 'dot-type',
    type: "'dot' | 'line'",
    default: 'dot',
    value: 'dot/line',
    description: '轮播指示点样式',
    version: '2.24.0'
  },
  {
    name: 'draggable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否通过鼠标拖拽切换轮播图',
    version: '2.24.0'
  },
  {
    name: 'effect',
    type: "'slide' | 'fade' | 'card' | 'custom'",
    default: 'slide',
    value: 'slide/fade/card/custom',
    description: '轮播图切换时的过渡效果',
    version: '2.24.0, "card" 2.24.2'
  },
  {
    name: 'interval',
    type: 'number',
    default: 5000,
    value: '-',
    description: '自动播放的间隔（ms）',
    version: '-'
  },
  {
    name: 'keyboard',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否通过按键切换轮播图，只有焦点在 Dots 上时才起作用',
    version: '2.24.0'
  },
  {
    name: 'loop',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否循环播放',
    version: '2.24.0'
  },
  {
    name: 'mousewheel',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否通过鼠标滚轮切换轮播图',
    version: '2.24.0'
  },
  {
    name: 'next-slide-style',
    type: 'object | string',
    default: undefined,
    value: '-',
    description: '下一张轮播图的样式',
    version: '2.27.0'
  },
  {
    name: 'prev-slide-style',
    type: 'object | string',
    default: undefined,
    value: '-',
    description: '上一张轮播图的样式',
    version: '2.27.0'
  },
  {
    name: 'slides-per-view',
    type: "'auto' | number",
    default: 1,
    value: 'auto',
    description: '每一页显示的轮播图数量',
    version: '2.24.0'
  },
  {
    name: 'space-between',
    type: 'number',
    default: 0,
    value: '-',
    description: '轮播图之间的间距',
    version: '2.24.0'
  },
  {
    name: 'show-arrow',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否显示箭头按钮',
    version: '2.24.0'
  },
  {
    name: 'show-dots',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否展示指示点',
    version: '2.24.0'
  },
  {
    name: 'touchable',
    type: 'boolean',
    default: true,
    value: '-',
    description: '是否通过触摸拖拽切换轮播图',
    version: '2.24.0'
  },
  {
    name: 'transition-style',
    type: '{ transitionDuration?: string, transitionTimingFunction?: string }',
    default: '{ transitionDuration: "300ms" }',
    value: '-',
    description: '过渡效果的样式',
    version: '2.24.0'
  },
  {
    name: 'transition-props',
    type: 'TransitionProps',
    default: undefined,
    value: '-',
    description: '自定义过渡效果属性，[参考 Vue 文档](https://v3.cn.vuejs.org/api/built-in-components.html#transition)',
    version: '2.24.0'
  },
  {
    name: 'trigger',
    type: "'click' | 'hover'",
    default: 'click',
    value: 'click/hover',
    description: '触发切换的方式',
    version: '-'
  },
  {
    name: 'on-update:current-index',
    type: '(currentIndex: number, lastIndex: number) => void',
    default: undefined,
    value: '-',
    description: '当前页变化时的回调函数',
    version: '2.24.0'
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '轮播的内容',
    params: '()',
    version: ''
  },
  {
    name: 'arrow',
    description: '箭头',
    params: '(info: { total: number, currentIndex: number, to: (index: number) => void, prev: () => void, next: () => void })',
    version: '2.24.0'
  },
  {
    name: 'dots',
    description: '指示点',
    params: '(info: { total: number, currentIndex: number, to: (index: number) => void })',
    version: '2.24.0'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
