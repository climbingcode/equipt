import React from 'react';

import { FormComponent } from 'components/helpers/FormComponent';
import { GoogleMapView } from 'components/map/map';
import { ModalView } from 'components/layout/ModalView';
import { RentalsPickUpTimeView } from 'components/rentals/RentalsPickUpTimeView';

export class SignupFormView extends FormComponent {

	constructor(props) {
		super(props);
		
		this.state = {
			position: { lat: 0, lng: 0 },
			changedPosition: false,
			showTerms: false,
			availability: []
		}

		this.geo = {};

		let setPosition = (position) => {			
			this.geo.lat = position.coords.latitude;
			this.geo.lng = position.coords.longitude;
		};

		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(setPosition);
	    }
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		this.formData.availability = this.state.availability;
		this.props.submit(this.formData);
	}

	getPosition(currentUser = {}) {

		let position = {};

		if (currentUser.lng && currentUser.lat) {
			position.lat = currentUser.lat;
			position.lng = currentUser.lng;
		} else {
			position.lat = this.geo.lat || 0;
			position.lng = this.geo.lng || 0;
		}

		this.state.position = position;
		this.setState(this.state); 
		this.setPositionInputValues(position);

	}

	setPosition(posObj) {	
		this.setPositionInputValues(posObj);
		this.positionChanged = true;
		this.state.position = posObj;
		this.setState(this.state);
	}

	setPositionInputValues(posObj) {
		if (this.refs.lat && this.refs.lng) {		
			this.refs.lat.value = posObj.lat;
			this.refs.lng.value = posObj.lng;
		}
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

	setStartingAvailabilities(currentUser = {}) {
		if (currentUser.availabilities) {
			let availabilities = currentUser.availabilities.map(function(availability) {
				return availability.hour + '.00';
			});
			this.state.availability = availabilities;
			this.setState(this.state);
		}
	}

	showTerms(state) {
		this.setState({
			showTerms: state
		});
		this.forceUpdate();
	}

	componentDidMount() {
		this.getPosition(this.props.currentUser);
		this.setStartingAvailabilities(this.props.currentUser);
	}

	componentWillReceiveProps() {
		!this.positionChanged 
		&& this.getPosition(this.props.currentUser)
		&& this.setStartingAvailabilities(this.props.currentUser);
	}

	componentWillUnmount() {
		this.positionChanged = false;
	}

	render() {
		
		let currentUser = this.props.currentUser || {};
		let inputs 		= SignupFormView.formInputs;

		if (!currentUser) {

			var readTermsAndConditions = 	<div>
												<input type="radio" ref="read_terms" name="read_terms"/>
												<label>
													Agree to the
													<span onClick={ this.showTerms.bind(this, true) }>terms and conditions</span>
												</label>
											</div>

			var submitBtn = <button className="btn btn-success pull-right col-sm-12" type="submit">Sign up</button>

		} else {

			var submitBtn = <button className="btn btn-success pull-right col-sm-12" type="submit">Update Profile</button>

		}

		if (this.state.showTerms) {

			var termsAndConditionsModal = 	<ModalView 	closeTo="signup" 
														closedModal={ this.showTerms.bind(this, false) }>
												<TermsAndConditions/>
											</ModalView>

		}

		if (!currentUser.provider) {

			var passwordConfirmationNeeded = 	<div className="password-confirmation-wrapper">
													<form-field> 
														<br/>
														<label  htmlFor="password">Password</label>
														<input 	ref="password"
																type="password"
																name="password"
																className="form-control"
																placeholder="password"
														/>
														{ this.renderError.call(this, 'password') }
													</form-field>
													<form-field> 
														<br/>
														<label  htmlFor="password-confirmation">Password Confirmation</label>
														<input 	ref="password_confirmation"
																type="password"
																name="password_confirmation"
																className="form-control"
																placeholder="Password Confirmation"
														/>
														{ this.renderError.call(this, 'password_confirmation') }
													</form-field>
												</div>

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
												<Tag    ref={obj.name}
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
							{ passwordConfirmationNeeded }
							{ readTermsAndConditions }
							{ termsAndConditionsModal }
							<br/>
							{ submitBtn }
					</form>
				</div>
				<div className="col-xs-6">
					<h4>Your Owned Equipment Pick-Up location</h4>
					<GoogleMapView  setPosition={ this.setPosition.bind(this) }
									position={ this.state.position }
									showLocationSearch={ true }
					/>
				</div>
				<div className="col-xs-6">
					<h4>When are you available to rent out your Equipment</h4>
					<RentalsPickUpTimeView  selectTime={ this.setAvailabilityTime.bind(this) }
											selectedTime={ this.state.availability }/>
				</div>
			</div>
		)
	}


	static formInputs = [
		{
			name: 'firstname',
			type: 'text',
			tag: 'input',
			placeholder: 'First Name'
		},
		{
			name: 'lastname',
			type: 'text',
			tag: 'input',
			placeholder: 'Last Name'
		},
		{
			name: 'username',
			type: 'text',
			tag: 'input',
			placeholder: 'User Name'
		},
		{
			name: 'email',
			type: 'text',
			tag: 'input',
			placeholder: 'Email'
		},
		{
			name: 'email_confirmation',
			type: 'text',
			tag: 'input',
			placeholder: 'Email Confirmation'
		},
		{
			name: 'lat',
			type: 'hidden',
			tag: 'input',
			placeholder: ''
		},
		{
			name: 'lng',
			type: 'hidden',
			tag: 'input',
			placeholder: ''
		}
	]

}