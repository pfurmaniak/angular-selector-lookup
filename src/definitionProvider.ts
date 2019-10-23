import * as vscode from 'vscode';
import { DefinitionProvider, TextDocument, Position, CancellationToken, ProviderResult, Location, LocationLink } from 'vscode';
import { findSelector } from './findSelector';

export class AngularHtmlDefinitionProvider implements DefinitionProvider {
    provideDefinition(document: TextDocument, position: Position, token: CancellationToken) : ProviderResult<Location | Location[] | LocationLink[]> {
        token.onCancellationRequested((e: any) => {
            console.log(e);
        });

        const selector = document.getText(document.getWordRangeAtPosition(position));
        findSelector(selector);

        return null;
    }
}