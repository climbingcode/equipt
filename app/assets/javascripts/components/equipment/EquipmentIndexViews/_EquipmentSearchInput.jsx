Equipt.views.EquipmentSearchInput = class EquipmentSearchInput extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired,
		selected: React.PropTypes.func.isRequired
	}

	submit(e) {
		e.preventDefault();
		let searchInput = this.refs.searchInput.value;
		this.props.search.category = '';
		this.props.search.sub_category = '';
		this.props.search.fuzzy_search = searchInput;
		this.props.selected(this.props.search);
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