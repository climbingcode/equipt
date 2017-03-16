import { MainController } from 'MainController';
import { NoticeView } from 'components/notice/NoticeView';

class NoticeController extends MainController {

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

		return (
			<NoticeView notice={ this.state.notice } 
						close={ this.close }/>
		)
	}

}

export { NoticeController };