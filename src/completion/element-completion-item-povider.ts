import { TagObject } from '@/hover-tips'
import {
  CompletionItemProvider,
  TextDocument,
  Position,
  CancellationToken,
  ProviderResult,
  Range,
  CompletionItem,
  CompletionContext,
  CompletionList,
  CompletionItemKind,
  workspace,
  SnippetString
} from 'vscode'

import { localDocument } from '@/document'
import { ExtensionConfigutation, ExtensionLanguage } from '..'
import { DocumentAttribute, DocumentEvent } from '@/document'

export class ElementCompletionItemProvider implements CompletionItemProvider<CompletionItem> {
  private _document!: TextDocument
  private _position!: Position
  private token!: CancellationToken
  private tagReg: RegExp = /<([\w-]+)\s*/g
  private attrReg: RegExp = /(?:\(|\s*)([\w-]+)=['"][^'"]*/
  private tagStartReg: RegExp = /<([\w-]*)$/
  private pugTagReg: RegExp = /^[\s\t]*n-([\w-]+)/gm
  private pugTagStartReg: RegExp = /^[\s\t]*n-?$/m // 新增pug标签开始正则
  private size!: number
  private quotes!: string

  /**
   * 判断当前文档是否使用的是 Pug 模板
   */
  isPugTemplate(): boolean {
    const text = this._document.getText()
    return /<template\s+lang=["']pug["']/.test(text)
  }
  /**
   * 获取前置标签
   */
  getPreTag(): TagObject | undefined {
    let line = this._position.line
    let tag: TagObject | string | undefined
    let txt = this.getTextBeforePosition(this._position)

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)
      if (tag === 'break') {
        return undefined
      }
      if (tag) {
        return <TagObject>tag
      }
      line--
    }
    return undefined
  }

  /**
   * 获取前置属性
   */
  getPreAttr(): string {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '')
    let end = this._position.character
    let start = txt.lastIndexOf(' ', end) + 1
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end))
    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 匹配属性
   *
   * @param reg 匹配模式
   * @param txt 匹配文本
   */
  matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null
    match = reg.exec(txt)
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1]
    }
    return ''
  }

  /**
   * 匹配标签
   * @param reg 匹配模式
   * @param txt 匹配文本
   * @param line 当前行
   */
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string | undefined {
    let match: RegExpExecArray | null
    let arr: TagObject[] = []

    // 对于 Pug 使用不同的逻辑
    if (this.isPugTemplate()) {
      // Pug 格式的匹配逻辑
      const pugReg = /^\s*n-([\w-]+)/
      match = pugReg.exec(txt)
      if (match) {
        arr.push({
          text: `n-${match[1]}`,
          offset: this._document.offsetAt(new Position(line, match.index))
        })
      }
    } else {
      // 原有的 HTML 格式匹配逻辑
      if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
        return 'break'
      }
      while ((match = reg.exec(txt))) {
        arr.push({
          text: match[1],
          offset: this._document.offsetAt(new Position(line, match.index))
        })
      }
    }

    return arr.pop()
  }

  /**
   * 获取当前位置之前的字符串
   *
   * @param position 位置
   */
  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0)
    var range = new Range(start, position)
    return this._document.getText(range)
  }

  /**
   * 是否位属性值的开始
   * @param tag 标签
   * @param attr 属性
   */
  isAttrValueStart(tag: Object | undefined, attr: string) {
    return !!tag && !!attr
  }

  /**
   * 是否位属性的开始
   * @param tag 标签
   */
  isAttrStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position)
    if (this.isPugTemplate()) {
      return tag && (/[\s\t][\w-]*$/.test(preText) || /\([\w-]*$/.test(preText))
    }
    return tag && / :?[\w-]*$/.test(preText)
  }
  /**
   * 是否为方法的开始
   * @param tag 标签
   */
  isEventStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position)
    if (this.isPugTemplate()) {
      return tag && /[\s\t]@[\w-]*$/.test(preText)
    }
    return tag && / @[\w-]*$/.test(preText)
  }

  /**
   * 获取属性值
   *
   * @param tag 标签
   * @param attr 属性
   */
  getAttrValues(tag: string, attr: string): string[] {
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const document: Record<string, any> = localDocument[language]
    const attributes: DocumentAttribute[] = document[tag].attributes || []
    const attribute: DocumentAttribute | undefined = attributes.find((attribute) => attribute.name === attr)
    if (!attribute) {
      return []
    }
    const values = attribute.value.split(/[,/\\]/).map((item) => item.trim())
    return values
  }

  /**
   * 获取属性值的提示信息
   *
   * @param tag 标签
   * @param attr 属性
   */
  getAttrValueCompletionItems(tag: string, attr: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const values = this.getAttrValues(tag, attr)
    values.forEach((value) => {
      if (/\w+/.test(value)) {
        completionItems.push({
          label: `${value}`,
          sortText: `0${value}`,
          detail: `${tag}-${attr}`,
          kind: CompletionItemKind.Value,
          insertText: value
        })
      }
    })
    return completionItems
  }

  /**
   * 获取事件名称提示
   *
   * @param tag 标签
   */
  getEventCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const document: Record<string, any> = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*@([\w-]*)$/, '$1')
    const events: DocumentEvent[] = document[tag]?.events || []
    const likeTag = events.filter((evnet: DocumentEvent) => evnet.name.includes(prefix))

    const start = preText.lastIndexOf('@') + 1
    const end = start + prefix.length
    const startPos = new Position(this._position.line, start)
    const endPos = new Position(this._position.line, end)
    const range = new Range(startPos, endPos)
    likeTag.forEach((event: DocumentEvent) => {
      completionItems.push({
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `${tag} Event`,
        documentation: event.description,
        kind: CompletionItemKind.Value,
        insertText: event.name,
        range
      })
    })
    return completionItems
  }

  /**
   * 获取属性的提示信息
   *
   * @param tag 标签
   */
  getAttrCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const document: Record<string, any> = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const isPug = this.isPugTemplate()

    let prefix, start, end, range

    if (isPug) {
      // Pug 属性前缀提取
      prefix = preText.match(/[\s\t(]([^=\s\t]*)$/)?.[1] || ''
      start = preText.lastIndexOf(prefix)
      end = start + prefix.length
    } else {
      // HTML 属性前缀提取
      prefix = preText.replace(/.*[\s@:]/g, '')
      start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1
      end = start + prefix.length
    }

    const startPos = new Position(this._position.line, start)
    const endPos = new Position(this._position.line, end)
    range = new Range(startPos, endPos)

    const attributes: DocumentAttribute[] = document[tag]?.attributes || []
    const likeTag = attributes.filter((attribute: DocumentAttribute) => attribute.name.includes(prefix))

    likeTag.forEach((attribute: DocumentAttribute) => {
      let insertText

      if (isPug) {
        // Pug 属性插入格式
        if (attribute.value.indexOf('/') > -1) {
          const values = attribute.value.split('/')
          insertText = new SnippetString().appendText(`${attribute.name}="`).appendChoice(values).appendText('"')
        } else {
          insertText = new SnippetString().appendText(attribute.name)
        }
      } else {
        // HTML 属性插入格式
        if (attribute.value.indexOf('/') > -1) {
          const values = attribute.value.split('/')
          insertText = new SnippetString().appendText(`${attribute.name}="`).appendChoice(values).appendText('"')
        } else {
          insertText = new SnippetString().appendText(attribute.name)
        }
      }

      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${tag} Attribute`,
        documentation: attribute.description,
        kind: CompletionItemKind.Property,
        insertText: insertText,
        range
      })
    })

    return completionItems
  }
  /**
   * 是否位标签的开始
   */
  isTagStart(): boolean {
    let txt = this.getTextBeforePosition(this._position)
    if (this.isPugTemplate()) {
      return this.pugTagStartReg.test(txt)
    }
    return this.tagStartReg.test(txt)
  }
  /**
   * 获取标签提示
   */
  getTagCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const preText = this.getTextBeforePosition(this._position)
    const document: Record<string, any> = localDocument[language]
    const isPug = this.isPugTemplate()

    let start, end, range

    if (isPug) {
      // Pug 模板的处理逻辑
      start = preText.lastIndexOf('n-')
      if (start === -1) {
        start = preText.length
      }
      end = preText.length
      const startPos = new Position(this._position.line, start)
      const endPos = new Position(this._position.line, end)
      range = new Range(startPos, endPos)
    } else {
      // 原有的 HTML 处理逻辑
      start = preText.lastIndexOf('<') + 1
      end = preText.length - start + 1
      const startPos = new Position(this._position.line, start)
      const endPos = new Position(this._position.line, end)
      range = new Range(startPos, endPos)
    }

    Object.keys(document).forEach((key) => {
      if (isPug) {
        // Pug 格式的组件标签插入
        completionItems.push({
          label: `${key}`,
          sortText: `0${key}`,
          detail: 'NaiveUI Tag (Pug)',
          kind: CompletionItemKind.Keyword,
          insertText: new SnippetString().appendText(`${key}`).appendTabstop(),
          range
        })
      } else {
        // 原有的 HTML 插入逻辑
        completionItems.push({
          label: `${key}`,
          sortText: `0${key}`,
          detail: 'NaiveUI Tag',
          kind: CompletionItemKind.Keyword,
          insertText: new SnippetString().appendText(`${key}`).appendTabstop().appendText('>').appendTabstop().appendText(`</${key}>`),
          range
        })
      }
    })

    return completionItems
  }
  /**
   * 提供自动完成提示
   *
   * @param document 文档
   * @param position 位置
   * @param token token
   * @param context 上下文
   */
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    this._document = document
    this._position = position
    this.token = token

    // 对 Pug 模板中 n- 前缀的特殊处理
    if (this.isPugTemplate()) {
      const lineText = document.lineAt(position.line).text
      if (/^\s*n-$/.test(lineText.substring(0, position.character))) {
        return this.getTagCompletionItems('')
      }
    }

    let tag: TagObject | undefined = this.getPreTag()
    let attr = this.getPreAttr()

    if (!tag || !/^n/.test(tag.text || '')) {
      // 如果不是 naive-ui 的标签(n 开头) 则返回 null
      if (this.isTagStart()) {
        return this.getTagCompletionItems('')
      }
      return null
    } else if (this.isAttrValueStart(tag, attr)) {
      // 如果是属性值的开始
      return this.getAttrValueCompletionItems(tag.text, attr)
    } else if (this.isEventStart(tag)) {
      // 优先判定事件
      return this.getEventCompletionItems(tag.text)
    } else if (this.isAttrStart(tag)) {
      // 判断属性
      return this.getAttrCompletionItems(tag.text)
    } else if (this.isTagStart()) {
      // 判断标签
      return this.getTagCompletionItems(tag.text)
    }

    return null
  }
}
