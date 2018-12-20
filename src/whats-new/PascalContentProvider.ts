/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, Sponsor, ContentProvider, Header, Image } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewPascalContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `Edit your <b>Delphi</b> and <b>FreePascal</b> files with full
            <b>Syntax Highlighting</b> for files, forms and projects, with a huge set of <b>Snippets</b>, 
            <b>Code Formatters</b> and <b>Source Code Navigation</b>`};
    }

    provideChangeLog(): ChangeLogItem[] {
        let changeLog: ChangeLogItem[] = [];
        changeLog.push({kind: ChangeLogKind.NEW, message: "<b>Multi-root</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Visual Studio <b>Live Share</b> support"});
        changeLog.push({kind: ChangeLogKind.CHANGED, message: "Better <b>Code Navigation</b>"});
        changeLog.push({kind: ChangeLogKind.CHANGED, message: `The <b>Formatter</b> was extracted to its own 
            extension (<a title=\"Open Pascal Formatter\" href=\"https://github.com/alefragnani/vscode-pascal-formatter/\">
            Pascal Formatter</a>)`});
        changeLog.push({kind: ChangeLogKind.FIXED, message: `Support <i>.lpr</i> files (Thanks to @BeRo1985 
            - <a title=\"Open PR #30\" href=\"https://github.com/alefragnani/vscode-language-pascal/pulls/30\">
            PR #30</a>)</b>`});
        return changeLog;
    }

    provideSponsors(): Sponsor[] {
        let sponsors: Sponsor[] = [];
        return sponsors
    }
   
}