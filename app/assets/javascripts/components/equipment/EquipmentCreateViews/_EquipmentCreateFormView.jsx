Equipt.views.EquipmentCreateFormView = class extends Equipt.helpers.FormHelper {

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		Equipt.actions.addEquiptment(this.formData);
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
					<input 	type="text" 
							ref="equipment_name"
							className="form-control"
							placeholder="Title"
					/>
					<br/>
					<input 	type="text" 
							ref="brand"
							className="form-control"
							placeholder="brand"
					/>
					<br/>
					<input 	type="text" 
							ref="model"
							className="form-control"
							placeholder="model"
					/>
					<br/>
					<input 	type="text" 
							ref="description"
							className="form-control"
							placeholder="description"
					/>
					<br/>
					<label>years old</label>
					<input 	type="number" 
							ref="years_old"
							className="form-control"/>
					<br/>
					<label>price per day</label>
					<input 	type="input" 
							ref="price_per_day"
							className="form-control"/>
					<br/>
					<label>price per week</label>
					<input 	type="input" 
							ref="price_per_week"
							className="form-control"/>
					<br/>
					<label>desposit amount</label>
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