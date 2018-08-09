import React, { Component } from 'react'
import Router from 'next/router'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import { Persist } from 'react-persist'

const InvalidMsg = (props) => <div className="invalid-feedback" style={{display:'block'}}>{props.children}</div>
const ValidMsg = (props) => <div className="valid-feedback" style={{display:'block'}}>{props.children}</div>

// Fazer a validação do formulário
function required(value, props, components) {
  if (!value.toString().trim().length) {
    return <InvalidMsg>*Campo obrigatório</InvalidMsg>
  }
}

class UsernameForm extends Component {
  constructor(props) {
    super(props)

    // Default state
    this.state = {
      githubUsername: ''
    }

    this.mainform = React.createRef()
    this.usernameInput = React.createRef()
  }

  showRepositories = (event) => {
    event.preventDefault()
    
    // Ir para a página que mostra os repositórios
    console.log('Buscando os repositórios do usuário:', this.state.githubUsername);
    Router.push(`/about?username=${this.state.githubUsername}`)
  }
  handleInputChange = (event) => {
    this.setState({ githubUsername: event.target.value })
  }

  render() { 
    return (
      <Form className="username-form" ref={this.mainform} onSubmit={this.showRepositories}>
        {/* Salvar o username no localStorage */}
        <Persist 
          name="username-form" 
          data={this.state} 
          debounce={300} 
          onMount={(data) => this.setState(data)}
        />
        <Input
          type="text" 
          name="username" 
          className="form-control inputUsername" 
          ref={this.usernameInput} 
          value={this.state.githubUsername}
          placeholder="Username do GitHub" 
          onChange={this.handleInputChange}
          validations={[required]} 
        />
        <Button className="btn btn-primary">Listar repositórios</Button>
      </Form>
    )
  }
}
 
export default UsernameForm;