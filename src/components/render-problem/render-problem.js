import React, { Component } from 'react';
import FirstProblem from '../first-problem';
import SecondProblem from '../second-problem';

class RenderProblem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			problem: <FirstProblem />,
		};
		this.onChangeProblem = this.onChangeProblem.bind(this);
	}
	onChangeProblem() {
		const problemId = document.getElementById('select').value - 1;
		const arr = [<FirstProblem />, <SecondProblem />];
		this.setState(() => ({
			problem: arr[problemId],
		}));
	}
	render() {
		return (
			<div>
				<select onChange={this.onChangeProblem} id="select">
					<option value="1">Problem 1</option>
					<option value="2">Problem 2</option>
				</select>
				{this.state.problem}
			</div>
		);
	}
}
export default RenderProblem;
