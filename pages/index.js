import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from '../store'

import Page from '../components/Page'
import UsernameForm from '../components/UsernameForm'

class Home extends Component {
  render() {
    let { githubUsername } = this.props.store.state

    return (
      <Page>
        <img className="logoHP" src="/static/logo.svg" />
        <h1 className="title">Hello world!</h1>
        <div className="description">
          Esse aplicativo lista todos os{' '}
          <Link href={`https://github.com/${githubUsername}`}><a>seus repositórios do GitHub</a></Link>
          {' '}
          (sem contar com os forks).
        </div>

        <UsernameForm />
      </Page>
    )
  }
}

export default connect(Home)