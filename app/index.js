import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import LeftSide from './components/LeftSide'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
    	<div className="cv-app">
	    	<LeftSide />
	    	<Content />
    	</div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)