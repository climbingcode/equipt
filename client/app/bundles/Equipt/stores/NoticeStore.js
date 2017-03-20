import Constants from 'Constants';
import AppDispatcher from 'dispatcher';
import StoreSettings from './StoreSettings';

const NoticeStore = Object.assign({}, StoreSettings, {

	_notice: {},

	getNotice() {
        return this._notice;
	},

	setNotice(notice) {
		this._notice = notice;
	},

	clearNotice() {
		this._notice = {};
	}

});

AppDispatcher.register(function(action) {
  
  	const {type, data} = action.payload;

  	switch(type) {
		case Constants.HAS_NOTICE:
			NoticeStore.setNotice(data);
		break; 
		case Constants.CLEAR_NOTICE:
			NoticeStore.clearNotice(data);
		break; 
	}
    
    NoticeStore.emitChange();

});

export default NoticeStore;