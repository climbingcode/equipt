var _equipments = [];
var	_equipment = {};

Equipt.stores.EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getEquipments() {
        return _equipments;
	},

	getEquipment() {
		return _equipment;	
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	let EquipmentStore = Equipt.stores.EquipmentStore;
  	
  	switch(type) {
		case Constants.EQUIPMENT_INDEX:
			_equipments = data;
            EquipmentStore.emitChange();
		break; 
		case Constants.EQUIPMENT_SHOW:
			_equipment = data;
			EquipmentStore.emitChange();
		break;
		case Constants.OWNERS_EQUIPMENT_INDEX:
			_equipment = data;
			EquipmentStore.emitChange();
		break;
	}

});