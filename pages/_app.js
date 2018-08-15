// Use this file to create persisting layout between page changes
import React from 'react'
import App, {Container} from 'next/app'
import Router from 'next/router'
import { GlobalStore, connect } from '../store'
import { Persist } from 'react-persist'
import { Provider } from 'unstated'

import './style.less'

const GlobalStorePersist = connect((props) => (
  <Persist 
    name="global-state" 
    data={props.store.state} 
    debounce={500} 
    onMount={data => props.store.setInitialState(data)}
  />
))

class MyApp extends App {
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
        <GlobalStore>
          <GlobalStorePersist />
          <Component {...pageProps} />
        </GlobalStore>
      </Container>
    )
  }
}

export default MyApp