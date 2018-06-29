// Use this file to create a custom html page
import Document, { Head, Main, NextScript } from 'next/document'

import './style.less'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"/>
          <link href="/static/favicon.ico" rel="shortcut icon"/>
          <title>React + Next</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument