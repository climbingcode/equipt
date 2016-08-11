const NOTICE_DURATION = 5000;

class NoticeController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [ErrorsStore];
		this.state = {
			errors: ErrorsStore.getErrors(),
			info: {}
		}
		this.timeout;
	}

	_onChange() {	
	    this.setState({
	    	errors: ErrorsStore.getErrors()
	    });
	    this.clearNotices();
  	}

	clearNotices() {
		setTimeout(() => {
			hasErrors(null);
		}, NOTICE_DURATION);
	}

	render() {

		return (
			<NoticeView errors={this.state.errors.notice}/>
		)
	}

}