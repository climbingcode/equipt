import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		payload: action
	});
};

export default AppDispatcher;