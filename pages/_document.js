// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="ru">
                <Head>
                    <link rel="stylesheet" href="static/reset.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        color: white;
                        background: black;
                        margin: 8px;
                        font-size: 18px;
                        text-align: center;

                        font-family: Arial, Helvetica, sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}
