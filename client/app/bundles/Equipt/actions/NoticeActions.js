import Api from 'config/Api';
import Constants from 'config/Constants';
import dispatchAction from './actionsSettings';

export default {

	hasErrors: (errors) => {
		dispatchAction(Constants.HAS_ERRORS, errors);
	},

	hasNotice: (notice) => {
		dispatchAction(Constants.HAS_NOTICE, notice);
	},

	clearNotice: () => {
		dispatchAction(Constants.CLEAR_NOTICE);
	}

};

