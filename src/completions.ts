// Populate completion items provider.

import * as vscode from "vscode";
import * as id from "@cmt/intellisensedata";

class CMakeCompletionsProvider implements vscode.CompletionItemProvider {

    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
        // sample completion
        // const completions: vscode.CompletionItem[] = [];
        // const completion = new vscode.CompletionItem("bla", vscode.CompletionItemKind.Field);
        // completions.push(completion);
        // return completions;

        // See https://devdiv.visualstudio.com/DevDiv/_git/vscode-csharp-next?path=/src/razor/src/Completion/RazorCompletionItemProvider.ts&_a=contents&version=GBfeature/lsp_tools_host
        // sample with LSP

        const lineText = document.lineAt(position).text;
        const startingCharacter = lineText[0];
        const textBeforeCaret = lineText.slice(0, position.character);

        // do not provide completions for comments
        if (startingCharacter === '#') {
            return [];
        }

        // Use the presence of a '(' before the caret as a hueristic to
        // identify whether the user is trying to type a command or a
        // variable. Note that this will not correctly handle multi-line
        // command invocations.
        const data = await id.IntellisenseData.getInstance();
        if (textBeforeCaret.includes('(')) {
            // guess variable
            const variables = Object.keys(data.variables).sort();
            return variables.map((v: string) => {
                const completion = new vscode.CompletionItem(v, vscode.CompletionItemKind.Variable);
                return completion;
            });
        } else {
            // guess command
            const commands = Object.keys(data.commands).sort();
            return commands.map((c: string) => {
                const completion = new vscode.CompletionItem(c, vscode.CompletionItemKind.Function);
                return completion;
            });
        }
    }

    resolveCompletionItem?(item: vscode.CompletionItem, _token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
        return item;
    }

}

export function getCompletionProvider() {
    return new CMakeCompletionsProvider();
}
