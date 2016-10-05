Equipt.stores.ErrorsStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

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

  	let ErrorsStore = Equipt.stores.ErrorsStore;

  	switch(type) {
		case Constants.HAS_ERRORS:
			ErrorsStore.setErrors(data);
		break;
	}
    
    ErrorsStore.emitChange();

});