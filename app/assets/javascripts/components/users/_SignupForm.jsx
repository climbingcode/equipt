Equipt.views.SignupFormView = class SignupForm extends Equipt.helpers.FormHelper {

	constructor(props) {
		super(props);
		this.state = {
			position: { lat: 0, lng: 0 },
			showTerms: false
		}
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		this.props.submit(this.formData);
	}

	setPosition(posObj) {
			
		if (this.refs.lat && this.refs.lng) {		
			this.refs.lat.value = posObj.lat;
			this.refs.lng.value = posObj.lng;
		}

		this.setState({
			position: posObj
		});

	}

	showTerms(state) {
		this.setState({
			showTerms: state
		});
		this.forceUpdate();
	}

	render() {

		let FaceBookController = Equipt.controllers.FaceBookController;
		let GoogleMapView = Equipt.views.mapView;
		let ModalView = Equipt.views.ModalView;
		let TermsAndConditions = Equipt.views.TermsAndConditions;
		let currentUser = this.props.currentUser;

		let inputs = Equipt.content.createUser.formInputs;

		if (!currentUser) {

			var readTermsAndConditions = 	<span>
												<input type="radio" ref="read_terms" name="read_terms"/>
												<label>
													Agree to the
													<span onClick={ this.showTerms.bind(this, true) }>terms and conditions</span>
												</label>
											</span>
		}

		if (this.state.showTerms) {

			var termsAndConditionsModal = 	<ModalView 	closeTo="signup" 
														closedModal={ this.showTerms.bind(this, false) }>
												<TermsAndConditions/>
											</ModalView>

		}

		return (			
			<form onSubmit={this.submit.bind(this)}>
				<div className="col-xs-6">
					{
						inputs.map((obj, i) => {

							let Tag = obj.tag;	
							return <form-field key={`create_form_${i}`}> 
										<br/>
										<label htmlFor={obj.placeholder}>{obj.placeholder}</label>
										<Tag 	type="text" 
												ref={obj.name}
												type={obj.type}
												name={obj.name}
												className="form-control"
												placeholder={ obj.placeholder }
												value={ currentUser && currentUser[obj.name] }
										/>
										{ this.renderError.call(this, obj.name) }
									</form-field>
						})

					}
					{ readTermsAndConditions }
					{ termsAndConditionsModal }
					<button className="btn btn-success pull-right" type="submit">Sign up</button>
				</div>
				<div className="col-xs-6">

					<GoogleMapView  setPosition={ this.setPosition.bind(this) }
									{ ...this.state }
					/>

				</div>
			</form>
		)
	}

}