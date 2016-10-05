Equipt.views.EquipmentSearchTabsView = class EquipmentSearchTabsView extends React.Component {

	static propType = {
		selected: React.PropTypes.func.isRequired
	}	

	constructor(props) {
		super(props);
	}

	isStartingValue(category) {
		if (!this.props.value) return false;
		return category === this.props.value;
	}

	render() {

		var equipmentCategory = ['camp', 'snow', 'bike', 'lake'];
		var equipmentCategoryNodes = [];

		for (var i = 0; i < equipmentCategory.length; i++) {
			
			let category = equipmentCategory[i];
			let className = this.isStartingValue(category) ? "col-xs-3 selected" : 'col-xs-3';

			equipmentCategoryNodes.push(<li className={className} 
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