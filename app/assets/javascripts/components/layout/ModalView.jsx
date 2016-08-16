Equipt.views.ModalView = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div className="modal-wrapper">
				<Link to={this.props.closeTo} >
					<div className="mask"></div>
				</Link>
				<div className="modal">
					<div className="modal-top-container col-sm-12">
						{ this.props.children }
					</div>
				</div>
			</div>
		)

	}

};