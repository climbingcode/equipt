import Constants from 'Constants';
import AppDispatcher from 'dispatcher';
import StoreSettings from './StoreSettings';

const AjaxLoaderStore = Object.assign({}, StoreSettings, {

	showLoader: false,

	isShown: function() {
		return this.showLoader
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
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

export default AjaxLoaderStore;