const Route 	   = ReactRouter.Route;
const Location 	   = ReactRouter.HistoryLocation;
const DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = (
	<Route 	name="app" 
			handler={App} 
			path="/">
		<Route 	name="home"  
				handler={Home} 
				path="home"/>
		<Route 	name="login" 
				handler={LoginController} 
				path="login"/>
		<Route 	name="signup" 
				handler={SignupController} 
				path="signup"/>
		<Route 	name="equipmentIndex" 
				handler={EquipmentIndexController} 
				path="equipment">
				<Route 	name="equipmentShow"
						handler={EquipmentShowController}
						path=":id">
					<Route 	name="equipmentAvailability"
							handler={EquipmentAvailabilityView}
							path="availability"/>
					<Route 	name="equipmentInfo"
							handler={EquipmentInfoView}
							path="info"/>
					<Route 	name="equipmentOwner"
							handler={EquipmentOwnerView}
							path="owner"/>
					<Route  name="equipmentConfirmation"
							handler={EquipmentConfirmation}
							path="confirmation"/>
				</Route>
		</Route>
		<Route  name="ownersIndex"
			    handler={OwnersIndexController}
				path="owner/:id">

		</Route>
		<Route  name="equipmentCreate"
				handler={OwnersCreateController}
				path="owner/:id/equipment/new">
		</Route>
		<DefaultRoute handler={Home}/>
	</Route>
), document.getElementById('root');

EquipmentIndexController.willTransitionTo = function(transition) {
	if (!AuthStore.authenticated()) transition.redirect('/home');
}
