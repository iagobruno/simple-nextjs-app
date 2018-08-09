import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

import Page from '../components/Page'
import UsernameForm from '../components/UsernameForm'

class Home extends Component {
  render() {
    return (
      <Page>
        <img className="logoHP" src="/static/logo.svg" />
        <h1 className="title">Hello world!</h1>
        <div className="description">
          Esse aplicativo lista todos os{' '}
          <Link href={`https://github.com/httpiago`}><a>seus repositórios do GitHub</a></Link>{' '}
          (sem contar com os forks).
        </div>

        <UsernameForm />
      </Page>
    )
  }
}

// Avisar no console quando o url da página mudar
Router.onRouteChangeComplete = (url) => console.log(`Url changed: ${url}`);

export default Home