
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

	removeEquipment(equipment) {
		let id = equipment.id;
		let equipments = this._equipments.filter((equipment, index) => {		
			if (equipment.id !== id) return this._equipment;
		});
		this.setEquipments(equipments);
	},

	findEquipment(id) {
		debugger;
		let id = equipment.id;
		return this._equipments.each((equipment, index) => {		
			if (equipment.id === id) return this._equipment;
		});
	}

});


AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
	
	let EquipmentStore = Equipt.stores.EquipmentStore;

  	switch(type) {
		case Constants.EQUIPMENT_INDEX:
		case Constants.OWNERS_EQUIPMENT_INDEX:
			EquipmentStore.setEquipments(data);
		break; 
		case Constants.EQUIPMENT_SHOW:
			EquipmentStore.setEquipment(data);
		break;
		case Constants.EQUIPMENT_CREATE:
			EquipmentStore.addEquipment(data);
		break;
		case Constants.EQUIPMENT_DELETE:
			EquipmentStore.removeEquipment(data);
		break;
	}

	EquipmentStore.emitChange();

});