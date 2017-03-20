import React from 'react';

export class FaceBookView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		
		if (this.props.loggedIn) {
			var btn = 	<button className="btn btn-success" 
								disabled={!this.props.facebookLoaded} 
								onClick={ this.props.logout }>
								Logout
					    </button>
		} else {
			var btn = 	<button className="btn btn-success" 
								disabled={!this.props.facebookLoaded} 
								onClick={ this.props.login }>
								<i className="fa fa-facebook-official fa-2" aria-hidden="true"></i>
								Login With Facebook
						</button>
		}

		return (
			<div className="oauth-container">
				{btn}
				<hr/>
			</div>
		)

	}

}