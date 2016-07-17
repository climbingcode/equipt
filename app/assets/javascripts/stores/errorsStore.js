var _errors = {};

const ErrorsStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getErrors() {
        return _errors;
	},

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	switch(type) {
		case Constants.HAS_ERRORS:
			_errors = data || {};
            ErrorsStore.emitChange();
		break; 
	}

});