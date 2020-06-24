import React, { Component } from 'react';
import './first-problem.css';

class FirstProblem extends Component {
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
		document.getElementById('code').innerHTML =
			"const data = document.getElementById('data').value.split(' ').map((x) => +x)";
		document.getElementById('code1').innerHTML =
			"document.getElementById('answer').value = data.reduce((a, b) => a + b)";
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h3>First Problem</h3>
						<p>Sum "A+B"</p>
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
					<div className="col-12 text-center">
						<code id="code" className="code"></code>
						<br />
						<code id="code1" className="code"></code>
					</div>
				</div>
			</div>
		);
	}
}

export default FirstProblem;
