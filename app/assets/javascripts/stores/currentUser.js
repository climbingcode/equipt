var _currentUser = {};

const CurrentUserStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getData() {
        return _currentUser;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, newUser} = action.payload;
  
 	switch(type) {
		case Constants.NEW_SESSION:
			_currentUser = newUser;
            CurrentUserStore.emitChange();
		break; 
	}

});