import React, { Component } from 'react';
import './app-header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			problems: true,
		};
	}
	render() {
		return (
			<div className="header">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>Code Abbey Resolve</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
