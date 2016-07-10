function hasErrors(errors) {
	AppDispatcher.handleViewAction({
		type: Constants.HAS_ERRORS,
		errors: errors
	});
};
