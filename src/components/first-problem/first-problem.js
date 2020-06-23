import React from 'react'
import './first-problem.css'

const FirstProblem = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<h3>First Problem</h3>
					<p>Sum "A+B"</p>
				</div>
				<div className="row">
					<div className="col-6">
						<p>Input test data</p>
						<input type="text" />
						<button>Solve!</button>
					</div>
					<div className="col-6"></div>
				</div>
			</div>
		</div>
	)
}

export default FirstProblem
