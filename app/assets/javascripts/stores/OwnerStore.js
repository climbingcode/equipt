Equipt.stores.OwnerStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

    rentals: [],

    setRentals(rentals) {
    	this.rentals = rentals;
    },

    getRentals() {
        return this.rentals;
    },

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	const OwnerStore = Equipt.stores.OwnerStore;
  	
  	switch(type) {
  		case Constants.OWNERS_RENTAL_INDEX:
  			OwnerStore.setRentals(data);
  		break;
	}

    OwnerStore.emitChange();

});