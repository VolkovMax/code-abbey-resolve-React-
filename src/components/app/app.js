import React, { Component } from 'react';
import Header from '../app-header';
import FirstProblem from '../first-problem';
import SecondProblem from '../second-problem';
import RenderProblem from '../render-problem';

const App = () => {
	return (
		<div className="app">
			<Header />
			<RenderProblem />
		</div>
	);
};

export default App;
