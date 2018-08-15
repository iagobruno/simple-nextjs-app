import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ErrorAlert = (props) => {
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

ErrorAlert.propTypes = {
  solicitedUsername: PropTypes.string.isRequired
}

export default ErrorAlert