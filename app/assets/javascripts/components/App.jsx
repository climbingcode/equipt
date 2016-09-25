var RouteHandler = ReactRouter.RouteHandler;

Equipt.App = class App extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	componentDidMount() {
		if (Equipt.stores.AuthStore.authenticated()) Equipt.actions.appInit();	
	}

	componentWillMount() {
		Equipt.stores.AuthStore.addChangeListener(this._onLoginChange.bind(this));
	}
  	
  	componentWillUnmount() {
    	Equipt.stores.AuthStore.removeChangeListener(this._onLoginChange.bind(this));
  	}

  	_onLoginChange() {

  		this.setState({
			currentUser: Equipt.stores.AuthStore.currentUser()
		});

		if (Equipt.stores.AuthStore.authenticated()) {
			setTimeout(() => {
				var path = this.context.router.getCurrentPathname();
				if (path.indexOf('/equipment') > -1) {
					this.context.router.transitionTo(path);
				} else {
					this.context.router.transitionTo(Constants.links.equipmentIndex);
				}
			});
		} else {			
			setTimeout(() => {
				this.context.router.transitionTo(Constants.links.login);
			});
		}

  	}

	render() {

		let Nav = Equipt.views.Nav;
		let NoticeController = Equipt.controllers.NoticeController;

		return (
			<content>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<NoticeController/>
					<RouteHandler currentUser={this.state.currentUser}/>
				</div>
			</content>
		)
	}
	
}
