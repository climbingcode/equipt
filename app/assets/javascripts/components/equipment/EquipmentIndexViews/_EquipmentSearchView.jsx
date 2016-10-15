Equipt.views.EquipmentSearchView = class EquipmentSearchView extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired
	}

	selected(searchObj) {
		Equipt.actions.getEquipment(searchObj);
	}

	render() {

		const EquipmentSearchTabsView  = Equipt.views.EquipmentSearchTabsView;
		const EquiptmentSearchDropDown = Equipt.views.EquipmentSearchDropDown;
		const EquiptmentSearchInput    = Equipt.views.EquipmentSearchInput;

		return (
			<div className="equipment-search-wrapper">
				<EquipmentSearchTabsView 	search={ this.props.search }
											selected={ this.selected }/>
				<div className="col-xs-4">											
					<EquiptmentSearchDropDown 	search={ this.props.search }
												selected={ this.selected }/>
				</div>
				<div className="col-xs-3">
					<EquiptmentSearchInput 	search={ this.props.search }
											selected={ this.selected }/>
				</div>

				<div className="clearfix"/>
			</div>
		)
	}

}