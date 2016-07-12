// =================
// GET ALL EQUIPMENT
// =================

function getEquipment() {

	API.get('/equipments').then(
		(data) => {
			AppDispatcher.handleViewAction({
				type: Constants.EQUIPMENT_INDEX,
				data: data 
			});
		},
		(err) => {

		}
	);

}