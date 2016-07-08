const CHANGE_EVENT = 'change';

var _currentUser = {};

const CurrentUserStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getData() {
        return _currentUser;
	}

});

AppDispatcher.register(function(action) {
  
  var {type, newUser} = action.payload;
  
  switch(type) {
		case 'UPDATE_CURRENT_USER':
			_currentUser = newUser;
            CurrentUserStore.emitChange();
		break; 
	}

});