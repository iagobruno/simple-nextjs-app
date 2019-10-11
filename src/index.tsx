import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const mountNode = document.getElementsByTagName('main')[0]

render(
  <App/>,
  mountNode
)