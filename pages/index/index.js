import React, { Component } from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap'

class Home extends Component {
  static async getInitialProps() {
    console.log('oi')
  }

  state = {
    title: 'Hello world!'
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      return {
        title: prevState.title + '!'
      }
    })
  }

  render() { 
    return (
      <div className="page">        
        <img className="logoHP" src="/static/logo.svg" />
        <h1 onClick={this.handleClick}>{this.state.title}</h1>
        <div className="description">
          This is an example of an app built
          with <Link href="https://github.com/facebook/create-react-app"><a>Create React App</a></Link> and{' '}
          <Link href="https://github.com/necolas/react-native-web"><a>React Native for Web</a></Link>
        </div>
        <Link href="/about"><Button color="primary">Fazer login</Button></Link>
      </div>
    )
  }
}
 
export default Home