import { TagObject } from '@/hover-tips'
import { CancellationToken, CompletionContext, CompletionItem, CompletionItemProvider, CompletionList, Position, ProviderResult, Range, TextDocument, workspace } from 'vscode'
import { ExtensionConfigutation, ExtensionLanguage } from '..'
import { DocumentSlot, localDocument } from '@/document'

export class SlotCompletionItems implements CompletionItemProvider<CompletionItem> {
  private _document!: TextDocument
  private _position!: Position
  private tagReg: RegExp = /<n-([\w-]+)\s*/g

  /**
   * 获取前置标签
   */
  getPreTag(): TagObject | undefined {
    let line = this._position.line
    let tag: TagObject | string | undefined
    line--
    let txt = this._document.lineAt(line).text

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
   * 匹配标签
   * @param reg 匹配模式
   * @param txt 匹配文本
   * @param line 当前行
   */
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string | undefined {
    let match: RegExpExecArray | null
    let arr: TagObject[] = []

    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: 0
      })
    }
    return arr.pop()
  }

  matchSuffixTag(text: string): boolean {
    let reg: RegExp = new RegExp('</n-' + text + '>', 'g')
    let line = this._position.line
    line++

    while (line - this._position.line < 10) {
      let txt = this._document.lineAt(line).text
      if (reg.test(txt)) {
        return true
      }
      line++
    }

    return false
  }

  getSlotsCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('naive-ui-intellisense')
    const language = config?.language || ExtensionLanguage.cn
    const document: Record<string, any> = localDocument[language]
    const attributes: DocumentSlot[] = document['n-' + tag].slots || []

    const startPos = new Position(this._position.line, this._position.character)
    // const endPos = new Position(this._position.line, this)
    const range = new Range(startPos, startPos)

    attributes.map((res: DocumentSlot) => {
      completionItems.push({
        label: res.name,
        detail: 'n-' + tag + ' Slot',
        documentation: res.description,
        insertText: res.name,
        range
      })
    })

    return completionItems
  }

  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    this._document = document
    this._position = position

    let tag: TagObject | undefined = this.getPreTag()
    if (tag === undefined) {
      return null
    }
    //console.log("tag:pre:", tag.text)
    if (this.matchSuffixTag(tag.text)) {
      //console.log("tag:", tag.text)
      return this.getSlotsCompletionItems(tag.text)
    }

    return null
  }
}
