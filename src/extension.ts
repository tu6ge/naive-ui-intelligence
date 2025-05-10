import { ExtensionContext } from 'vscode'
import * as vscode from 'vscode'

import { ElementHoverProvier } from './hover-tips/element-hover-provider'
import { ElementCompletionItemProvider } from './completion/element-completion-item-povider'
import { SlotCompletionItems } from './completion/slot-completion-items'
import { PascalCaseCompletionItem } from './completion/PascalCaseCompletionItem'
import { PascalCaseSlotCompletionItems } from './completion/PascalCaseSlotCompletionItems'

export function activate(context: ExtensionContext): void {
  console.log('extension "naive-ui" is now active!')

  // 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new ElementCompletionItemProvider(),
      '',
      ' ',
      ':',
      '<',
      '"',
      "'",
      '/',
      '@',
      '(',
      '-'
    )
  )
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new SlotCompletionItems(),
      '#'
    )
  )
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new PascalCaseCompletionItem(),
      'N',
      ' '
    )
  )
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new PascalCaseSlotCompletionItems(),
      '#'
    )
  )

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: 'vue',
          scheme: 'file'
        }
      ],
      new ElementHoverProvier()
    )
  )
}

// this method is called when your extension is deactivated
export function deactivate() {}

export default {
  activate,
  deactivate
}
