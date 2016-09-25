Equipt.views.EquipmentSearchView = class EquipmentSearchView extends React.Component {

	constructor(props) {
		super(props);
	}

	_findBy(query) {
		Equipt.actions.getEquipment(query);
	}

	render() {

		let EquipmentSearchTabsView = Equipt.views.EquipmentSearchTabsView;

		return (
			<div className="equipment-search-wrapper">
				<EquipmentSearchTabsView selected={ this._findBy.bind(this) }/>
			</div>
		)
	}

}