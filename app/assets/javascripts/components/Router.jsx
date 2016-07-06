var Route = ReactRouter.Route;

this.Routes = (
	<Route name="home" handler={App} path="/">
		<Route/>
	</Route>
), document.getElementById('root');

ReactRouter.run(Routes, function (Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('app'));
});
