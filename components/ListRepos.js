import React, { Fragment } from 'react'
import Link from 'next/link'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

export default (props) => {
  return (
    <Fragment>
      <h2 className="repos-title">Lista de repositórios: <Badge color="secondary">{props.reposList.length}</Badge></h2>
      
      <ListGroup className="list">
        {props.reposList.map((repo) => (
          <ListGroupItem key={repo.id}>
            <Link href={repo.url}>
                <a>{repo.name}</a>
              </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  )
}