var Route = ReactRouter.Route;
var Location = ReactRouter.HistoryLocation;
var DefaultRoute = ReactRouter.DefaultRoute;

this.Routes = React.createElement(
		Route,
		{ name: "app",
				handler: App,
				path: "/" },
		React.createElement(Route, { name: "home",
				handler: Home,
				path: "home" }),
		React.createElement(Route, { name: "login",
				handler: Login,
				path: "login" }),
		React.createElement(Route, { name: "signup",
				handler: Signup,
				path: "signup" }),
		React.createElement(
				Route,
				{ name: "equipmentIndex",
						handler: EquipmentIndexController,
						path: "equipments" },
				React.createElement(Route, { name: "equipmentShow",
						handler: EquipmentShowController,
						path: ":id" })
		),
		React.createElement(DefaultRoute, { handler: Home })
), document.getElementById('root');

// Location listerner
Location.addChangeListener(function (location) {
		hasErrors(null);
});

EquipmentIndexController.willTransitionTo = function (transition) {
		if (!AuthStore.authenticated()) transition.redirect('/home');
};
