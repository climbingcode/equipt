var RouteHandler = ReactRouter.RouteHandler;

Equipt.App = class App extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	getState = function() {
		return {
			currentUser: Equipt.stores.AuthStore.currentUser() || {}
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.AuthStore];
		this.state = this.getState();
	}

	componentDidMount() {
		if (Equipt.stores.AuthStore.authenticated()) Equipt.actions.appInit();	
	}

	changePath() {

		var path = this.context.router.getCurrentPathname();

		// Change with onEnter in router on release of 
		// newer version of react-rails-router 1.0

		setTimeout(() => {
			if (Equipt.stores.AuthStore.authenticated() 
				&& ((path.indexOf('/equipment') > -1) || (path.indexOf('/owner') > -1)) ) {	
				this.context.router.transitionTo(path);
			} else if (Equipt.stores.AuthStore.authenticated()) {
				this.context.router.transitionTo(Constants.links.equipmentIndex);
			} else if (path.indexOf('/login') === -1) {			
				this.context.router.transitionTo(Constants.links.login);
			}
		});

	}

  	dataChanged() {
  		this.setState(this.getState());
		this.changePath.call(this);
  	}

	render() {

		let Nav = Equipt.views.Nav;
		let NoticeController = Equipt.controllers.NoticeController;
		let AjaxLoader = Equipt.controllers.AjaxLoader;

		return (
			<content>
				<AjaxLoader/>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<NoticeController/>
					<RouteHandler currentUser={this.state.currentUser}/>
				</div>
			</content>
		)
	}
	
}
