import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="eng">
                <Head>
                    <meta name="description" content="Wbsite portofolio Nextjs" />
                    <meta charSet="utf-8" />
                    <meta name="robot" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/npogress/0.2.0/nprogress.min.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>
                    {`
                        body {
                            font-family: 'Roboto', sans-serif;
                        }
                    `}
                </style>
            </html>
        )
    }
}