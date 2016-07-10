const NOTICE_DURATION = 4000;

class Notice extends React.Component {

	constructor(props) {
		super(props);
	}

	clearNotices() {
		setTimeout(() => {
			delete this.props.errors.notice;
			hasErrors(this.props.errors);
		}, NOTICE_DURATION);
	}

	render() {
		
		var noticesContainer;
		var notices = [];
		var count = 0;

		if (this.props.errors) {

			for (notice in this.props.errors) {
				if (this.props.errors.notice) {
					notices.push(<p className="text-danger" key={`error_${count}`}>{this.props.errors.notice}</p>);
				}
			}
			count++;

		};

		if (notices.length) {

			noticesContainer = 	<div className={this.props.errors ? 'alert alert-danger' : 'alert alert-success'}>
									{notices}
								</div>;

			this.clearNotices();

		};

		

		return (
			<div className="notice-wrapper">
				{noticesContainer}
			</div>
		)
	}

}