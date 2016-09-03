Equipt.stores.NoticeStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

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
  
  	var {type, data} = action.payload;

  	let NoticeStore = Equipt.stores.NoticeStore;

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