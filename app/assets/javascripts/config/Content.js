Equipt.content = {

	// HOME 
	home: {
		title: "Find Local Outdoor Equipment for your next adventure",
		howItWorks: {
			title: "How it Works"
		}
	},

	// USER
	createUser: {
		formInputs: [
			{
				name: 'firstname',
				type: 'text',
				tag: 'input',
				placeholder: 'First Name'
			},
			{
				name: 'lastname',
				type: 'text',
				tag: 'input',
				placeholder: 'Last Name'
			},
			{
				name: 'username',
				type: 'text',
				tag: 'input',
				placeholder: 'User Name'
			},
			{
				name: 'email',
				type: 'text',
				tag: 'input',
				placeholder: 'Email'
			},
			{
				name: 'email_confirmation',
				type: 'text',
				tag: 'input',
				placeholder: 'Email Confirmation'
			},
			{
				name: 'password',
				type: 'password',
				tag: 'input',
				placeholder: 'Password'
			},
			{
				name: 'password_confirmation',
				type: 'password',
				tag: 'input',
				placeholder: 'Password Confirmation'
			},
			{
				name: 'lat',
				type: 'hidden',
				tag: 'input',
				placeholder: ''
			},
			{
				name: 'lng',
				type: 'hidden',
				tag: 'input',
				placeholder: ''
			}
		]
	},

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

	},

	mapTheme: [
	    {
	        "featureType": "water",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#aee2e0"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#abce83"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#769E72"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#7B8758"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#EBF4A4"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "color": "#8dab68"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#5B5B3F"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#ABCE83"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#A4C67D"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#9BBF72"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#EBF4A4"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.stroke",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#87ae79"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#7f2200"
	            },
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.stroke",
	        "stylers": [
	            {
	                "color": "#ffffff"
	            },
	            {
	                "visibility": "on"
	            },
	            {
	                "weight": 4.1
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#495421"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.neighborhood",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    }
	]


};