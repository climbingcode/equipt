const Route 	   = ReactRouter.Route;
const Location 	   = ReactRouter.HistoryLocation;
const DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = (
	<Route 	name="app" 
			handler={Equipt.App} 
			path="/">
		<Route 	name="home"  
				handler={Home} 
				path="home"/>
		<Route 	name="login" 
				handler={Equipt.controllers.LoginController} 
				path="login"/>
		<Route 	name="signup" 
				handler={Equipt.controllers.SignupController} 
				path="signup"/>
		<Route  name="profile"
				handler={Equipt.controllers.ProfileController}
				path="users/:userId/edit"
		/>
		<Route  name="equipmentCreate"
				handler={Equipt.controllers.EquipmentCreateController}
				path="equipment/new"
		/>
		<Route 	name="equipmentIndex" 
				handler={Equipt.controllers.EquipmentIndexController} 
				path="equipment">
				<Route 	name="equipmentShow"
						handler={Equipt.controllers.EquipmentShowController}
						path=":id">
					<Route 	name="equipmentAvailability"
							handler={Equipt.views.EquipmentAvailabilityView}
							path="availability"/>
					<Route 	name="equipmentInfo"
							handler={Equipt.views.EquipmentInfoView}
							path="info"/>
					<Route 	name="equipmentOwner"
							handler={Equipt.views.EquipmentOwnerView}
							path="owner"/>
					<Route  name="equipmentConfirmation"
							handler={Equipt.views.EquipmentConfirmationView}
							path="confirmation"/>
				</Route>
		</Route>
		<Route  name="ownersIndex"
			    handler={Equipt.controllers.OwnersIndexController}
				path="owner/:userId/equipment"/>
		<Route 	name="ownersShow"
				handler={Equipt.controllers.OwnersShowController}
				path="owner/:userId/equipment/:equipmentId"
		/>
		<DefaultRoute handler={Home}/>
	</Route>
), document.getElementById('root');

Equipt.controllers.EquipmentIndexController.willTransitionTo = function(transition) {
	if (!Equipt.stores.AuthStore.authenticated()) transition.redirect('/home');
}
