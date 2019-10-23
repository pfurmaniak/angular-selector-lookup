import * as vscode from 'vscode';
import { AngularHtmlDefinitionProvider } from './definitionProvider';
import { findSelectorCommand } from './findSelector';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('extension.angularFindSelector', findSelectorCommand)
	);
	context.subscriptions.push(
		vscode.languages.registerDefinitionProvider('html', new AngularHtmlDefinitionProvider())
	);
}

export function deactivate() {}
