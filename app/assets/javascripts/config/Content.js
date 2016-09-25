Equipt.content = {

	// EQUIPMENT 
	createEquipment: {

		typeOptions: {
			'camp': ['tent', 'stove', 'sleeping bag', 'mat'],
			'snow': ['snowboard', 'bindings', 'skis', 'boots', 'jacket'],
			'lake': ['kayak', 'canone', 'row'],
			'bike': ['mountain bike', 'road bike', 'helmet']
		},
		formInputs: [	
			{
				name: 'equipment_name',
				type: 'text',
				tag: 'input',
				placeholder: 'Name'
			}, 
			{
				name: 'brand',
				type: 'text',
				tag: 'input',
				placeholder: 'Brand'
			}, 
			{ 
				name: 'model',
				type: 'text',
				tag: 'input',
				placeholder: 'Model Number'
			}, 
			{
				name: 'description',
				type: 'text',
				tag: 'textarea',
				placeholder: 'Description'
			}, 
			{
				name: 'years_old',
				type: 'number',
				tag: 'input',
				placeholder: 'Years old'
			}, 
			{
				name: 'price_per_day',
				type: 'number',
				tag: 'input',
				placeholder: 'Price per Day'
			},
			{
				name: 'price_per_week',
				type: 'number',
				tag: 'input',
				placeholder: 'Price per Week'
			},
			{
				name: 'desposit_amount',
				type: 'number',
				tag: 'input',
				placeholder: 'Deposit Amount'
			}
		]

	}

};