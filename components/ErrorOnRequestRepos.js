import React, { Fragment } from 'react'

export default (props) => {
  return (
    <div className="alert alert-danger" style={{textAlign: 'left'}} role="alert">
      <b>
        Erro ao Solicitar os repositórios do usuário: <br/>
        @{props.solicitedUsername}{' '}
      </b>
      <br/>
      <br/>
      Talvez o usuário não exita.
    </div>
  )
}