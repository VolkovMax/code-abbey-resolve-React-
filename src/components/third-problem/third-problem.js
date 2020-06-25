import React, { Component } from 'react';
import './third-problem.css';

class ThirdProblem extends Component {
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

		for (let i = 0; i < data.length; i++) {
			if (isNaN(data[i])) {
				document.getElementById('code').innerHTML =
					"Input array of numbers! For example '363911 373629 874807 152984 981786 176275'";
				document.getElementById('code1').innerHTML = '';
				document.getElementById('answer').value = '';
				break;
			} else {
				let answer = '';
				for (let i = 0; i < data.length; i += 2) {
					answer += `${data[i] + data[i + 1]} `;
				}
				document.getElementById('answer').value = answer;
				document.getElementById(
					'code'
				).innerHTML = `const data = document.getElementById('data').value.split(' ').map((x) => +x)`;
				document.getElementById('code1').innerHTML = `let answer = '';`;
				document.getElementById(
					'code2'
				).innerHTML = `for (let i = 0; i < data.length; i += 2) {`;
				document.getElementById('code3').innerHTML =
					'answer += "${data[i] + data[i + 1]}";';
				document.getElementById('code4').innerHTML = `}`;
				document.getElementById(
					'code5'
				).innerHTML = `document.getElementById('answer').value = answer;`;
			}
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row problem-heading">
					<div className="col-12 text-center problem-heading-inner">
						<h3>Sums in Loop</h3>
						<p>Problem #3</p>
					</div>
				</div>
				<div className="row problem-data">
					<div className="col-lg-6 col-sm-12 d-flex align-items-end problem-data-input">
						<input
							className="form-control input__without-amount"
							id="data"
							type="text"
							placeholder="Input data WITHOUT(!!!) amount of values"
						/>
						<button
							className="btn btn-secondary"
							type="button"
							onClick={this.resolve}
						>
							Solve!
						</button>
					</div>
					<div className="col-lg-6 col-sm-12 d-flex align-items-end problem-data-output">
						<input
							className="form-control"
							id="answer"
							type="text"
							name="solve"
							placeholder="Answer is..."
						/>
					</div>
				</div>
				<div className="row problem-data-resolve">
					<div className="col-12">
						<code id="code" className="code"></code>
						<br />
						<code id="code1" className="code"></code>
						<br />
						<code id="code2" className="code"></code>
						<br />
						<code id="code3" className="code"></code>
						<br />
						<code id="code4" className="code"></code>
						<br />
						<code id="code5" className="code"></code>
					</div>
				</div>
			</div>
		);
	}
}

export default ThirdProblem;
