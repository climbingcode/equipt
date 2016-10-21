const Route 	   = ReactRouter.Route;
const Location 	   = ReactRouter.HistoryLocation;
const DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = (
	<Route 	name="app" 
			handler={Equipt.App} 
			path="/">
		<Route 	name="home"  
				handler={Equipt.views.Home} 
				path="home"/>
		<Route 	name="login" 
				handler={Equipt.controllers.LoginController} 
				path="login"/>
		<Route 	name="forgotPassword"
				handler={Equipt.controllers.ForgotPasswordController}
				path="forgot"/>
		<Route 	name="signup" 
				handler={Equipt.controllers.SignupController} 
				path="signup"/>
		<Route  name="profile"
				handler={Equipt.controllers.ProfileController}
				path="users/:userId/edit"/>
		<Route  name="equipmentCreate"
				handler={Equipt.controllers.EquipmentCreateController}
				path="equipment/new"/>
		<Route 	name="equipmentIndex" 
				handler={Equipt.controllers.EquipmentIndexController} 
				path="equipment"/>
		<Route 	name="equipmentShow"
				handler={Equipt.controllers.EquipmentShowController}
				path="equipment/:id">
				<Route 	name="equipmentAvailability"
						handler={Equipt.views.EquipmentAvailabilityView}
						path="availability"/>
				<Route 	name="equipmentInfo"
						handler={Equipt.views.EquipmentInfoView}
						path="info"/>
				<Route 	name="equipmentOwner"
						handler={Equipt.views.EquipmentOwnerView}
						path="owner"/>
		</Route>
		<Route 	name="equipmentEdit"
				handler={Equipt.controllers.EquipmentEditController}
				path="equipment/:id/edit"/>
		<Route  name="ownersIndex"
			    handler={Equipt.controllers.OwnersIndexController}
				path="owner/:userId/equipment"/>
		<Route 	name="ownersShow"
				handler={Equipt.controllers.OwnersShowController}
				path="owner/:userId/equipment/:equipmentId"
		/>
		<DefaultRoute handler={Equipt.views.Home}/>
	</Route>
), document.getElementById('root');

Location.addChangeListener((pathName) => {
	Equipt.actions.clearNotice();
	Equipt.actions.showLoader();
});
