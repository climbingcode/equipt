Equipt.actions.showLoader = function() {
	dispatchAction(Constants.SHOW_LOADER);
	setTimeout(function() {
		dispatchAction(Constants.HIDE_LOADER);
	}, 5000);
};

Equipt.actions.hideLoader = function() {
	setTimeout(function() {
		dispatchAction(Constants.HIDE_LOADER);
	}, 2000);
};