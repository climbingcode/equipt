Equipt.views.EquipmentSearchView = class EquipmentSearchView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selected: undefined
		}
	}

	_findBy(query) {
		Equipt.actions.showLoader();
		Equipt.actions.getEquipment(query);
		this.setState({
			selected: query.category
		});
	}

	render() {

		let EquipmentSearchTabsView = Equipt.views.EquipmentSearchTabsView;

		return (
			<div className="equipment-search-wrapper">
				<EquipmentSearchTabsView 	value={this.state.selected} 
											selected={ this._findBy.bind(this) }/>
			</div>
		)
	}

}