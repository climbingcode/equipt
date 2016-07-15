function dispatchAction(type, data) {
	AppDispatcher.handleViewAction({
		type: type,
		data: data 
	});
};