import Events from 'events';

const CHANGE_EVENT = 'change';

const StoreSettings = Object.assign({}, Events.prototype, StoreSettings, {

	emitChange() {
        this.emit(CHANGE_EVENT);
	},

	addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback);
	},

	removedRecord(record, records) {
		let id = record.id;
    	return records.filter((record) => {
        	if (record.id !== id) return record;
    	});
	}

});

export default StoreSettings;