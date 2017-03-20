import React from 'react';

import { MainController } from 'MainController';
import { NoticeView } from 'components/notice/NoticeView';

import NoticeStore from 'stores/NoticeStore';

class NoticeController extends MainController {

	NOTICE_DURATION: 5000

	constructor(props) {
		super(props);
		this.stores = [ NoticeStore ];
		this.state = {
			notice: NoticeStore.getNotice()
		}
	}

	close() {
		clearTimeout(this.noticeTimeout);
		NoticeStore.clearNotice();
	}

	_onChange() {

	    this.setState({
	    	notice: NoticeStore.getNotice()
	    });

	    clearTimeout(this.noticeTimeout);

	    this.noticeTimeout = setTimeout(() => {
	    	NoticeStore.clearNotice();
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