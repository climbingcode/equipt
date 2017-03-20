import Constants from 'Constants';
import AppDispatcher from 'dispatcher';
import StoreSettings from './StoreSettings';

const ErrorsStore = Object.assign({}, StoreSettings, {

	_errors: null,
	
	getErrors() {
        return this._errors;
	},

	setErrors(errors) {
		this._errors = errors || null;
	},

	clearErrors() {
		this._errors = null;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	switch(type) {
		case Constants.HAS_ERRORS:
			ErrorsStore.setErrors(data);
		break;
	}
    
    ErrorsStore.emitChange();

});

export default ErrorsStore;