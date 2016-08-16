const NOTICE_DURATION = 5000;

Equipt.controllers.NoticeController = class NoticeController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.ErrorsStore ];
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			info: {}
		}
		this.timeout;
	}

	_onChange() {	
	    this.setState({
	    	errors: Equipt.stores.ErrorsStore.getErrors()
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