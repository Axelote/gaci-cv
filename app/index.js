import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import LeftSide from './components/LeftSide'
import Content from './components/Content'

/* const colors = ['default', 'blue', 'red'] */

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {colorScheme: 'default'};
	}

	changeSchemeClick(e) {
		this.setState({
			colorScheme: e.currentTarget.value
		})
	}


	render() {
		{/*const listColors = colors.map((color) =>
			<div className="cv-colorpicker-item" key={color.toString()}>
				<div className="cv-colorpicker-checkbox-wrap">
					<input type="radio" name="color" value={color} id={'color-' + color} className={'cv-colorpicker-checkbox'}  onChange={this.changeSchemeClick.bind(this)}/>
				</div>
				<label className="cv-colorpicker-label" htmlFor={'color-' + color}>{color}</label>
			</div>
		) */}
		return (
			<div className={'cv-app colorScheme-'+this.state.colorScheme}>
			{/* <div className="cv-colorpicker">
					<h3>Выберите цветовую схему</h3>
					<div className="cv-colorpicker-list">
						
					</div>
				</div> 
			*/}
				<LeftSide />
				<Content />
			</div>
		)
	}
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)