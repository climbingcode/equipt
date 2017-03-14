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
			<ul style={ this.styles.tabs }>
				{
					equipmentCategorys.map((category, index) => {

						let firstTabStyles = index === 0 ? this.styles.firstTab : {};
						let selectedStyles = this.isStartingValue(category) ? this.styles.selected : {};

						return 	<li className="col-xs-3"
									style={{ ...this.styles.tab, ...firstTabStyles, ...selectedStyles }} 
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