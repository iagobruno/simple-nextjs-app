import React, { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import ListRepos from '../components/ListRepos'
import ErrorOnRequestRepos from '../components/ErrorOnRequestRepos'

function getQueryString(a,b){b||(b=window.location.href);a=a.replace(/[\[\]]/g,"\\$&");var c=(new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)")).exec(b);return c?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null};

class About extends Component { 
  state = {
    solicitedUsername: ''
  } 

  async componentDidMount() {
    
    let solicitedUsername = getQueryString('username')
    
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
    
    this.setState({ solicitedUsername, reposList })
  }

  render() {
    let { solicitedUsername, requestError, reposList } = this.state

    // A página ainda não foi iniciada (componentDidMount)
    if (!solicitedUsername) return <Page>Carregando...</Page>

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