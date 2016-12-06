Equipt.stores.EquipmentStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	_equipments: [],
	_equipment: {}, 
	_showLoader: false,
	_pages: 1,
	_search: {
		category: '',
		sub_category: '',
		fuzzy_search: '',
		location: {
			lat: "",
			lng: ""
		},
		dates: {
			pickup: "",
			dropoff: ""
		},
		page: 1
	},

	getEquipments() {
        return this._equipments;
	},

	getEquipment() {
		return this._equipment;	
	},

	setEquipments(data) {
		this._equipments = data.equipment;
		this._pages = data.pages;
	},

	clearEquipments() {
		this._equipments = [];	
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
		
		this._showLoader = true;
		this.clearEquipments();

		for (searchType in query) {
			this._search[searchType] = query[searchType];
		}

	},

	showLoader() {
		return this._showLoader;
	},

	hasLoaded() {
		this._showLoader = false;	
	},

	getPages() {
		return this._pages;
	},

	clearSearch() {
		
		this._pages = 1;

		this._search = {
			category: '',
			sub_category: '',
			location: {
				lat: "",
				lng: ""
			},
			dates: {
				pickup: "",
				dropoff: ""
			},
			page: 1
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
			EquipmentStore.hasLoaded();	
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