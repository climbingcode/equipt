Equipt.views.EquipmentCreateFormView = class extends Equipt.helpers.FormHelper {

	static propType = {
		equipment: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			category: null
		}
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		if (!this.formData.sub_category && this.props.equipment) {
			this.formData.sub_category = this.props.equipment.sub_category;	
		} 
		let id = this.props.equipment && this.props.equipment.id;
		this.props.submittedForm(this.formData, this.images, id);
	}

	tabsChanged(tab) {
		this.formData.category = tab.category;
		this.setState({
			category: tab.category
		});
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

		const OptionsHelper 		  = Equipt.helpers.OptionsHelper;
		const EquipmentUploaderView   = Equipt.views.EquipmentUploaderView;
		const EquipmentSearchTabsView = Equipt.views.EquipmentSearchTabsView;
		
		let equipment 	 = this.props.equipment || {};
		let category 	 = this.state.category || equipment.category || 'camp';
		let optionsJson  = Equipt.content.createEquipment.typeOptions;
		let options 	 = category && optionsJson[category];
		let inputs  	 = Equipt.content.createEquipment.formInputs;

		return (
			<form 	onSubmit={this.submit.bind(this)}
					className="form-group equipment-create-wrapper"
					>
				<EquipmentSearchTabsView selected={ this.tabsChanged.bind(this) }
										 search={{ 
										 	category: category
										}}
										 
				/>
				{ this.renderError.call(this, 'sub_category') }
				<OptionsHelper 	ref="sub_category"
								name="sub_category"
								options={options}
								value={ equipment && equipment.sub_category }/>
				<div className="text-fields col-sm-6 row">

					{

						inputs.map((obj, i) => {

							let Tag = obj.tag;	
							return  <form-field key={`create_form_${i}`}> 
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
				<EquipmentUploaderView setImages={ this.setImages.bind(this) } equipment={ equipment }/>
				<button type="submit"
						className="btn btn-primary col-sm-12">
						{ equipment ? 'Update Equipment' : 'Add Equipment'}
				</button>
			</form>
		)
	}

}