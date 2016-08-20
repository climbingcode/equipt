
Equipt.stores.EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	_equipments: [],
	_equipment: {}, 

	getEquipments() {
        return this._equipments;
	},

	getEquipment() {
		return this._equipment;	
	},

	setEquipments(equipment) {
		this._equipments = equipment;
	},

	setEquipment(equipment) {
		this._equipment = equipment;
	},

	addEquipment(equipment) {
		this._equipments.push(equipment);
	},

	findEquipment(id) {
		let foundEquipment = false
		this._equipments.forEach(function(equipment) {
			if (equipment.id == id) foundEquipment = equipment;	
		});
		return foundEquipment;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	let EquipmentStore = Equipt.stores.EquipmentStore;
  	
  	switch(type) {
		case Constants.EQUIPMENT_INDEX:
			EquipmentStore.setEquipments(data);
		break; 
		case Constants.EQUIPMENT_SHOW:
			EquipmentStore.setEquipment(data);
		break;
		case Constants.EQUIPMENT_CREATE:
			EquipmentStore.addEquipment(data);
		break;
		case Constants.OWNERS_EQUIPMENT_INDEX:
			EquipmentStore.setEquipment(data);
		break;
	}

	EquipmentStore.emitChange();

});