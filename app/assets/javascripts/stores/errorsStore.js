var _errors = {};

const ErrorsStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getData() {
        return _errors;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, errors} = action.payload;
  	
  	switch(type) {
		case Constants.HAS_ERRORS:
			_errors = errors || {};
            ErrorsStore.emitChange();
		break; 
	}

});