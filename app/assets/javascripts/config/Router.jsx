var Route = ReactRouter.Route;
var Location = ReactRouter.HistoryLocation;

this.Routes = (
	<Route name="app" handler={App} path="/">
		<Route name="login" handler={Login} path="login"/>
		<Route name="signup" handler={Signup} path="signup"/>
		<Route name="equipment" handler={Equipment} path="equipment"/>
	</Route>
), document.getElementById('root');

// Location listerner
Location.addChangeListener(function(location) {
	hasErrors(null);
});
