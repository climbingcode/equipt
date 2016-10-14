Equipt.views.ModalView = class extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let AjaxLoader = Equipt.controllers.AjaxLoader;

		let params = this.props.params || {};

		return(
			<div className="modal-wrapper">
				<Link to={this.props.closeTo} params={params} >
					<div className="mask"></div>
				</Link>
				<div className="modal">
					<div className="close col-sm-2">
						<Link 	onClick={ this.props.closedModal } 
								to={this.props.closeTo} 
								params={params} >
							<i className="fa fa-times-circle pull-right" 
							   aria-hidden="true">
							</i>
						</Link>
					</div>
					<div className="modal-top-container col-sm-12">
						<AjaxLoader/>
						{ this.props.children }
					</div>
				</div>
			</div>
		)

	}

};