import React, { Component } from 'react'
import Router from 'next/router'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import { connect } from '../store'

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

    this.store = props.store
    this.mainform = React.createRef()
    this.usernameInput = React.createRef()
  }

  showRepositories = (event) => {
    event.preventDefault()
    
    // Ir para a página que mostra os repositórios
    Router.push(`/about?username=${this.store.state.githubUsername}`)
    console.log('Buscando os repositórios do usuário:', this.store.state.githubUsername);
  }
  handleInputChange = (event) => {
    this.store.changeUsername(event.target.value)
  }

  render() {
    return (
      <Form className="username-form" ref={this.mainform} onSubmit={this.showRepositories}>
        <Input
          type="text" 
          name="username" 
          className="form-control inputUsername" 
          ref={this.usernameInput} 
          value={this.store.state.githubUsername} 
          placeholder="Username do GitHub" 
          onChange={this.handleInputChange} 
          validations={[required]} 
        />
        <Button className="btn btn-primary">Listar repositórios</Button>
      </Form>
    )
  }
}


export default connect(UsernameForm)