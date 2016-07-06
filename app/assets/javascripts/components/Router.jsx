var Route = ReactRouter.Route;

this.Routes = (
	<Route name="app" handler={App} path="/">
		<Route name="login" handler={Login} path="login"/>
		<Route name="signup" handler={Signup} path="signup"/>
	</Route>
), document.getElementById('root');
