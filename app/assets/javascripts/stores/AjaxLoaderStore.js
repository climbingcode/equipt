Equipt.stores.AjaxLoaderStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	showLoader: false,

	isShown: function() {
		return this.showLoader
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	let AjaxLoaderStore = Equipt.stores.AjaxLoaderStore;
  	
 	switch(type) {
		case Constants.SHOW_LOADER:
			AjaxLoaderStore.showLoader = true;
		break;
		case Constants.HIDE_LOADER:
			AjaxLoaderStore.showLoader = false;
		break;
	}
	
	AjaxLoaderStore.emitChange();

});