Equipt.views.EquipmentSearchDropDown = class EquiptmentSearchDropDown extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired
	}	

	subCategorySelected(subCategory) {
		this.props.search.sub_category = subCategory;
		this.props.selected(this.props.search);
	}

	render() {

		const OptionsHelper = Equipt.helpers.OptionsHelper;

		let search 		= this.props.search;
		let optionsJson = Equipt.content.createEquipment.typeOptions;
		let options     = optionsJson[search.category] || [];

		return (
			<div className="col-xs-3">	
			<OptionsHelper 	ref="sub_category"
							name="sub_category"
							options={options}
							value={ search.sub_category || '' }
							onChange={ this.subCategorySelected.bind(this) }/>
			</div>
		)
	}

}