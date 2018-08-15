import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const ListRepos = (props) => {
  return (
    <Fragment>
      <h2 className="repos-title">Lista de repositórios: <span className="badge badge-secondary">{props.reposList.length}</span></h2>
      
      <ul className="list list-group">
        {props.reposList.map((repo) => (
          <li className="list-group-item" key={repo.id}>
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

export default ListRepos