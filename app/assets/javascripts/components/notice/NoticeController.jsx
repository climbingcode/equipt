const NOTICE_DURATION = 5000;

Equipt.controllers.NoticeController = class NoticeController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.NoticeStore ];
		this.state = {
			notice: Equipt.stores.NoticeStore.getNotice()
		}
		this.timeout;
	}

	_onChange() {	
	    this.setState({
	    	notice: Equipt.stores.NoticeStore.getNotice()
	    });
  	}

	render() {
		let NoticeView = Equipt.views.NoticeView;

		return (
			<NoticeView notice={this.state.notice}/>
		)
	}

}