import React, { Component } from 'react';
import FirstProblem from '../first-problem';
import SecondProblem from '../second-problem';
import './render-problem.css';

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
			<div className="row render-problem">
				<div className="container render-problem__inner">
					<div className="col-lg-3 col-sm-12 render-problem-selector">
						<p>Select problem</p>
						<select
							className="custom-select render-prodlem-select"
							onChange={this.onChangeProblem}
							id="select"
						>
							<option value="1">Problem 1</option>
							<option value="2">Problem 2</option>
						</select>
					</div>
				</div>
				{this.state.problem}
			</div>
		);
	}
}
export default RenderProblem;
