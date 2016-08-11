function getOwnersEquipment() {

	API.get('/owner/equipments').then(
		(data) => {
			dispatchAction(Constants.OWNERS_EQUIPMENT_INDEX, data);
		},
		(err) => {
			console.log('Error Getting Owners Equipment');
		}
	);

}