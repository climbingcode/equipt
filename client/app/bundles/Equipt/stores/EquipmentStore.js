import Constants from 'Constants';
import AppDispatcher from 'dispatcher';
import StoreSettings from './StoreSettings';

let _equipments: [],
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
		pages: 1
	}

const EquipmentStore = Object.assign({}, StoreSettings, {

	getEquipments() {
        return _equipments;
	},

	getEquipment() {
		return _equipment;	
	},

	setEquipments(data) {
		_equipments = data.equipment;
		_pages = data.pages;
	},

	clearEquipments() {
		_equipments = [];	
	},

	setEquipment(equipment) {
		_equipment = equipment;
	},

	addEquipment(equipment) {
		_equipments.push(equipment);
	},

	removeEquipment(equipment) {
		this.setEquipments(this.removedRecord(equipment, _equipments));
	},

	getSearchQuery() {
		return _search;
	},

	searchEquipment(query) {
		
		_showLoader = true;
		this.clearEquipments();

		for (searchType in query) {
			_search[searchType] = query[searchType];
		}

	},

	showLoader() {
		return _showLoader;
	},

	hasLoaded() {
		_showLoader = false;	
	},

	getPages() {
		return _pages;
	},

	clearSearch() {
		
		_pages = 1;

		_search = {
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

  	switch(type) {
		case Constants.EQUIPMENT_INDEX:
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

export default EquipmentStore;