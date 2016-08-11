Equipt.views.EquipmentSearchView = class EquipmentSearchView extends React.Component {

	constructor(props) {
		super(props);
	}

	_findBy(query) {
		getEquipment(query);
	}

	render() {

		var equipmentCategory = ['camp', 'snow', 'bike', 'lake'];
		var equipmentCategoryNodes = [];

		for (var i = 0; i < equipmentCategory.length; i++) {
			let category = equipmentCategory[i];
			equipmentCategoryNodes.push(<li className="col-xs-3" 
											onClick={this._findBy.bind(this, { category: category })}
											key={`category_${i}`}>
											{category}
										</li>);
		}

		return (
			<div className="equipment-search-wrapper">
				<ul className="equipment-category-container">
					{equipmentCategoryNodes}
				</ul>
			</div>
		)
	}

}