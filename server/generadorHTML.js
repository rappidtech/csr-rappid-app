const ReactDOMServer = require('react-dom/server');
const ReactDOM = require('react-dom');
const React = require('react');
const Home = require('../src/components/Home').default;
const { ServerStyleSheet } = require('styled-components');

function generarHTML( data, styles ) {
    console.log('styles gen', styles)
    console.log('data gen', data)

    const sheet = new ServerStyleSheet();
    
    try {
        const html = ReactDOMServer.renderToString(
            sheet.collectStyles(<Home data={data} styles={styles}  />)
        );

        const style = sheet.getStyleTags();

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                <link rel="icon" type="image/png" href="icon-rappid.svg" title="Logo-RAppID">
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Rappid Tech is a software development company that specializes in web and mobile applications, custom software solutions, and digital marketing."
                />
                <meta name="keywords" content="Rappid Tech, Rappid, Tech, Software, Development, Web, Mobile, Applications, Custom, Solutions, Digital, Marketing" />
                <meta name="author" content="Rappid Tech" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <title>${data.titulo}</title>
                ${style}
                <style>
                    * {
                    box-sizing: border-box;
                    }
                
                
                    #root {
                    height: 100vh;
                    display: flex;
                    }

                    body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                        sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    }

                    code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                        monospace;
                    }

                
                    .App {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    background-color: #fff;
                    color: white;
                    align-items: center;
                    justify-content: space-between;
                    flex: 1;
                    overflow: auto;
                    }
                
                    .App-header {
                    margin-top: -100px;
                    }
                
                    .powered-by {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    }
                
                    .icon-delete {
                    color: rgba(0, 0, 0, 0);
                    fill: rgba(0, 0, 0, 0);
                    stroke: rgba(0, 0, 0, 0);
                    visibility: hidden;
                    }
                
                    @keyframes moveUpDown {
                    0%, 100% {
                        top: 100px;
                    }
                    50% {
                        top: 120px;
                    }
                    }
                
                
                
                    .App, .App-header {
                        position: relative; 
                    }
                </style>
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
            </body>
            </html>
        `;
    } finally {
        sheet.seal();
    }
}

module.exports = generarHTML;
