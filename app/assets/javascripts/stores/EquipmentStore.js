Equipt.stores.EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	_equipments: [],
	_equipment: {}, 
	_search: {
		category: '',
		sub_category: '',
		fuzzy_search: '',
		dates: {
			pickup: "",
			dropoff: ""
		}
	},

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

	getSearchQuery() {
		return this._search;
	},

	searchEquipment(query) {
		for (searchType in query) {
			this._search[searchType] = query[searchType];
		}
	},

	clearSearch() {
		this._search = {
			category: '',
			sub_category: '',
			dates: {
				pickup: "",
				dropoff: ""
			}			
		};
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
		case Constants.SEARCH_EQUIPMENT:
			EquipmentStore.searchEquipment(data);
		break;
		case Constants.CLEAR_SEARCH: 
			EquipmentStore.clearSearch();
		break;
	}

	EquipmentStore.emitChange();

});