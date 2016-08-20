Equipt.views.EquipmentCreateFormView = class extends Equipt.helpers.FormHelper {

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		Equipt.actions.createEquiptment(this.formData);
	}

	setType(value) {
		this.refs.category.value = value;
	}

	render() {

		let OptionsHelper = Equipt.helpers.OptionsHelper;
		let EquipmentUploaderView = Equipt.views.EquipmentUploaderView;

		let options = ['tent', 'stove', 'sleeping bag', 'mat']

		return (
			<form 	onSubmit={this.submit.bind(this)}
					className="form-group equipment-create-wrapper"
					>
				<OptionsHelper 	selectedOption={this.setType.bind(this)} 
								name="type" 
								ref="category"
								options={options}/>
				<div className="text-fields col-sm-6 row">
					<br/>
					{ this.renderError.call(this, 'equipment_name') }
					<input 	type="text" 
							ref="equipment_name"
							className="form-control"
							placeholder="Title"
					/>
					<br/>
					{ this.renderError.call(this, 'brand') }
					<input 	type="text" 
							ref="brand"
							className="form-control"
							placeholder="brand"
					/>
					<br/>
					{ this.renderError.call(this, 'model') }
					<input 	type="text" 
							ref="model"
							className="form-control"
							placeholder="model"
					/>
					<br/>
					{ this.renderError.call(this, 'description') }
					<input 	type="text" 
							ref="description"
							className="form-control"
							placeholder="description"
					/>
					<br/>
					<label>years old</label>
					{ this.renderError.call(this, 'years_old') }
					<input 	type="number" 
							ref="years_old"
							className="form-control"/>
					<br/>
					<label>price per day</label>
					{ this.renderError.call(this, 'price_per_day') }
					<input 	type="input" 
							ref="price_per_day"
							className="form-control"/>
					<br/>
					<label>price per week</label>
					{ this.renderError.call(this, 'price_per_week') }
					<input 	type="input" 
							ref="price_per_week"
							className="form-control"/>
					<br/>
					<label>desposit amount</label>
					{ this.renderError.call(this, 'desposit_amount') }
					<input 	type="input" 
							ref="desposit_amount"
							className="form-control"/>
					<br/>
				</div>
				<EquipmentUploaderView/>
				<button type="submit"
						className="btn btn-primary col-sm-12">
						Add Item
				</button>
			</form>
		)
	}

}