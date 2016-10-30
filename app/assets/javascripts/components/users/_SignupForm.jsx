Equipt.views.SignupFormView = class SignupForm extends Equipt.helpers.FormHelper {

	constructor(props) {
		super(props);
		this.state = {
			position: { lat: 0, lng: 0 },
			showTerms: false,
			availability: []
		}
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		this.formData.availability = this.state.availability;
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

	setAvailabilityTime(time) {
		let index = this.state.availability.indexOf(time);
		if (index > -1) {
			this.state.availability.splice(index, 1);
		} else {
			this.state.availability.push(time);
		}
		this.setState(this.state);
	}

	showTerms(state) {
		this.setState({
			showTerms: state
		});
		this.forceUpdate();
	}

	render() {

		const FaceBookController    = Equipt.controllers.FaceBookController;
		const GoogleMapView 	    = Equipt.views.mapView;
		const ModalView 		    = Equipt.views.ModalView;
		const RentalsPickUpTimeView = Equipt.views.RentalsPickUpTimeView;
		const TermsAndConditions    = Equipt.views.TermsAndConditions;
		
		let currentUser = this.props.currentUser;
		let inputs 		= Equipt.content.createUser.formInputs;

		if (!currentUser) {

			var readTermsAndConditions = 	<span>
												<input type="radio" ref="read_terms" name="read_terms"/>
												<label>
													Agree to the
													<span onClick={ this.showTerms.bind(this, true) }>terms and conditions</span>
												</label>
											</span>

			var submitBtn = <button className="btn btn-success pull-right" type="submit">Sign up</button>

		} else {

			var submitBtn = <button className="btn btn-success pull-right" type="submit">Update Profile</button>

		}

		if (this.state.showTerms) {

			var termsAndConditionsModal = 	<ModalView 	closeTo="signup" 
														closedModal={ this.showTerms.bind(this, false) }>
												<TermsAndConditions/>
											</ModalView>

		}

		return (			
			<div className="user-create-edit-form col-xs-12">
				<div className="col-xs-6">
					<form onSubmit={this.submit.bind(this)}>
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
														defaultValue={ currentUser && currentUser[obj.name] }
												/>
												{ this.renderError.call(this, obj.name) }
											</form-field>
								})

							}
							{ readTermsAndConditions }
							{ termsAndConditionsModal }
							{ submitBtn }
					</form>
				</div>
				<div className="col-xs-6">
					<h4>Your Owned Equipment Pick-Up location</h4>
					<GoogleMapView  setPosition={ this.setPosition.bind(this) }
									position={{ 
												lng: currentUser.lng,
												lat: currentUser.lat
											}}
									showLocationSearch={ true }
									{ ...this.state }
					/>
				</div>
				<div className="col-xs-6">
					<h4>When are you available to rent out your Equipment</h4>
					<RentalsPickUpTimeView  selectedTime={ this.setAvailabilityTime.bind(this) }
											times={ this.state.availability }/>
				</div>
			</div>
		)
	}

}