import React, { Fragment, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import Page from '../components/Page'
import UsernameForm from '../components/UsernameForm'

export default function HomePage() {
  const [githubUsername, setGithubUsername] = useState(() => 
    typeof window !== 'undefined'
      ? (window.localStoredUsername || '')
      : ''
  );
  const [loading, setLoading] = useState(false);
  const animationStyles = useSpring(loading ? { opacity: 0, height: 0 } : { opacity: 1, height: 260 });
  
  function goToAboutPage() {
    // Salvar usuário localmente
    window.localStoredUsername = githubUsername
    
    setLoading(true)
    
    // Ir para a página que mostra os repositórios
    setTimeout(() => Router.push(`/about?username=${githubUsername}`), 1000);
  }

  return (
    <Fragment>
      <Head>
        <title>React + Next</title>
      </Head>

      <Page>
        <img
          className={`logoHP ${(loading && 'looping')}`}
          src="/static/logo.svg"
        />

        <animated.div style={{
          overflow: 'hidden',
          padding: '0 6px',
          ...animationStyles
        }}>
          <h1 className="title">
            Hello world!
          </h1>
          <div className="description">
            Esse aplicativo lista todos os{' '}
            <Link href={`https://github.com/${githubUsername}`}><a>seus repositórios do GitHub</a></Link>
            {' '}
            (sem contar com os forks).
          </div>

          <UsernameForm
            githubUsername={githubUsername}
            setGithubUsername={setGithubUsername}
            goToAboutPage={goToAboutPage}
          />
        </animated.div>
      </Page>
    </Fragment>
  )
}
