import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
    	<div className="cv-app">
	    	<Header />
	    	<Content />
    	</div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)