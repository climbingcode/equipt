Equipt.stores.OwnerStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

  _rentals: [],
  _equipments: [],
  _pages: 0,

  setEquipments(equipments) {
    this.equipments = equipments;
  },

  setRentals(rentals) {
  	this._rentals = rentals;
  },

  setPages(pages) {
    this._pages = pages;
  },

  getEquipments() {
    return this.equipments;
  },

  getRentals() {
    return this._rentals;
  },

  deleteEquipment(equipment) {
    this.setEquipments(this.removedRecord(equipment, this._equipments));
  },

  deleteRental(rental) {
    this.setRentals(this.removedRecord(rental, this._rentals));
  }

});

AppDispatcher.register(function(action) {
  
	const OwnerStore = Equipt.stores.OwnerStore;  
  const {type, data} = action.payload;

	switch(type) {
    case Constants.OWNERS_EQUIPMENT_INDEX:
      OwnerStore.setEquipments(data.equipment);
      OwnerStore.setPages(data.total);
    break;
    case Constants.OWNERS_EQUIPMENT_DELETE:
      OwnerStore.deleteEquipment(data);
    break;
    case Constants.OWNERS_RENTAL_INDEX:
      OwnerStore.setRentals(data);
    break;
    case Constants.OWNERS_RENTAL_DELETE:
      OwnerStore.deleteRental(data);
    break;
	}

  OwnerStore.emitChange();

});