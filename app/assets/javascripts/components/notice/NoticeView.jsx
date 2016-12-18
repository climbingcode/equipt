Equipt.views.NoticeView = class NoticeView extends React.Component {

	constructor(props) {
		super(props);
	}

	close() {
		Equipt.actions.clearNotice();
	}

	getAlertClassName() {
		let notice = this.props.notice;
		if (notice && notice.error) return "notice error";
		else if (notice && notice.info) return "notice info";
		else return "notice";
	}

	render() {

		let noticeHtml = null;
		let close      = null;
		let notice     = this.props.notice;

		if (notice.error || notice.info) {
			close = <i 	className="pull-right fa fa-times" 
						aria-hidden="true"
						onClick={ this.props.close.bind(this) }></i>;
		}

		if (notice.error && typeof notice.error === 'object') {
			
			let errors = Object.keys( notice.error );
				
			notice.error =  <ul>
							{
								errors.map((key, index) => {
									return <li 	key={ `error_${ key }_${ index }` }
												className={key}>{ notice.error[ key ] }
											</li>
								})
							}
							</ul>

		}

		return (			
			<div className={ this.getAlertClassName.call(this) }>
				{ close }
				{ notice.error ? notice.error : notice.info }
			</div>
		)

	}


}