// =================
// GET ALL EQUIPMENT
// =================

function getEquipment() {

	API.get('/equipments').then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_INDEX, data);
		},
		(err) => {
			console.log('Error Getting Equipment');
		}
	);

}
