Equipt.views.EquipmentSearchTabsView = class EquipmentSearchTabsView extends React.Component {

	static propType = {
		selected: React.PropTypes.func.isRequired
	}	

	constructor(props) {
		super(props);
	}

	render() {

		var equipmentCategory = ['camp', 'snow', 'bike', 'lake'];
		var equipmentCategoryNodes = [];

		for (var i = 0; i < equipmentCategory.length; i++) {
			let category = equipmentCategory[i];
			equipmentCategoryNodes.push(<li className="col-xs-3" 
											onClick={this.props.selected.bind(this, { category: category })}
											key={`category_${i}`}>
											{category}
										</li>);
		}

		return (
			<ul className="equipment-category-container">
				{equipmentCategoryNodes}
			</ul>
		)
	}

}