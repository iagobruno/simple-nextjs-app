import React, { Component } from 'react'
import Link from 'next/link'
import { Badge, Alert, ListGroup, ListGroupItem } from 'reactstrap'
import 'isomorphic-fetch' 

class About extends Component {  
  state = {
    UserNotFound: false,
    ErrorOnGetRepos: false
  }
  
  static async getInitialProps(urlDetails) {
    let requestError, username = urlDetails.query.username;
    
    // Solicitar os repositórios
    let reposList = await fetch(`https://api.github.com/users/${username}/repos`)
      .then(r => r.json())

    if ('message' in reposList && reposList.message === 'Not Found')
      requestError = true
    else
      // Não mostrar forks
      reposList = reposList.filter(item => item.fork === false)

    return { reposList, solicitedUsername: username, requestError }
  }

  render() { 
    var content = (this.props.requestError)
      ? (
        <div class="page">
          <Alert color="danger" style={{textAlign: 'left'}}>
            <b>
              Erro ao Solicitar os repositórios do usuário: <br/>
              @{this.props.solicitedUsername}{' '}
            </b>
            <br/><br/>
            Usuário não exite!
          </Alert>
          <Link href="/"><a>TENTAR MAIS UMA VEZ</a></Link>
        </div>
      )
      : (
        <div class="page">
          <Link href="/"><a class="go-back">{'<'} VOLTAR</a></Link>

          <h2 class="repos-title">Lista de repositórios: <Badge color="secondary">{this.props.reposList.length}</Badge></h2>
          <ListGroup className="list">
            {this.props.reposList.map((repo) => (
              <ListGroupItem key={repo.id}>
                <Link href={repo.url}>
                  <a>{repo.name}</a>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )
    
    return content
  }
}
 
export default About;