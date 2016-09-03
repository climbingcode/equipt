Equipt.views.NoticeView = class NoticeView extends React.Component {

	constructor(props) {
		super(props);
	}

	close() {
		Equipt.actions.clearNotice();
	}

	getAlertClassName() {
		let notice = this.props.notice;
		if (notice && notice.error) return "alert alert-danger notice";
		else if (notice && notice.info) return "alert alert-info notice";
		else return "notice";
	}

	getTextClassName() {
		let notice = this.props.notice;
		if (notice && notice.error) return "text-danger";
		else if (notice && notice.info) return "text-info";
	}

	render() {

		let noticeHtml = null;
		let close      = null;
		let notice     = this.props.notice;

		if (notice.error || notice.info) {
			close = <i 	className="pull-right fa fa-times" 
						aria-hidden="true"
						onClick={ this.close.bind(this) }></i>;
		}

		return (
			<ul className={ this.getAlertClassName.call(this) }>
				<li className={ this.getTextClassName.call(this) }>
					{ close }
					{ notice.error ? notice.error : notice.info }
				</li>
			</ul>
		)

	}


}