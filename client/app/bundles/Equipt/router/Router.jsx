import React from 'react'
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// AUTH STORE
import AuthStore from 'stores/AuthStore';

// CONTAINERS
import { EquipmentIndexContainer } from 'containers/EquipmentIndexContainer';

// CONTROLLERS
import { Equipt } from 'components/Equipt';
import { NoticeController } from 'components/notice/NoticeController';
import { LoginController } from 'components/session/LoginController';
import { SignupController } from 'components/users/SignupController';
import { ProfileController } from 'components/users/ProfileController';
import { EquipmentCreateController } from 'components/equipment/EquipmentCreateController';
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

export default (props = {}) => {

	let historyObj = createBrowserHistory();

	const isAuthenticated = () => {
		if (AuthStore.authenticated()) return;
		historyObj.push({
			pathname: '/login'
		})
	}

	return (
		<Router history={ historyObj }>
			
			<Equipt history={ historyObj }>

				<div className="main-content col-xs-10 col-xs-offset-1">

					<NoticeController/>

					<Route 	component={ Home } 
							path="/"
							exact/>
					<Route 	component={ LoginController } 
							path="/login"
							facebookID={ props.facebookID }
					/>
					<Route 	component={ ForgotPasswordView }
							path="/forgot"/>
					<Route 	component={ ForgotPasswordResetView }
							path="/forgot/:passwordResetToken"/>
					<Route 	component={ SignupController } 
							path="/signup"/>
					<Route  component={ ProfileController }
							path="/users/:userId/edit"/>
					<Route  component={ EquipmentCreateController }
							path="/equipment/new"/>
					<Route 	component={ EquipmentIndexContainer } 
							path="/equipment"
							onEnter={ isAuthenticated() }/>
					<Route 	component={ EquipmentShowController }
							path="/equipment/:id"/>
					<Route 	component={ EquipmentAvailabilityView }
							path="/equipment/:id/availability"/>
					<Route 	component={ EquipmentInfoView }
							path="/equipment/:id/info"/>
					<Route 	component={ EquipmentOwnerView }
							path="/equipment/:id/owner"/>
					<Route 	component={ EquipmentEditController }
							path="/equipment/:id/edit"/>
					<Route  component={ OwnersIndexController }
							path="/owner/:userId/equipment"/>
					<Route 	component={ OwnersShowController}
							path="/owner/:userId/equipment/:equipmentId"/>
					<Route  component={ RentalsIndexController }
							path="/owner/:userId/rentals"/>

				</div>

			</Equipt>

		</Router>
	);

};