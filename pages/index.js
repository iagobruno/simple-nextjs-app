import React, { Component } from 'react'
import Link from 'next/link'

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

export default Home