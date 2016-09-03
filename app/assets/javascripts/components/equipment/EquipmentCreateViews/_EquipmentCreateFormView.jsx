Equipt.views.EquipmentCreateFormView = class extends Equipt.helpers.FormHelper {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		this.props.submittedForm(this.formData, this.props.equipment.id);
	}

	setType(value) {
		this.refs.category.value = value;
	}

	setImages(images) {
		this.images = images;
	}

	valueChanged(name, event) {
		let input 	  = event.target
		let newValue  = input.value;
		if (this.props.updateValue) this.props.updateValue(this, name, newValue);
	}

	render() {

		let OptionsHelper 		  = Equipt.helpers.OptionsHelper;
		let EquipmentUploaderView = Equipt.views.EquipmentUploaderView;
		let equipment 			  = this.props.equipment;

		let options = Equipt.content.createEquipment.typeOptions;
		let inputs =  Equipt.content.createEquipment.formInputs; 

		return (
			<form 	onSubmit={this.submit.bind(this)}
					className="form-group equipment-create-wrapper"
					>
				<OptionsHelper 	selectedOption={this.setType.bind(this)} 
								name="type" 
								ref="category"
								name="category"
								options={options}
								value={ equipment &&  equipment.category }
								onChange={ this.valueChanged.bind(this, 'category') }/>
				<div className="text-fields col-sm-6 row">

					{

						inputs.map((obj, i) => {

							let Tag = obj.tag;	
							return <form-field key={`create_form_${i}`}> 
										<br/>
										{ this.renderError.call(this, obj.name) }
										<Tag 	type="text" 
												ref={obj.name}
												type={obj.type}
												name={obj.name}
												className="form-control"
												placeholder={ obj.placeholder }
												value={ equipment && equipment[obj.name] }
												onChange={ this.valueChanged.bind(this, obj.name) }
										/>
									</form-field>
						})

					}

				</div>
				<EquipmentUploaderView setImages={ this.setImages.bind(this) }/>
				<button type="submit"
						className="btn btn-primary col-sm-12">
						{ equipment ? 'Update Equipment' : 'Add Equipment'}
				</button>
			</form>
		)
	}

}