Equipt.views.EquipmentTabsView = class EquipmentTabsView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {

		let tabOptions  = ['Availability', 'Info', 'Owner'];
		let equipmentId = Equipt.stores.EquipmentStore.getEquipment().id || 0;

		if (!this.currentTab) this.currentTab = tabOptions[0];

		return (
			<div style={ this.styles.tabs }>
				{tabOptions.map((tabName, i) => {

					let selectedTab = tabName === this.currentTab ? this.styles.selected : {};

					return 	<Link to={ `equipment${tabName}` }
								  params={{ id: equipmentId }}
								  key={ `equipment-tab-${i}` }
								  onClick={ this.setTab.bind(this, tabName) }>
								<div className="col-sm-4"
									style={{ ...this.styles.tab, ...selectedTab }}>
									{tabName}
								</div>
							</Link>
				})}
			</div>
		)
	}

	setTab(tab) {
		this.currentTab = tab;
	}

	styles = {

		tabs: {
		    'clear': 'both',
		    'padding': 0,
		    'height': 55,
		    'background': '#fff',
		    'border': '1px solid #000'
		},
		tab: {
		    'height': 53,
		    'cursor': 'pointer',
		    'textTransform': 'uppercase',
		    'fontSize': '30px',
		    'lineHeight': 1.8,
		    'textAlign': 'center',
		    'listStyle': 'none',
		    'borderLeft': '1px solid #000'
		},
		firstTab: {
			'borderLeft': 'none'    
		},
		selected: {
		    'color': '#fff',
		    'background': Constants.styles.primary
		}
	
	}

}