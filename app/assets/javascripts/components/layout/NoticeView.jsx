class NoticeView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let errors = this.props.errors;

		if (!errors) return (<ul className="no-errors"></ul>);

		return (
			<ul className="alert alert-danger">
				<li className="text-danger">
					{errors}
				</li>
			</ul>
		)
	}


}