import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'isomorphic-fetch'

import Page from '../components/Page'
import ListRepos from '../components/ListRepos'
import ErrorOnRequestRepos from '../components/ErrorOnRequestRepos'

export default function AboutPage(props) { 
  const { solicitedUsername, reposList } = props

  if (reposList.Error) {
    // Mostrar mensagem de erro na tela
    return (
      <Page>
        <Head>
          <title>Erro ao solicitar repositórios de @{solicitedUsername}</title>
        </Head>

        <ErrorOnRequestRepos
          solicitedUsername={props.solicitedUsername}
        />

        <Link href="/"><a>TENTAR MAIS UMA VEZ</a></Link>
      </Page>
    )
  }

  // Mostrar lista de repositórios
  return (
    <Page>
      <Head>
        <title>Mostrando repositórios de @{solicitedUsername}</title>
      </Head>

      <ListRepos
        reposList={reposList}
        solicitedUsername={props.solicitedUsername}
      />
    </Page>
  )
}

/**
 * Server code
 * @see https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
 */
AboutPage.getInitialProps = async ({ query }) => {
  const solicitedUsername = query.username || 'httpiago'
  
  // Solicitar os repositórios do usuário definido
  const reposList = await fetch(`https://api.github.com/users/${solicitedUsername}/repos`)
    .then(async res => {
      let list = await res.json()
      // Não mostrar forks
      return list.filter(item => item.fork === false);
    })
    .catch(error => {
      // Request error
      //console.error('Erro ao solicitar repositórios:', error)
      // Mostrar menssagem de erro na tela
      return { Error: true };
    })
return { solicitedUsername, reposList }
}
