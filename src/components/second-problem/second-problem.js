import React, { Component } from 'react';
import './second-problem.css';

class SecondProblem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			problem: true,
		};
	}
	resolve() {
		const data = document
			.getElementById('data')
			.value.split(' ')
			.map((x) => +x);
		document.getElementById('answer').value = data.reduce((a, b) => a + b);
		document.getElementById('code2').innerHTML =
			"const data = document.getElementById('data').value.split(' ').map((x) => +x)";
		document.getElementById('code3').innerHTML =
			"document.getElementById('answer').value = data.reduce((a, b) => a + b)";
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h3>Sum in Loop</h3>
						<p>Second Problem</p>
					</div>
				</div>
				<div className="row">
					<div className="col-6 d-flex align-items-end">
						<p>Input test data</p>
						<input id="data" type="text" name="data" />
						<button type="button" onClick={this.resolve}>
							Solve!
						</button>
					</div>
					<div className="col-6 d-flex align-items-end">
						<input id="answer" type="text" name="solve" />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<code id="code2" className="code"></code>
						<br />
						<code id="code3" className="code"></code>
					</div>
				</div>
			</div>
		);
	}
}

export default SecondProblem;
