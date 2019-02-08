import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function ListRepos({ reposList, solicitedUsername }) {
  return (
    <Fragment>
      <Link href="/">
        <a className="go-back">{'<'} VOLTAR</a>
      </Link>

      <h2 className="repos-title">
        Lista de repositórios:
        <div>
          @{solicitedUsername + ' '}
          <span className="badge badge-secondary">{reposList.length}</span>
        </div>
      </h2>

      <ul className="list list-group">
        {reposList.map((repo) => (
          <li key={repo.id} className="list-group-item">
            <Link href={repo.url}>
              <a>{repo.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

ListRepos.propTypes = {
  reposList: PropTypes.array.isRequired
}
