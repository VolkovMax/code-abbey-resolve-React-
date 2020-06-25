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
						<h3>Sum "A+B"</h3>
						<p>First Problem</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-sm-12 d-flex align-items-end">
						<input
							className="form-control"
							id="data"
							type="text"
							placeholder="Input test data"
						/>
						<button
							className="btn btn-secondary"
							type="button"
							onClick={this.resolve}
						>
							Solve!
						</button>
					</div>
					<div className="col-lg-6 col-sm-12 d-flex align-items-end">
						<input
							className="form-control"
							id="answer"
							type="text"
							name="solve"
							placeholder="Answer is..."
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
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
