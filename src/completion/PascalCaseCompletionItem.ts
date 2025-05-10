import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Position,
  ProviderResult,
  Range,
  SnippetString,
  TextDocument,
  workspace
} from 'vscode'
import { ExtensionConfigutation, ExtensionLanguage } from '..'
import { DocumentAttribute, localDocument } from '@/document'
import { snakeToPascalCase, pascalToSnakeCase } from '@/utils'

export class PascalCaseCompletionItem implements CompletionItemProvider<CompletionItem> {
  private _document!: TextDocument
  private _position!: Position
  private tagReg: RegExp = /<N([\w-]+)\s*/g
  private tagStartReg: RegExp = /<([\w-]*)$/
  private attrReg: RegExp = /(?:\(|\s*)([\w-]+)=['"][^'"]*/

  getPreTag(): string | undefined {
    let line = this._position.line
    let tag: string | undefined
    //line--
    let txt = this._document.lineAt(line).text

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)

      if (tag) {
        return tag
      }
      line--
    }
    return undefined
  }

  /**
   * 匹配标签
   * @param reg 匹配模式
   * @param txt 匹配文本
   * @param line 当前行
   */
  matchTag(reg: RegExp, txt: string, line: number): string | undefined {
    let match: RegExpExecArray | null
    let arr: string[] = []

    while ((match = reg.exec(txt))) {
      arr.push(match[1])
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

  getTagCompletionItems(): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const preText = this.getTextBeforePosition(this._position)
    const document: Record<string, any> = localDocument[language]
    const start = preText.lastIndexOf('<') + 1
    const end = preText.length - start + 1
    const startPos = new Position(this._position.line, start)
    const endPos = new Position(this._position.line, end)
    const range = new Range(startPos, endPos)
    Object.keys(document).forEach((key) => {
      const label = snakeToPascalCase(key)
      completionItems.push({
        label: label,
        sortText: `0${label}`,
        detail: 'NaiveUI Tag',
        kind: CompletionItemKind.Keyword,
        insertText: new SnippetString().appendText(`${label}`).appendTabstop().appendText('>').appendTabstop().appendText(`</${label}>`),
        range
      })
    })
    return completionItems
  }

  /**
   * 是否位属性的开始
   * @param tag 标签
   */
  isAttrStart() {
    const preText = this.getTextBeforePosition(this._position)
    return / :?[\w-]*$/.test(preText)
  }

  /**
   * 是否位标签的开始
   */
  isTagStart(): boolean {
    let txt = this.getTextBeforePosition(this._position)
    return this.tagStartReg.test(txt)
  }

  getAttrCompletionItems(tag): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const document: Record<string, any> = localDocument[language]
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*[\s@:]/g, '')
    const fullTag: string = 'N' + tag
    const snakeTag = pascalToSnakeCase(fullTag)
    const attributes: DocumentAttribute[] = document[snakeTag].attributes || []
    const likeTag = attributes.filter((attribute: DocumentAttribute) => attribute.name.includes(prefix))
    const start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1
    const end = start + prefix.length
    const startPos = new Position(this._position.line, start)
    const endPos = new Position(this._position.line, end)
    const range = new Range(startPos, endPos)
    likeTag.forEach((attribute: DocumentAttribute) => {
      let insertText = new SnippetString().appendText(attribute.name)
      if (attribute.value.indexOf('/') > -1) {
        const values = attribute.value.split('/')
        insertText = new SnippetString()
          .appendText(attribute.name + '="')
          .appendChoice(values)
          .appendText('"')
      }

      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${fullTag} Attribute`,
        documentation: attribute.description,
        kind: CompletionItemKind.Property,
        insertText: insertText,
        range
      })
    })
    return completionItems
  }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    this._document = document
    this._position = position

    let tag: string | undefined = this.getPreTag()
    if (tag === undefined) {
      return null
    }

    //console.log('tag', tag)
    if (this.isAttrStart()) {
      // 判断属性
      return this.getAttrCompletionItems(tag)
    } else if (this.isTagStart()) {
      // 判断标签
      return this.getTagCompletionItems()
    }

    return null
  }
}
