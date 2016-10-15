Equipt.views.EquipmentSearchTabsView = class EquipmentSearchTabsView extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired
	}

	isStartingValue(category) {
		return category === this.props.search.category;
	}

	render() {

		const equipmentCategorys = Object.keys(Equipt.content.createEquipment.typeOptions);
		
		let search = this.props.search;

		return (
			<ul className="equipment-category-container">
				{
					equipmentCategorys.map((category, index) => {

						let className = this.isStartingValue(category) ? "col-xs-3 selected" : 'col-xs-3';

						return 	<li className={className} 
									onClick={this.props.selected.bind(this, {
												category: category,
												sub_category: ''
											})}
									key={ `category_${index}` }>
									{category}
								</li>

					})
				}

			</ul>
		)
	}

}