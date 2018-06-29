import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Button, Form, Input } from 'reactstrap'

class Home extends Component {
  state = {
    githubUsername: 'httpiago'
  }

  showRepositories = (event) => {
    event.preventDefault()

    // Ir para a página que mostra os repositórios
    Router.push(`/about?username=${this.state.githubUsername}`)
  }

  render() { 
    return (
      <div className="page">        
        <img className="logoHP" src="/static/logo.svg" />
        <h1 className="title">Hello world!</h1>
        <div className="description">
          Esse aplicativo lista todos os{' '}
          <Link href={`https://github.com/${this.state.githubUsername}`}><a>seus repositórios do GitHub</a></Link>{' '}
          (sem contar com os forks).
        </div>
        <Form onSubmit={this.showRepositories}>
          <Input type="text" className="inputUsername" placeholder={`Username do GitHub (${this.state.githubUsername})`} onChange={(event) => this.setState({ githubUsername: event.target.value})} />
          <Button color="primary" onClick={this.showRepositories}>Listar repositórios</Button>
        </Form>
      </div>
    )
  }
}

// Avisar no console quando o url da página mudar
Router.onRouteChangeComplete = (url) => console.log(`Url changed: ${url}`);

export default Home