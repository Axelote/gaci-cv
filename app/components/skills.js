import React from 'react'

import SkillsList from './SkillsList'
import SkillsGrid from './SkillsGrid'

const skills = [
	{
		title: 'HTML',
		icon: '',
		percent: 90,
		level: 'Эксперт'
	},
	{
		title: 'CSS',
		icon: '',
		percent: 90,
		level: 'Эксперт'
	},
	{
		title: 'JS',
		icon: '',
		percent: 50,
		level: 'Средний'
	},
];

export default class Skills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showList: true,
			showGrid: false,
			activeList: 'active',
			activeGrid: ''
		};
		this.showListClick = this.showListClick.bind(this);
		this.showGridClick = this.showGridClick.bind(this);
	}
	showListClick() {
		const currentState = this.state.active;
		this.setState({
			showList: true,
			showGrid: false,
			activeList: 'active',
			activeGrid: ''
		});
	}
	showGridClick() {
		const currentState = this.state.active;
		this.setState({
			showList: false,
			showGrid: true,
			activeList: '',
			activeGrid: 'active'
		});
	}

	render() {
		return (
			<div className="cv-skills cv-block">
				<div className="container">
					<div className="cv-skills-tools">
						<div className={'cv-skills-tools-i ' + this.state.activeList} onClick={this.showListClick}>Списком</div>
						<div className={'cv-skills-tools-i ' + this.state.activeGrid} onClick={this.showGridClick}>Плиткой</div>
					</div>
					<h2 className="cv-block-title">Умения</h2>
					{this.state.showList ?
						<SkillsList skills={skills} /> :	null
					}
					{this.state.showGrid ?
						<SkillsGrid skills={skills} /> :	null
					}					
				</div>
			</div>
		);
	}
}