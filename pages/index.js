import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    title: 'hey'
  }

  handleClick(event) {
    this.setState((prevState) => {
      return {
        title: prevState.title + ' hey'
      }
    })
  }

  render() { 
    return (
      <div>
        <h2 onClick={this.handleClick}>{this.state.title}</h2>
      </div>
    )
  }
}
 
export default Home