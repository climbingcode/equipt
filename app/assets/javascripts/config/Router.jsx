const Route 	   = ReactRouter.Route;
const Location 	   = ReactRouter.HistoryLocation;
const DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = (
	<Route 	name="app" 
			handler={App} 
			path="/">
		<Route 	name="home"  
				handler={Home} 
				path="home"/>
		<Route 	name="login" 
				handler={Login} 
				path="login"/>
		<Route 	name="signup" 
				handler={Signup} 
				path="signup"/>
		<Route 	name="equipment" 
				handler={Equipment} 
				path="equipment"/>
		<DefaultRoute handler={Home}/>
	</Route>
), document.getElementById('root');

// Location listerner
Location.addChangeListener(function(location) {
	hasErrors(null);
});

Equipment.willTransitionTo = function(transition) {
	if (!AuthStore.authenticated()) transition.redirect('/home');
}
