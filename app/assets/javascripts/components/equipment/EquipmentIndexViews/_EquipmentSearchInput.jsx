Equipt.views.EquipmentSearchInput = class EquipmentSearchInput extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired,
		selected: React.PropTypes.func.isRequired
	}

	submit(e) {
		e.preventDefault();
		let searchInput = this.refs.searchInput.value;
		this.props.search.fuzzy_search = searchInput;
		this.props.selected(this.props.search);
	}

	componentWillReceiveProps() {
		let searchInput = this.refs.searchInput;
		if (!this.props.search.fuzzy_search.length) {
			searchInput.value = '';
		}
	}

	render() {
		return (
			<div className="search-form-container col-xs-3">
				<form onSubmit={ this.submit.bind(this) }>
					<input  className="form-control search-input"
							ref="searchInput"
							placeholder="Search"/>
					<button className="btn btn-success search-btn">
						<i className="fa fa-search" aria-hidden="true"/>
					</button>
				</form>
			</div>
		)		
	}

}