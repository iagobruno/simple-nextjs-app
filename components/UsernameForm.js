import React from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'

const InvalidMsg = (props) => <div className="invalid-feedback" style={{display:'block'}}>{props.children}</div>
const ValidMsg = (props) => <div className="valid-feedback" style={{display:'block'}}>{props.children}</div>

// Fazer a validação do formulário
const required = (value, props, components) => {
  if (!value.toString().trim().length) {
    return <InvalidMsg>*Campo obrigatório</InvalidMsg>
  }
}

export default function UsernameForm(props) {
  const { githubUsername } = props

  function handleFormSubmit(event) {
    event.preventDefault()
    
    props.goToAboutPage()
    
    console.log('Buscando os repositórios do usuário:', githubUsername);
  }
  
  function handleUsernameChange(e) {
    props.setGithubUsername(e.target.value)
  }

  return (
    <Form
      className="username-form"
      method="GET"
      action="/about"
      onSubmit={handleFormSubmit}
    >
      <Input
        type="text" 
        name="username" 
        className="form-control inputUsername" 
        value={githubUsername}
        placeholder="Username do GitHub" 
        onChange={handleUsernameChange} 
        validations={[required]} 
      />
      <Button className="btn btn-primary">Listar repositórios</Button>
    </Form>
  )
}
