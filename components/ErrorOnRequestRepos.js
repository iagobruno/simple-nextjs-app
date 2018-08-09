import React, { Fragment } from 'react'
import { Alert } from 'reactstrap'

export default (props) => {
  return (
    <Alert color="danger" style={{textAlign: 'left'}}>
      <b>
        Erro ao Solicitar os repositórios do usuário: <br/>
        @{props.solicitedUsername}{' '}
      </b>
      <br/>
      <br/>
      Usuário não exite!
    </Alert>
  )
}