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
		const EquiptmentSearchDate	   = Equipt.views.EquiptmentSearchDate;

		return (
			<div className="equipment-search-wrapper">
				<EquipmentSearchTabsView 	search={ this.props.search }
											selected={ this.selected }/>										
				<EquiptmentSearchDropDown 	search={ this.props.search }
											selected={ this.selected }/>
				<EquiptmentSearchInput 	search={ this.props.search }
										selected={ this.selected }/>
				<EquiptmentSearchDate 	search={ this.props.search }
										selected={ this.selected }/>
				<button className="btn btn-success col-xs-2"
						onClick={this.selected.bind(this, {
							category: '',
							sub_category: '',
							fuzzy_search: ''
						})}>All Equipment</button>
				<div className="clearfix"/>
			</div>
		)
	}

}