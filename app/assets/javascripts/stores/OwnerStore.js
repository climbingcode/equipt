Equipt.stores.OwnerStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

    rentals: [],

    setRentals(rentals) {
    	this.rentals = rentals;
    },

    getRentals() {
        return this.rentals;
    },

    removeRental(rentalId, callback) {

      for (var i = 0; i < this.rentals.length; i++) {
        let rental = this.rentals[i];
        if ( rental.id === rentalId ) {
          this.rentals.splice(i, 1);
          callback();
          break;
        }
      };

    }

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	const OwnerStore = Equipt.stores.OwnerStore;
  	
  	switch(type) {
  		case Constants.OWNERS_RENTAL_INDEX:
  			OwnerStore.setRentals(data);
        OwnerStore.emitChange();
      break;
      case Constants.OWNERS_DELETES_RENTAL:
        OwnerStore.removeRental(data.id, () => {
          OwnerStore.emitChange();
        });
      break;
  }


});