import * as functions from 'firebase-functions';
var tmp = require('tmp');
const fs = require('fs');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const preview = functions.https.onRequest((request, response) => {
    //  response.send("Hello from Firebase!");
    // const getGeneratedPageURL = (html: BlobPart, css: BlobPart, js: BlobPart) => {
    //     const getBlobURL = (code: BlobPart, type: string) => {
    //         const blob = new Blob([code], { type })
    //         var myUrl = createObjectURL(blob);
    //         // return URL.createObjectURL(blob)
    //         return myUrl;
    //     }

    //     const cssURL = getBlobURL(css, 'text/css')
    //     const jsURL = getBlobURL(js, 'text/javascript')

    //     const source = `
    //     <html>
    //         <head>
    //         ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
    //         ${js && `<script src="${jsURL}"></script>`}
    //         </head>
    //         <body>
    //         ${html || ''}
    //         </body>
    //     </html>
    //     `

    //     return getBlobURL(source, 'text/html')
    // }

    // const url = getGeneratedPageURL(
    //     '<p>Hello, world!</p>',
    //     'p { color: blue; }',
    //     'console.log("hi")'
    // );


    const js = unescape(request.body);
    // const js = doc.serialize;

    var tmpobj = tmp.fileSync({ prefix: 'prefix-', postfix: '.js' });
    console.log('File: ', tmpobj.name);
    console.log('Filedescriptor: ', tmpobj.fd);
    fs.writeFileSync('2pac.txt', js);


    const output = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="mobile-web-app-capable" content="yes">
                <meta name="apple-mobile-web-app-capable" content="yes">
                <title>Flutter Web Preview</title>
            </head>
            <body>
                <script src="${tmpobj.name}" type="application/javascript"></script>
            </body>
        </html>
        `
    response.send(output)
});
