import Constants from 'Constants';
import dispatchAction from 'actions/actionsSettings';

export default {

	showLoader: () => {
		dispatchAction(Constants.SHOW_LOADER);
		setTimeout(function() {
			dispatchAction(Constants.HIDE_LOADER);
		}, 5000);
	},

	hideLoader: () => {
		setTimeout(function() {
			dispatchAction(Constants.HIDE_LOADER);
		}, 2000);
	}

};