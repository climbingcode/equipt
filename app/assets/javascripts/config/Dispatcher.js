var dispatcher 	  = Flux.Dispatcher;
var AppDispatcher = new dispatcher();

AppDispatcher.handleViewAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		payload: action
	});
};