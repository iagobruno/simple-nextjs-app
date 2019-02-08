// Use this file to create persisting layout between page changes
import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
// Import babel polyfills for old browsers
import 'babel-polyfill'

import './style.less'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }
  componentDidMount() {
    // Avisar no console quando o url da página mudar
    Router.onRouteChangeComplete = (url) => {
      console.log(`Url changed: ${url}`)
    };
  }

  render () {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
