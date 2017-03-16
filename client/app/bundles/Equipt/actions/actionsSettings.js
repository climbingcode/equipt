import AppDispatcher from 'dispatcher';

export default (type, data) => {
	AppDispatcher.handleViewAction({
		type: type,
		data: data 
	});
};