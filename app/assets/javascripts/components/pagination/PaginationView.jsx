Equipt.views.PaginationView = class extends React.Component {

	static propType = {
		pages: React.PropTypes.number.isRequired,
		pageChange: React.PropTypes.func.isRequired
	}	

	pageChanged(page, event) {
		event.preventDefault();
		this.props.pageChange(page);
	}

	render() {

		let pages		   = this.props.pages;
		let pagesListItems = [];

		if (pages > 1) {
			for (var i = 1; i <= pages; i++) {
				pagesListItems.push(<li onClick={ this.pageChanged.bind(this, i) }
										key={`page_${i}`}
									>
		  								<a href="#">{ i }</a>
		  							</li>);
			}
		} 

		return(
			<div className="pagination-wrapper">
				<ul className="pagination pull-right">
				{ pagesListItems }
				</ul>
				<div className="clearfix"></div>
			</div>
		)
	}

}