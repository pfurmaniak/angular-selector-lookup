import * as vscode from 'vscode';

export const findSelectorCommand = () => {
	const quickPick = vscode.window.createQuickPick();
	let searchText: string;

	// Copy clipboard content if any
	vscode.env.clipboard.readText().then((value: string) => {
		if (value) {
            quickPick.value = value;
            searchText = value;
		}
	});

	quickPick.onDidChangeValue((value: string) => {
		searchText = value;
	});
	quickPick.onDidAccept(() => findSelector(searchText));
	quickPick.onDidHide(() => quickPick.dispose());
	quickPick.show();
};

export function findSelector(value: string): void {
    if (value) {
        vscode.commands.executeCommand('workbench.action.findInFiles', {
            query: `selector:\\s*['"\`]([A-Za-z\-]*${value}[A-Za-z\-]*)['"\`]`,
            isRegex: true,
            triggerSearch: true
        });
    } else {
        vscode.window.showErrorMessage('Selector can not be empty');
    }
}