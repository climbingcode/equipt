Equipt.actions.showLoader = function() {
	dispatchAction(Constants.SHOW_LOADER);
};

Equipt.actions.hideLoader = function() {
	setTimeout(function() {
		dispatchAction(Constants.HIDE_LOADER);
	}, 2000);
};