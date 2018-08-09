import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import Page from '../components/Page'
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
    let { solicitedUsername, reposList } = this.state

    // A página ainda não foi iniciada (componentDidMount)getQueryString
    if (!solicitedUsername) return <Page>Carregando...</Page>

    return (reposList.requestError === true)
      ? (
        <Page>
          <ErrorOnRequestRepos solicitedUsername={solicitedUsername} />

          <Link href="/"><a>TENTAR MAIS UMA VEZ</a></Link>
        </Page>
      )
      : (
        <Page>
          <Link href="/"><a className="go-back">{'<'} VOLTAR</a></Link>

          <ListRepos reposList={reposList} />
        </Page>
      )
  }
}
 
export default About;