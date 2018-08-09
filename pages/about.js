import React, { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import ListRepos from '../components/ListRepos'
import ErrorOnRequestRepos from '../components/ErrorOnRequestRepos'

class About extends Component {  
  static async getInitialProps(urlDetails) {
    
    let solicitedUsername = urlDetails.query.username
    
    // Solicitar os repositórios
    let reposList = await fetch(`https://api.github.com/users/${solicitedUsername}/repos`)
      .then(async (r) => {
        // Não mostrar forks
        let rs = await r.json()
        return rs.filter(item => item.fork === false)
      })
      .catch(err => {
        // Request error
        return { requestError: true }
      });
    
    return { solicitedUsername, reposList };
  }

  render() {
    let { solicitedUsername, requestError, reposList } = this.props

    return (requestError)
      ? (
        <div className="page">
          <ErrorOnRequestRepos solicitedUsername={solicitedUsername} />

          <Link href="/"><a>TENTAR MAIS UMA VEZ</a></Link>
        </div>
      )
      : (
        <div className="page">
          <Link href="/"><a className="go-back">{'<'} VOLTAR</a></Link>

          <ListRepos reposList={reposList} />
        </div>
      )
  }
}
 
export default About;