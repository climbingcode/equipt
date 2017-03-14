Equipt.controllers.NoticeController = class NoticeController extends Equipt.controllers.MainController {

	NOTICE_DURATION: 5000

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.NoticeStore ];
		this.state = {
			notice: Equipt.stores.NoticeStore.getNotice()
		}
	}

	close() {
		clearTimeout(this.noticeTimeout);
		Equipt.actions.clearNotice();
	}

	_onChange() {

	    this.setState({
	    	notice: Equipt.stores.NoticeStore.getNotice()
	    });

	    clearTimeout(this.noticeTimeout);

	    this.noticeTimeout = setTimeout(() => {
	    	Equipt.actions.clearNotice();
	    }, 5000);
	    
  	}

	render() {

		let NoticeView = Equipt.views.NoticeView;

		return (
			<NoticeView notice={ this.state.notice } 
						close={ this.close }/>
		)
	}

}