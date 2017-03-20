import API from 'config/Api';
import Constants from 'config/Constants';
import dispatchAction from './actionsSettings';

export default {

	// =======================
	// GET THE CURRENT SESSION
	// =======================

	getSession: (callback) => {

		API.get('/current_user').then(
			(res) => {
				dispatchAction(Constants.NEW_SESSION, res.data);
				callback();
			}, 
			(err) => {
				console.log(err.responseText);
			}
		);

	},

	// ===============
	// NEW SESSION
	// ===============

	createSession: (userData) => {

		API.post('/session', userData).then(
			(res) => {
				dispatchAction(Constants.NEW_SESSION, res.data);
			}, 
			(err) => {
				console.log(err.responseText);
			}
		);

	},

	// ===============
	// END SESSION
	// ===============

	endSession: () => {
		dispatchAction(Constants.END_SESSION, null);
	}, 

	// ======================
	// IF 500 UNAUTH RESPONSE
	// ======================

	unauthorizedUser: () => {
		dispatchAction(Constants.END_SESSION, null);
	},

	// ======================
	// FACEBOOK LOGIN
	// ======================

	facebookStatusChanged: (isLoggedIn) => {
		// Must be sent to exact path below to work
		if (isLoggedIn) {	
			$.post('/auth/facebook/callback').then(function(data) {
				dispatchAction(Constants.FACEBOOK_LOGIN, data);
			});
		}
	}

};
