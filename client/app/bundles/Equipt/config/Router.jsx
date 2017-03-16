import React from 'react';

import { default as Router, Route, DefaultRoute } from 'react-router';

// CONTROLLERS
import { Equipt } from 'components/Equipt';
import { LoginController } from 'components/session/LoginController';
import { SignupController } from 'components/users/SignupController';
import { ProfileController } from 'components/users/ProfileController';
import { EquipmentCreateController } from 'components/equipment/EquipmentCreateController';
import { EquipmentIndexController } from 'components/equipment/EquipmentIndexController';
import { EquipmentShowController } from 'components/equipment/EquipmentShowController';
import { EquipmentEditController } from 'components/equipment/EquipmentEditController';
import { OwnersIndexController } from 'components/owners/OwnersIndexController';
import { OwnersShowController } from 'components/owners/OwnersShowController';
import { RentalsIndexController } from 'components/rentals/RentalsIndexController';

// VIEWS
import { Home } from 'components/layout/Home';
import { ForgotPasswordView } from 'components/forgotPassword/ForgotPasswordView';
import { ForgotPasswordResetView } from 'components/forgotPassword/ForgotPasswordResetView'
import { EquipmentAvailabilityView } from 'components/equipment/EquipmentShowViews/EquipmentAvailabilityView';
import { EquipmentInfoView } from 'components/equipment/EquipmentShowViews/EquipmentInfoView';
import { EquipmentOwnerView } from 'components/equipment/EquipmentShowViews/EquipmentOwnerView';

const Routes = (
	<Route 	name="app" 
			handler={ Equipt } 
			path="/">
		<Route 	name="home"  
				handler={ Home } 
				path="home"/>
		<Route 	name="login" 
				handler={ LoginController } 
				path="login"/>
		<Route 	name="forgotPasswordCreate"
				handler={ ForgotPasswordView }
				path="forgot"/>
		<Route 	name="forgotPasswordEdit"
				handler={ ForgotPasswordResetView }
				path="forgot/:passwordResetToken"/>
		<Route 	name="signup" 
				handler={ SignupController } 
				path="signup"/>
		<Route  name="profile"
				handler={ ProfileController }
				path="users/:userId/edit"/>
		<Route  name="equipmentCreate"
				handler={ EquipmentCreateController }
				path="equipment/new"/>
		<Route 	name="equipmentIndex"
				handler={ EquipmentIndexController } 
				path="equipment"/>
		<Route 	name="equipmentShow"
				handler={ EquipmentShowController }
				path="equipment/:id">
				<Route 	name="equipmentAvailability"
						handler={ EquipmentAvailabilityView }
						path="availability"/>
				<Route 	name="equipmentInfo"
						handler={ EquipmentInfoView }
						path="info"/>
				<Route 	name="equipmentOwner"
						handler={ EquipmentOwnerView }
						path="owner"/>
		</Route>
		<Route 	name="equipmentEdit"
				handler={ EquipmentEditController }
				path="equipment/:id/edit"/>
		<Route  name="ownersIndex"
			    handler={ OwnersIndexController }
				path="owner/:userId/equipment"/>
		<Route 	name="ownersShow"
				handler={ OwnersShowController}
				path="owner/:userId/equipment/:equipmentId"/>
		<Route  name="rentalsIndex"
			    handler={ RentalsIndexController }
				path="owner/:userId/rentals"/>
		<DefaultRoute handler={ Equipt }/>
	</Route>
);

// Location.addChangeListener((pathName) => {
// 	Equipt.actions.showLoader();
// });
