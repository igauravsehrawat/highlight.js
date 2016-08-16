/*
Language: custom-lang
Author: misc
*/

function(hljs) {
    return {
        keywords: {
            keyword: 'if else'
        },
        contains:[
            {
                className: 'function',
                begin: /^[ ]*?\b[A-Za-z_][0-9A-Za-z_\?]*?\s*?\(\s*?([^\)])*?\)\s*?\=([^\;]*?\;$)/,
                returnBegin: true,
                contains: [
                    hljs.inherit(hljs.TITLE_MODE, {
                    begin: /\b[A-Za-z_][0-9A-Za-z_\?]*/,
                    endsParent: true
                }),
                ]
            },
        ]
    };
}
