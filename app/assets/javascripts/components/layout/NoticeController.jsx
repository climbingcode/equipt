const NOTICE_DURATION = 4000;

class NoticeController extends MainComponent {

	constructor(props) {
		super(props);
		this.store = ErrorsStore;
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