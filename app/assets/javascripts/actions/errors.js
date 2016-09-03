function hasErrors(errors) {
	dispatchAction(Constants.HAS_ERRORS, errors);
};

function hasNotice(notice) {
	dispatchAction(Constants.HAS_NOTICE, notice);
};

Equipt.actions.clearNotice = function() {
	dispatchAction(Constants.CLEAR_NOTICE);
};
