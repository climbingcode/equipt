var _equipment = [];

const EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getEquipment() {
        return _equipment;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
  	switch(type) {
		case Constants.EQUIPMENT_INDEX:
			_equipment = data;
            EquipmentStore.emitChange();
		break; 
	}

});