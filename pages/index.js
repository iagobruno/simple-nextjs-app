import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Button, Form, Input } from 'reactstrap'
import { Persist } from 'react-persist'

import Page from '../components/Page'

class Home extends Component {
  state = {
    githubUsername: 'httpiago'
  }
	
  componentDidMount = () => {
    // Fazer uma animação legal quando a página carregar
    let elements = ['.title', '.description', '.inputUsername', '.btn']
    let i = 0

	  // Fazer um loop nos elementos com um delay de diferença entre cada um
    let timer = setInterval(function() {

      // Mostrar o elemento
      document.getElementsByClassName(elements[i].slice(1))[0].classList.remove('hide')

      // Parar o timer quando chegar no último elemento
      if (i >= elements.length - 1) clearInterval(timer)
      else i++

    }, 100)

    // Alinhar a página 
    document.getElementsByClassName('logoHP')[0].style.marginTop = ''
  }
  showRepositories = (event) => {
    event.preventDefault()

    // Ir para a página que mostra os repositórios
    Router.push(`/about?username=${this.state.githubUsername}`)
  }
  handleInputChange = (event) => {
    this.setState({ githubUsername: event.target.value })
  }

  render() { 
    return (
      <Page>
        <img className="logoHP" src="/static/logo.svg" style={{marginTop:250}} />
        <h1 className="title hide">Hello world!</h1>
        <div className="description hide">
          Esse aplicativo lista todos os{' '}
          <Link href={`https://github.com/${this.state.githubUsername}`}><a>seus repositórios do GitHub</a></Link>{' '}
          (sem contar com os forks).
        </div>
        <Form id="username-form" onSubmit={this.showRepositories}>
          {/* Salvar o valor do formulário no navegador */}
          <Persist 
            name="username-form" 
            data={this.state} 
            debounce={300} 
            onMount={(data) => this.setState(data)}
          />
          <Input type="text" className="inputUsername hide" placeholder={`Username do GitHub (${this.state.githubUsername})`} onChange={this.handleInputChange} />
          <Button color="primary" className="hide" onClick={this.showRepositories}>Listar repositórios</Button>
        </Form>
      </Page>
    )
  }
}

// Avisar no console quando o url da página mudar
Router.onRouteChangeComplete = (url) => console.log(`Url changed: ${url}`);

export default Home