Equipt.views.EquipmentTabsView = class EquipmentTabsView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let tabOptions  = ['Availability', 'Info', 'Owner'];
		let equipmentId = Equipt.stores.EquipmentStore.getEquipment().id || 0;

		return (
			<div className="equipment-info-tabs tabs">
				{tabOptions.map(function(tabName, i) {
					return 	<Link to={ `equipment${tabName}` }
								  params={{ id: equipmentId }}
								  key={ `equipment-tab-${i}` }>
								<div className="col-sm-4 tab">
									{tabName}
								</div>
							</Link>
				})}
			</div>
		)
	}

}